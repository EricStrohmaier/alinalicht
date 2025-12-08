"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const getFileExtension = (url: string): string => {
  return url.split(".").pop()?.toLowerCase() || "";
};

const isVideo = (extension: string): boolean => {
  const videoExtensions = ["mp4", "webm", "ogg", "mov", "avi", "m4v"];
  return videoExtensions.includes(extension);
};

const VideoWithPlaceholder = ({
  src,
  className,
  placeholder,
  pingPong = false,
  speed = 1,
}: {
  src: string;
  className?: string;
  placeholder?: string;
  pingPong?: boolean;
  speed?: number; // 1 = normal, < 1 = slower, > 1 = faster
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !placeholder) {
      console.warn("No placeholder provided for video");
    }
  }, [placeholder]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);
    video.load();

    if (video.readyState >= 2) {
      setVideoLoaded(true);
    }

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [src]);

  // Start forward playback when loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoLoaded) return;

    // Ensure any reverse RAF is stopped
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;

    video.playbackRate = Math.max(0.05, speed);
    video.play().catch(() => {});
  }, [videoLoaded, speed]);

  // Ping-pong: when the forward playback ends, play reverse using RAF stepping
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!pingPong) return;

    const stepReverse = (ts: number) => {
      if (!videoRef.current) return;
      const v = videoRef.current;
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - (lastTsRef.current as number)) / 1000; // seconds
      lastTsRef.current = ts;
      const rate = Math.max(0.05, speed);
      const nextTime = Math.max(0, v.currentTime - dt * rate);
      v.currentTime = nextTime;

      if (nextTime <= 0.001) {
        // Reached start: resume forward
        lastTsRef.current = null;
        v.playbackRate = Math.max(0.05, speed);
        v.play().catch(() => {});
        rafRef.current = null;
        return;
      }
      rafRef.current = requestAnimationFrame(stepReverse);
    };

    const handleEnded = () => {
      // Switch to manual reverse
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
      video.pause();
      rafRef.current = requestAnimationFrame(stepReverse);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTsRef.current = null;
    };
  }, [pingPong, speed, src]);

  return (
    <>
      {placeholder ? (
        <Image
          src={placeholder}
          loading="eager"
          priority
          sizes="100vw"
          alt="Background"
          className={cn(className, { invisible: videoLoaded })}
          quality={100}
          fill
        />
      ) : null}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop={!pingPong}
        controls={false}
        preload="auto"
        className={cn(className, { invisible: !videoLoaded })}
      />
    </>
  );
};

export const Background = ({
  src,
  placeholder,
  pingPong = false,
  speed = 1,
}: {
  src: string;
  placeholder?: string;
  pingPong?: boolean;
  speed?: number;
}) => {
  const extension = getFileExtension(src);
  const isVideoFile = isVideo(extension);

  const classNames =
    "absolute bg-background left-0 top-0 w-full h-full object-cover";

  if (isVideoFile) {
    return (
      <VideoWithPlaceholder
        src={src}
        className={classNames}
        placeholder={placeholder}
        pingPong={pingPong}
        speed={speed}
      />
    );
  }

  return (
    <Image
      priority
      loading="eager"
      src={src}
      alt="Background"
      className={classNames}
      sizes="100vw"
      fill
    />
  );
};

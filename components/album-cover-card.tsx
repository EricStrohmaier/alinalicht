"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AlbumCoverCard({
  title = "Latest Release",
  href = "https://fanlink.tv/alinalicht-nobody",
  imgSrc = "/img/nobody.jpg",
  className,
}: {
  title?: string;
  href?: string;
  imgSrc?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative w-full max-w-sm select-none",
        "rounded-3xl border-2 backdrop-blur-xl border-white/50 bg-primary/20",
        "overflow-hidden shadow-button",
        className
      )}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative w-full aspect-square">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 bg-linear-to-t from-black/50" />
        </div>
        <div className="flex justify-between items-center p-4">
          <h3 className="text-base font-semibold md:text-lg text-white/60">
            {title}
          </h3>
          <span className="text-sm md:text-base text-white/60">Listen →</span>
        </div>
      </Link>
    </section>
  );
}

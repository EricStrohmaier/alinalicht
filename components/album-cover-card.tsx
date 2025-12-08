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
        "rounded-3xl border-2 border-white/50 backdrop-blur-xl bg-primary/20",
        "shadow-button overflow-hidden",
        className
      )}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="group block">
        <div className="relative aspect-square w-full">
          <Image
            src={imgSrc}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex items-center justify-between p-4">
          <h3 className="text-base md:text-lg font-semibold text-foreground">{title}</h3>
          <span className="text-sm md:text-base text-foreground/80">Listen →</span>
        </div>
      </Link>
    </section>
  );
}

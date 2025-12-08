"use client";

import { cn } from "@/lib/utils";

export function SpotifyEmbeds({
  artistId = "1Nb4vxRmJZpwJXuHs5ZQO3",
  className,
}: {
  artistId?: string;
  className?: string;
}) {
  const artistSrc = `https://open.spotify.com/embed/artist/${artistId}?utm_source=generator&theme=0`;

  return (
    <section className={cn("w-full max-w-2xl", className)}>
      <div className="px-2 mb-2">
        <h3 className="text-base font-semibold md:text-lg text-white/60">
          Listen on Spotify
        </h3>
      </div>
      <div className="overflow-hidden w-full h-[352px] rounded-3xl backdrop-blur-xl border-white/50 bg-primary/20 shadow-button">
        <iframe
          title="artist"
          data-testid="embed-iframe"
          src={artistSrc}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

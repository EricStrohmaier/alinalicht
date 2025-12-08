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
    <section
      className={cn(
        "overflow-hidden mt-5 w-full max-w-xl rounded-3xl backdrop-blur-xl border-white/50 bg-primary/20 shadow-button",
        className
      )}
    >
      <div className="p-2">
        <h3 className="text-base font-semibold md:text-lg text-foreground">
          Listen on Spotify
        </h3>
      </div>
      <div className="px-4">
        <iframe
          title="artist"
          data-testid="embed-iframe"
          src={artistSrc}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "12px" }}
          className="border border-white/40"
        />
      </div>
    </section>
  );
}

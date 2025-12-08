import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";
import { AlbumCoverCard } from "@/components/album-cover-card";
import { SpotifyEmbeds } from "@/components/spotify-embeds";
import { TitleHero } from "@/components/title-hero";

export default function Home() {
  return (
    <main className="relative w-full min-h-dvh">
      <Background src="/alt2.mp4" placeholder="/palmred.png" speed={0.7} />
      <div className="flex relative z-10 flex-col gap-6 items-center px-4 py-8 md:gap-8 md:py-12">
        <TitleHero />
        <div className="grid grid-cols-1 gap-6 items-start mt-5 w-full max-w-5xl lg:grid-cols-2 lg:gap-8">
          <AlbumCoverCard
            title="Latest Release"
            href="https://fanlink.tv/alinalicht-nobody"
            imgSrc="/img/nobody.jpg"
            className="w-full max-w-md"
          />
          <div className="flex flex-col gap-5 w-full max-w-2xl">
            <SpotifyEmbeds />
            <Newsletter />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

import Image from "next/image";

export function TitleHero() {
  return (
    <div className="w-full px-4 shrink-0">
      <Image
        src="/alina-licht-text-white.png"
        alt="Alina Licht"
        width={1600}
        height={400}
        priority
        className="w-full max-w-4xl mx-auto h-auto"
      />
    </div>
  );
}

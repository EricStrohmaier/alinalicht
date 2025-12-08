import Image from "next/image";

export function TitleHero() {
  return (
    <div className="px-4 w-full shrink-0">
      <Image
        src="/alina-licht-text-white.png"
        alt="Alina Licht"
        width={1600}
        height={400}
        priority
        className="mx-auto w-full max-w-4xl h-auto opacity-40"
      />
    </div>
  );
}

import Link from "next/link";

export default function SocialIcon(props: {
  title: string;
  img: string;
  href: string;
}) {
  return (
    <div className="m-2">
      <Link
        href={props.href}
        target="_blank"
        rel="noreferrer"
        aria-label={props.title}
        title={props.title}
        className="size-10 opacity-50 hover:opacity-80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors-and-shadows duration-300 ease-out focus-visible:outline-none focus-visible:border-border/15 focus-visible:ring-1 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-foreground/20 focus-visible:shadow-button-hover disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 [&_svg]:shrink-0 disabled:cursor-not-allowed"
      >
        <img src={props.img} alt={props.title} className="invert size-8" />
      </Link>
    </div>
  );
}

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

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
        className={cn(
          buttonVariants({ size: "icon-xl" }),
          // make border less prominent than default
          "border-white/30 hover:border-white/20"
        )}
      >
        <img src={props.img} alt={props.title} className="invert size-6" />
      </Link>
    </div>
  );
}

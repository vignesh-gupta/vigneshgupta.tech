import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ArrowUpRightIcon } from "lucide-react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

type UsesCardProps = {
  title: string;
  image: SanityImageSource;
  url: string;
  use: string;
};

const UsesCard = ({ image, title, url, use }: UsesCardProps) => {
  return (
    <Link
      href={url}
      className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-3xl border-[1px] dark:border-card-border border-light-card-border bg-faint-white dark:bg-onyx p-4 transition duration-300 dark:hover:bg-white/10 hover:bg-onyx/5 md:h-[300px] md:p-6"
    >
      <ArrowUpRightIcon
        size={32}
        className="absolute right-6 top-6 hidden -translate-x-2 translate-y-2 text-muted opacity-0 transition duration-300 hover:rotate-[360deg] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white md:inline-block"
      />
      <picture className="relative block h-[60px] w-[60px] origin-bottom transition duration-300 md:h-[100px] md:w-[100px] md:group-hover:-translate-y-1 md:group-hover:scale-[101%]">
        <Image
          src={urlFor(image).url()}
          blurDataURL={urlFor(image).width(10).height(10).url()}
          fill
          alt={title}
        />
      </picture>
      <div className="relative flex flex-1 items-center justify-between md:absolute md:inset-x-6 md:bottom-6">
        <p className="text-base font-semibold text-onyx dark:text-white md:text-xl">
          {title}
        </p>
        <Badge variant="outline" className="text-muted py-2 px-3">
          {use}
        </Badge>
      </div>
    </Link>
  );
};

export default UsesCard;

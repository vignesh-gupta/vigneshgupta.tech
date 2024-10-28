import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

export type InfoCardsProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
  size?: number;
};

const InfoCards = ({
  description,
  image,
  title,
  className,
  size,
}: InfoCardsProps) => {
  return (
    <Card
      className={cn(
        "w-full overflow-hidden  transition duration-300 pt-12 group flex items-center flex-col gap-y-2 aspect-square",
        className
      )}
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Image
        src={image}
        alt={title}
        width={size ?? 504}
        height={size ?? 365}
        className="flex-1 object-contain w-auto mt-8"
      />
    </Card>
  );
};

export default InfoCards;

"use client";

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/sanity/lib/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
  projectUrl: string;
  icon: SanityImageSource | null;
  position: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

const ProjectCard = ({
  description,
  image,
  projectUrl,
  title,
  icon,
  position,
  progress,
  range,
  targetScale,
}: ProjectCardProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      style={{
        top: `calc(5vh + ${position * 25}px)`,
        scale,
      }}
      className="sticky"
    >
      <Card className="w-full overflow-hidden border-[1px] transition duration-300 dark:hover:border-muted/40 lg:h-[500px] p-6 lg:pr-0 lg:p-12 lg:pe-0 group flex gap-5 ">
        <div className="lg:w-1/2 flex flex-col h-full">
          {icon ? (
            <Image
              src={urlFor(icon).url()}
              blurDataURL={urlFor(icon).width(24).height(24).blur(10).url()}
              alt="Project Name"
              width={60}
              height={60}
            />
          ) : null}
          <CardTitle className="my-5">{title}</CardTitle>
          <CardDescription className="text-base flex-1 text-pretty">
            {description}
          </CardDescription>

          <Link
            prefetch={false}
            href={projectUrl}
            className="cursor-pointer rounded-lg items-center inline-flex font-semibold group mt-6 justify-start gap-2 text-onyx transition dark:text-white"
          >
            View Project{" "}
            <MoveRightIcon
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="w-full flex-1 hidden lg:flex overflow-hidden rounded-3xl rounded-r-none">
          <motion.div
            style={{ scale: imageScale }}
            className="relative w-full flex-1"
          >
            <Image
              src={urlFor(image).url()}
              alt="Project Image"
              fill
              blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
              className="object-cover group-hover:transform group-hover:scale-105 transition duration-300 overflow-hidden my-auto rounded-2xl rounded-r-none"
            />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

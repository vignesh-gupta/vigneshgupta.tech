import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const ProjectCard = () => {
  return (
    <Card className="w-full overflow-hidden border-[1px] transition duration-300 dark:hover:border-muted/40 lg:h-[500px] p-6 pr-0 lg:p-12 lg:pe-0 relative group">
      <div className="lg:w-1/2 flex flex-col h-full">
        <Image
          src="/project-icon.svg"
          alt="Project Name"
          width={60}
          height={60}
        />
        <CardTitle className="my-5">
          Subbi -- The free subscriptions manager
        </CardTitle>
        <CardDescription className="text-base flex-1 text-pretty">
          Subbi is a side project that I’ve built to help me keep track of how
          much I spend on subscriptions and also to prevent the “accidental”
          bill after a 14-day trail ends. It helps you keep track of bills like
          Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.
        </CardDescription>

        <Link
          prefetch={false}
          href="#"
          className="cursor-pointer rounded-lg items-center inline-flex font-semibold group mt-6 justify-start gap-2 text-onyx transition dark:text-white"
        >
          View Project{" "}
          <MoveRightIcon
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>

      <Image
        src="/project-img.png"
        alt="Project Image"
        width={300}
        height={300}
        className="object-cover absolute right-0 inset-y-0 h-full hidden lg:block w-auto group-hover:transform group-hover:scale-105 transition duration-300"
      />
    </Card>
  );
};

export default ProjectCard;

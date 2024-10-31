import Link from "next/link";

import HeroSection from "@/components/hero/hero-section";
import InfoCards, { InfoCardsProps } from "@/components/info/info-cards";
import ProjectSection from "@/components/project/project-section";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import PageContainer from "@/components/page/page-container";

const info: InfoCardsProps[] = [
  {
    title: "About Me",
    description: "Who am I? What do I do?",
    image: "/about.png",
    className: "pb-8",
  },
  {
    title: "Notebook",
    description: "My thoughts and ideas",
    image: "/notebook.png",
  },
  {
    title: "Bookshelf",
    description: "Books and pieces of wisdom I’ve enjoyed reading",
    image: "/bookshelf.png",
  },
  {
    title: "Tech Stack",
    description: "The dev tools, apps, devices, and games I use and play.",
    image: "/stack.png",
  },
];

const HomePage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <ProjectSection showHeader />

      <section>
        <h2 className="text-3xl font-bold md:text-5xl">Get to know me</h2>
        <div className="grid gap-5 my-8 md:grid-cols-2">
          {info.map((card) => (
            <InfoCards key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between py-16">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold md:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="text-muted">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>

        <Button
          className="py-6 bg-gradient hover:bg-gradient primary-button dark:text-muted text-white dark:hover:text-white hover:translate-y-[-1px]   active:translate-y-[1px] font-medium transition duration-300 "
          size="lg"
          asChild
        >
          <Link href={"/contact"}>
            <SendHorizontal className="mr-1 size-6" />
            Get in touch
          </Link>
        </Button>
      </section>
    </PageContainer>
  );
};

export default HomePage;

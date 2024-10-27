import HeroSection from "@/components/hero/hero-section";
import InfoCards, { InfoCardsProps } from "@/components/info/info-cards";
import ProjectSection from "@/components/project/project-section";
import React from "react";

const info: InfoCardsProps[] = [
  {
    title: "About Me",
    description: "Who am I? What do I do?",
    image: "/face.png",
    className: "pb-8",
    size: 200,
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
    <main className="container max-w-screen-lg px-8 pt-24 mx-auto space-y-20">
      <HeroSection />
      <ProjectSection showHeader />

      <section>
        <h2 className="text-3xl font-bold md:text-5xl">Get to know me</h2>
        <div className="grid grid-cols-2 gap-5 my-8">
          {info.map((card) => (
            <InfoCards key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;

import HeroSection from "@/components/hero/hero-section";
import ProjectSection from "@/components/project/project-section";
import React from "react";

const HomePage = () => {
  return (
    <div className="container px-8 pt-24 max-w-screen-lg mx-auto">
      <HeroSection />
      <ProjectSection showHeader />
      
    </div>
  );
};

export default HomePage;

import React from "react";
import ProjectCard from "./project-card";

type ProjectSectionProps = {
  showHeader?: boolean;
};

const ProjectSection = ({ showHeader }: ProjectSectionProps) => {
  return (
    <section>
      {showHeader && (
        <h2 className="text-3xl font-bold md:text-5xl">Selected Work</h2>
      )}
      <div className="flex flex-col items-center gap-y-8 mt-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProjectCard key={`project-card-${i}}`} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

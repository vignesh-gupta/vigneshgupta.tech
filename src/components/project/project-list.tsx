"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import {
  FEATURED_PROJECTS_QUERYResult,
  PROJECTS_QUERYResult,
} from "../../../sanity.types";
import ProjectCard from "./project-card";

type ProjectListProps = {
  projects: FEATURED_PROJECTS_QUERYResult | PROJECTS_QUERYResult;
};

const ProjectList = ({ projects }: ProjectListProps) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <div className="flex flex-col items-center gap-y-8 mt-8" ref={container}>
      {projects.map(
        (
          { _id, codeLink, description, imgUrl, projectLink, title, icon },
          idx
        ) => {
          const targetScale = 1 - (projects.length - idx) * 0.05;

          return _id &&
            codeLink &&
            description &&
            imgUrl &&
            projectLink &&
            title ? (
            <ProjectCard
              title={title}
              image={imgUrl}
              icon={icon}
              projectUrl={projectLink}
              description={description}
              key={`project-card-${_id}}`}
              position={idx + 1}
              progress={scrollYProgress}
              range={[idx * 0.25, 1]}
              targetScale={targetScale}
            />
          ) : null;
        }
      )}
    </div>
  );
};

export default ProjectList;

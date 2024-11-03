import { sanityFetch } from "@/sanity/lib/live";
import ProjectCard from "./project-card";
import { FEATURED_PROJECTS_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";

type ProjectSectionProps = {
  showHeader?: boolean;
  showFeatured?: boolean;
};

const ProjectSection = async ({
  showHeader,
  showFeatured,
}: ProjectSectionProps) => {
  const { data: projects } = await sanityFetch({
    query: showFeatured ? FEATURED_PROJECTS_QUERY : PROJECTS_QUERY,
  });

  return (
    <section>
      {showHeader && (
        <h2 className="text-3xl font-bold md:text-5xl">Selected Work</h2>
      )}
      <div className="flex flex-col items-center gap-y-8 mt-8">
        {projects.map(
          ({ _id, codeLink, description, imgUrl, projectLink, title, icon }) =>
            _id && codeLink && description && imgUrl && projectLink && title ? (
              <ProjectCard
                title={title}
                image={imgUrl}
                icon={icon}
                projectUrl={projectLink}
                description={description}
                key={`project-card-${_id}}`}
              />
            ) : null
        )}
      </div>
    </section>
  );
};

export default ProjectSection;

import { sanityFetch } from "@/sanity/lib/live";
import { FEATURED_PROJECTS_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjectList from "./project-list";

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
      <ProjectList projects={projects} />
    </section>
  );
};

export default ProjectSection;

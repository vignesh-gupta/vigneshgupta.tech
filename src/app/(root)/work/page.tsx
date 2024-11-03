import { Metadata } from "next";

import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
import ProjectSection from "@/components/project/project-section";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  preTitle: "Work | ",
});

const WorkPage = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Projects and ideas I’ve worked on"
      />
      <PageContainer>
        <ProjectSection />
      </PageContainer>
    </>
  );
};

export default WorkPage;

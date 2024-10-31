import { StarsIcon } from "lucide-react";
import Link from "next/link";

import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
import ProjectCard from "@/components/project/project-card";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const WorkPage = () => {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Projects and ideas I’ve worked on"
      />
      <PageContainer>
        <section className="space-y-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCard key={index} />
          ))}

          <Card className="w-full overflow-hidden lg:h-[500px] relative bg-card/50 border-4 border-dashed flex items-center justify-center flex-col">
            <StarsIcon className="size-24 text-foreground" />
            <CardTitle className="my-5">Want to see more?</CardTitle>
            <CardDescription className="text-muted/80">
              I have more projects on my <Link href="https://github.com/vignesh-gupta/" className="underline underline-offset-2 text-primary/55 hover:text-primary/80">Github</Link>
            </CardDescription>
          </Card>
        </section>
      </PageContainer>
    </>
  );
};

export default WorkPage;

import { Metadata } from "next";

import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
import UsesCard from "@/components/uses/uses-card";
import { constructMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/lib/live";
import { SKILLS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = constructMetadata({
  preTitle: "Tech Stack | ",
});

const UsesPage = async () => {
  const { data: skills } = await sanityFetch({ query: SKILLS_QUERY });

  return (
    <>
      <PageHeader
        title="Tech Stack"
        subtitle="The techs, dev tools, apps I have used."
      />
      <PageContainer>
        <section>
          <h2 className="text-3xl font-bold md:text-5xl">Dev & Design</h2>
          <ul className="my-5 grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3">
            {skills.map(({ _id, category, icon, name, use, link }) => {
              if (!category || !icon || !name || !use || !link) {
                console.log({
                  _id,
                  category,
                  icon,
                  name,
                  use,
                  link,
                });

                return null;
              }

              return (
                <UsesCard
                  key={_id}
                  image={icon}
                  title={name}
                  url={link}
                  use={use}
                />
              );
            })}
          </ul>
        </section>
      </PageContainer>
    </>
  );
};

export default UsesPage;

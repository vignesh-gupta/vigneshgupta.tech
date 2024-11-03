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
        subtitle="The dev tools, apps, and devices I use."
      />
      <PageContainer>
        <section>
          <h2 className="text-3xl font-bold md:text-5xl">Dev & Design</h2>
          <ul className="my-5 grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3">
            {skills.map(
              ({ _id, category, icon, name }) =>
                _id &&
                category &&
                icon &&
                name && (
                  <li key={_id}>
                    <UsesCard
                      url={`#`}
                      title={name}
                      image={icon}
                      category={category}
                    />
                  </li>
                )
            )}
          </ul>
        </section>
        <section>
          <h2 className="text-3xl font-bold md:text-5xl">Apps</h2>
          <ul className="my-5 grid grid-cols-1 gap-4 md:my-8 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <UsesCard
                  title="Discord"
                  url="https://nextjs.org/"
                  image="/discord.webp"
                  category="Communication"
                />
              </li>
            ))}
          </ul>
        </section>
      </PageContainer>
    </>
  );
};

export default UsesPage;

import { Metadata } from "next";

import ContactSection from "@/components/contact/contact-section";
import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
import { socials } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  preTitle: "Contact | ",
  image: "/open-graph/contact.jpg",
});

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Get in touch"
        subtitle="Let’s build something awesome together!"
      />
      <PageContainer>
        <ContactSection />

        <section className="my-5 flex flex-wrap items-center justify-center gap-4 text-dark-gray ">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-onyx dark:text-muted hover:text-primary dark:hover:text-primary p-3 hover:bg-muted/20 rounded-lg transition duration-300"
            >
              <social.icon className="size-6" />
            </a>
          ))}
        </section>
      </PageContainer>
    </>
  );
};

export default ContactPage;

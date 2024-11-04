import { Metadata } from "next";

import ContactForm from "@/components/contact/contact-form";
import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
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
        subtitle="Let’s build something awesome."
      />
      <PageContainer>
        <section>
          <ContactForm />
        </section>
      </PageContainer>
    </>
  );
};

export default ContactPage;

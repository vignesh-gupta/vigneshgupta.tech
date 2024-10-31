import ContactForm from "@/components/contact/contact-form";
import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";

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

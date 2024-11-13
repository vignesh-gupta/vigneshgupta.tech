"use client";

import { useState } from "react";
import PostContactCard from "./post-contact-card";
import ContactForm from "./contact-form";

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  if (isSuccess !== null) return <PostContactCard success={isSuccess} />;

  return <ContactForm setSuccess={setIsSuccess} />;
};

export default ContactSection;

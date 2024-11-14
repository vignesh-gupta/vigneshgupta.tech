import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(1, "Please enter a message")
    .max(1000, "Message is too long"),
});

type ContactFormProps = {
  setSuccess: Dispatch<SetStateAction<boolean | null>>;
};

const ContactForm = ({ setSuccess }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const data = {
      service_id: "default_service",
      template_id: "template_cpwkieu",
      user_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      template_params: values,
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setIsLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[565px] overflow-hidden rounded-2xl border-[1px] bg-muted/10 pb-3"
    >
      <div className="relative flex flex-col items-center justify-center py-4">
        <div className="absolute left-4 top-[22px] flex gap-2">
          <div className="h-3 w-3 rounded-full border-[1px] border-[#F63636] bg-[#FF6057]" />
          <div className="h-3 w-3 rounded-full border-[1px] border-[#F6C136] bg-[#FDBC2E]" />
          <div className="h-3 w-3 rounded-full border-[1px] border-[#53CC28] bg-[#27C840]" />
        </div>
        <p className="mb-4 font-medium text-onyx dark:text-white">
          New Message
        </p>
        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4 px-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 my-4">
                <FormLabel className="md:text-lg">Name:</FormLabel>
                <FormControl className="flex">
                  <input
                    className="flex-1 ml-2 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="select-none" />
              </FormItem>
            )}
          />

          <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 my-4">
                <FormLabel className="md:text-lg">Email:</FormLabel>
                <FormControl className="flex">
                  <input
                    className="flex-1 ml-2 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 my-4">
                <FormLabel className="md:text-lg">Subject:</FormLabel>
                <FormControl className="flex">
                  <input
                    className="flex-1 ml-2 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
                    placeholder="Enter subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex items-center space-y-0 my-4 relative">
                <FormControl className="flex">
                  <textarea
                    placeholder="Write your message here"
                    maxLength={1000}
                    className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg  bg-white/40 dark:bg-black/40 p-4 text-onyx dark:text-muted-foreground caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 border-[1px] border-muted/20"
                    {...field}
                  />
                </FormControl>
                <div className="absolute right-2 bottom-2 text-muted text-sm flex">
                  <FormMessage />
                  <p>{field.value.length}/1000</p>
                </div>
              </FormItem>
            )}
          />
          <Button
            className="ml-auto py-6 bg-gradient hover:bg-gradient primary-button dark:text-muted text-white dark:hover:text-white font-medium transition duration-300 w-full md:w-auto"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="w-6 h-6 mr-2 animate-spin" /> Sending
              </>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;

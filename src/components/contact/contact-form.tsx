"use client";

import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <div className="relative min-h-[565px] overflow-hidden rounded-2xl border-[1px] bg-muted/10 pb-3">
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

      <form className="mb-4 px-6">
        <label htmlFor="email" className="my-4 flex items-center gap-2">
          <span className="font-medium text-onyx dark:text-white">Email:</span>
          <input
            type="email"
            className="flex-1 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
            placeholder="Enter your email"
            id="email"
            name="email"
          />
        </label>

        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

        <label htmlFor="name" className="my-4 flex items-center gap-2">
          <span className="font-medium text-onyx dark:text-white">Name:</span>
          <input
            type="name"
            className="flex-1 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
            placeholder="Enter your name"
            id="name"
            name="name"
          />
        </label>

        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

        <label htmlFor="email" className="my-4 flex items-center gap-2">
          <span className="font-medium text-onyx dark:text-white">
            Subject:
          </span>
          <input
            type="subject"
            className="flex-1 text-onyx caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 dark:text-muted-foreground dark:placeholder:text-muted/50 bg-transparent"
            placeholder="Enter subject"
            id="subject"
            name="subject"
          />
        </label>

        <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />

        <div className="my-4 flex flex-col">
          <div className="relative">
            <textarea
              name="message"
              placeholder="Write your message here"
              className="min-h-[200px] md:min-h-[320px] w-full resize-none rounded-lg  bg-white/40 dark:bg-black/40 p-4 text-onyx dark:text-muted-foreground caret-fuchsia-400 placeholder:text-muted focus:outline-none focus:ring-0 border-[1px] border-muted/20"
            />
          </div>
        </div>

        <Button
          className="ml-auto py-6 bg-gradient hover:bg-gradient primary-button dark:text-muted text-white dark:hover:text-white font-medium transition duration-300 w-full md:w-auto"
          size="lg"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

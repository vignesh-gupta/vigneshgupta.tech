import { client } from "@/sanity/lib/client";
import { defineLive } from "next-sanity";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  browserToken: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
});

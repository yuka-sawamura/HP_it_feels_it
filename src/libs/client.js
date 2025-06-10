import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "it-feels-it",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_KEY,
});

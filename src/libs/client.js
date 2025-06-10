import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "it-feels-it",
  apiKey: process.env.MICROCMS_KEY,
});

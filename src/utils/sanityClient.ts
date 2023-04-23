import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "w6w3s3mx",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

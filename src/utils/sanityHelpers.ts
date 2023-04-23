import { client } from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  if (!source) {
    return "";
  }
  return builder.image(source).toString();
};

// src/utils/sanityClient.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url"; 

export const client = sanityClient({
  projectId: 'hylgwhzg', 
  dataset: 'production', 
  useCdn: true,  
  token: import.meta.env.VITE_SANITY_TOKEN  
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

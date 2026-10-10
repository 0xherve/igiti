import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'hylgwhzg',
  dataset: 'production',
  apiVersion: '2026-10-10',
  useCdn: true,
  perspective: 'published',
});

const builder = createImageUrlBuilder(client);

export function urlFor(source, width = 900) {
  if (!source) return null;
  return builder.image(source).width(width).fit('max').auto('format').quality(80);
}

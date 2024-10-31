// src/SanityStudio.js
import { createConfig, Studio } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from '../../admin/schemaTypes'

const config = createConfig({
  projectId: 'hylgwhzg',
  dataset: 'production',
  title: 'Igiti Admin Panel',
  plugins: [deskTool()],
  basePath: '/studio', 
  schema: {
    types: schemaTypes, 
}
});

export default function SanityStudio() {
  return <Studio config={config}/>;
}

import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './dev-bros-blog/schemas'

export default defineConfig({
  name: 'default',
  title: 'orchid-okapi',

  projectId: 'w6w3s3mx',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})


import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {internationalizedArray, type PluginConfig} from 'sanity-plugin-internationalized-array'

import {schemaTypes} from './schemaTypes'

const internationalizedConfig: PluginConfig = {
  languages: [
    {id: 'en', title: 'English'},
    {id: 'fr', title: 'Français'},
  ],
  defaultLanguages: ['en'],
  fieldTypes: [
    'string',
    'text',
    {
      name: 'richText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  buttonAddAll: true,
  buttonLocations: ['field'],
}

export default defineConfig({
  name: 'default',
  title: 'SPP Resume Studio',

  projectId: 'xqnwcley',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    internationalizedArray(internationalizedConfig),
  ],

  schema: {
    types: schemaTypes,
  },
})

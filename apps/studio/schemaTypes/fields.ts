import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'field',
  type: 'document',
  title: 'Fields of Study',
  fields: [
    {
      name: 'name',
      type: 'internationalizedArrayString',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        source: 'name.0.value',
        slugify: uriGenerator,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name.0.value',
    },
  },
})

import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'company',
  type: 'document',
  title: 'Companies',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'uri',
      type: 'slug',
      title: 'URI',
      options: {
        source: 'name',
        slugify: uriGenerator,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'website',
    },
  },
})

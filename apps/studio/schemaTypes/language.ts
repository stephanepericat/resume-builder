import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'
import {languageProficiency} from '../lists/language-proficiency'

export default defineType({
  name: 'language',
  type: 'document',
  title: 'Languages',
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
    {
      name: 'proficiency',
      type: 'string',
      title: 'Proficiency',
      validation: (Rule) => Rule.required(),
      options: {
        list: languageProficiency,
        layout: 'dropdown',
      },
    },
    {
      name: 'profile',
      type: 'reference',
      title: 'Profile',
      to: [{type: 'profile'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name.0.value',
      subtitle: 'proficiency',
    },
  },
})

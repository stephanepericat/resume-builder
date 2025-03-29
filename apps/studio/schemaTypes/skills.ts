import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'
import {skillProficiency} from '../lists/skill-proficiency'
import {skillCategory} from '../lists/skill-category'

export default defineType({
  name: 'skill',
  type: 'document',
  title: 'Skills',
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
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: skillCategory,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'proficiency',
      type: 'string',
      title: 'Proficiency',
      options: {
        list: skillProficiency,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})

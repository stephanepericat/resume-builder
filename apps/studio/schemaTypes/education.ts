import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'education',
  type: 'document',
  title: 'Education',
  fields: [
    {
      name: 'name',
      type: 'internationalizedArrayString',
      title: 'Diploma',
      validation: (Rule: Rule) => Rule.required(),
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
      name: 'school',
      type: 'reference',
      title: 'school',
      to: [{type: 'school'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'completed',
      type: 'boolean',
      title: 'Did you complete the course?',
      initialValue: true,
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
    },
    {
      name: 'description',
      type: 'internationalizedArrayRichText',
      title: 'Course Description',
      // validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'fields',
      title: 'Fields of Study',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'field'}]}],
      options: {layout: 'dropdown'},
      validation: (Rule) => Rule.required(),
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
      subtitle: 'school.name',
    },
  },
})

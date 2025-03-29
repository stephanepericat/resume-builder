import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'certification',
  type: 'document',
  title: 'Certifications',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
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
      name: 'certificate',
      type: 'url',
      title: 'Certificate',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'certificationDate',
      type: 'date',
      title: 'Certification Date',
      validation: (Rule) => Rule.required(),
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
      title: 'name',
      subtitle: 'school.name',
    },
  },
})

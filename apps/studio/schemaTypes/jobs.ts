import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'job',
  type: 'document',
  title: 'Jobs',
  fields: [
    {
      name: 'name',
      type: 'internationalizedArrayString',
      title: 'Job Title',
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
      name: 'company',
      type: 'reference',
      title: 'Company',
      to: [{type: 'company'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'remote',
      type: 'boolean',
      title: 'Is it a remote position?',
      initialValue: false,
    },
    {
      name: 'contract',
      type: 'boolean',
      title: 'Is it contract work?',
      initialValue: false,
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'current',
      type: 'boolean',
      title: 'Is it your current role?',
      initialValue: false,
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      hidden: ({document}) => !!document?.current,
    },
    {
      name: 'description',
      type: 'internationalizedArrayRichText',
      title: 'Role Description',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
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
      subtitle: 'company.name',
    },
  },
})

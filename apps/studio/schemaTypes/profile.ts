import {defineType, type Rule} from 'sanity'

import {uriGenerator} from '../helpers/hash-generator'

export default defineType({
  name: 'profile',
  type: 'document',
  title: 'Profiles',
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
      name: 'title',
      type: 'internationalizedArrayString',
      title: 'Job Title',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
      validation: (Rule: Rule) => Rule.email(),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'biography',
      type: 'internationalizedArrayRichText',
      title: 'Biography',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'github',
      type: 'url',
      title: 'Github',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
    },
    {
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
    },
    // {
    //   name: 'category',
    //   type: 'string',
    //   title: 'Category',
    //   options: {
    //     list: skillCategory,
    //     layout: 'dropdown',
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'proficiency',
    //   type: 'string',
    //   title: 'Proficiency',
    //   options: {
    //     list: skillProficiency,
    //     layout: 'dropdown',
    //   },
    //   validation: (Rule) => Rule.required(),
    // },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: `title.0.value`,
    },
  },
})

import { defineQuery } from 'next-sanity'

export const CERTIFICATION_QUERY = defineQuery(
  `*[
      _type == 'certification'
      && profile->uri.current == $user
      && !(_id in path('drafts.**'))
    ] | order(startDate desc) {
      "id": _id,
      "title": name,
      "about": description[_key == $locale][0].value,
      "date": certificationDate,
      "certificate": certificate,
      "school": school-> { name, location, website, "uri": uri.current, "id": _id },
      "fields": fields[]-> { "name": name[_key == $locale][0].value, "uri": uri.current, "id": _id }
    }
  `,
)

export const EDUCATION_QUERY = defineQuery(
  `*[
      _type == 'education'
      && profile->uri.current == $user
      && !(_id in path('drafts.**'))
    ] | order(startDate desc) {
      "id": _id,
      "title": name[_key == $locale][0].value,
      "about": description[_key == $locale][0].value,
      "start": startDate,
      "end": endDate,
      "school": school-> { name, location, website, "uri": uri.current, "id": _id },
      "fields": fields[]-> { "name": name[_key == $locale][0].value, "uri": uri.current, "id": _id }
    }
  `,
)

export const JOBS_QUERY = defineQuery(
  `*[
      _type == 'job'
      && profile->uri.current == $user
      && !(_id in path('drafts.**'))
    ] | order(startDate desc) {
      "id": _id,
      "title": name[_key == $locale][0].value,
      "about": description[_key == $locale][0].value,
      "start": startDate,
      "end": endDate,
      current,
      remote,
      contract,
      "company": company-> { name, location, website, "uri": uri.current, "id": _id },
      "skills": skills[]-> { name, "uri": uri.current, "id": _id }
    }
  `,
)

export const LANGUAGES_QUERY = defineQuery(
  `
    *[
      _type == 'language'
      && profile->uri.current == $user
      && !(_id in path('drafts.**'))
    ] | order(name[_key == $locale][0].value asc) {
      "id": _id,
      "title": name[_key == $locale][0].value,
      "proficiency": proficiency
    }
  `,
)

export const PROFILE_QUERY = defineQuery(
  `
    *[_type == 'profile' && uri.current == $user] {
      email,
      location,
      name,
      phone,
      "profile": biography[_key == $locale][0].value,
      "social": {
        github,
        linkedin,
        twitter
      },
      "title": title[_key == $locale][0].value,
    }[0]
  `,
)

export const SKILLS_QUERY = defineQuery(
  `
    {
      "backend": *[_type == 'skill' && category == 'Backend'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "cicd": *[_type == 'skill' && category == 'CI/CD'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "frontend": *[_type == 'skill' && category == 'Frontend'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "infra": *[_type == 'skill' && category == 'Infrastructure'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "misc": *[_type == 'skill' && category == 'Misc'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "mobile": *[_type == 'skill' && category == 'Mobile'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "testing": *[_type == 'skill' && category == 'Testing'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
      "tooling": *[_type == 'skill' && category == 'Tooling'] | order(name asc) {
        "id": _id,
        name,
        proficiency,
        "uri": uri.current
      },
    }
  `,
)

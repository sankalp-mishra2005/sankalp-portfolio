import {
  personalDetails,
  aboutData,
  socialsData,
  skillsData,
  projectsData
} from './portfolioData'

class CosmicMockQuery {
  private type: string
  private slug?: string

  constructor(query: { type: string; slug?: string }) {
    this.type = query.type
    this.slug = query.slug
  }

  props(_fields: string) {
    return this
  }

  depth(_val: number) {
    return this
  }

  limit(_val: number) {
    return this
  }

  options(_opts: any) {
    return this
  }

  // Implementing Thenable (Promise interface) so it can be awaited
  then(onfulfilled?: (value: any) => any) {
    let result: any = null

    if (this.slug !== undefined) {
      // findOne style
      if (this.type === 'personal-details') {
        result = { object: { metadata: personalDetails } }
      } else if (this.type === 'about') {
        result = { object: { metadata: aboutData } }
      } else if (this.type === 'projects') {
        const found = projectsData.find((p) => p.slug === this.slug)
        result = { object: found || projectsData[0] }
      }
    } else {
      // find style
      if (this.type === 'skills') {
        result = { objects: skillsData }
      } else if (this.type === 'socials') {
        result = { objects: socialsData }
      } else if (this.type === 'projects') {
        result = { objects: projectsData }
      } else if (this.type === 'testimonials') {
        result = { objects: [] }
      }
    }

    return Promise.resolve(result).then(onfulfilled)
  }
}

export const cosmic = {
  objects: {
    findOne: (query: { type: string; slug?: string }) =>
      new CosmicMockQuery(query),
    find: (query: { type: string }) => new CosmicMockQuery(query),
    insertOne: async (..._args: any[]) => ({})
  },
  media: {
    insertOne: async (..._args: any[]) => ({ media: { url: '', id: '', name: '' } }),
    deleteOne: async (..._args: any[]) => ({})
  }
}

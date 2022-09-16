export interface ProjectProps {
    projects: {
      id: string
      title: string
      siteUrl: string
      githubUrl: string
      description: string
      image: {
        url: string
      }
      langs: {
        id: string;
        name: string;
        abbreviation: string;
        langUrl: {
          url: string
        }
      }[]
    }[]
  }
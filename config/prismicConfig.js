import  * as prismic from '@prismicio/client'
import { config } from 'dotenv';
config();

// node-fetch is used to make network requests to the Prismic Rest API.
// In Node.js Prismic projects, you must provide a fetch method to the
// Prismic client.
import  fetch from 'node-fetch'

const repoName = process.env.PRISMIC_REPONAME// Fill in your repository name.
const accessToken = process.env.PRISMIC_TOKEN_ACCESS // If your repository is private, add an access token.

// The `routes` property is your route resolver. It defines how you will
// structure URLs in your project. Update the types to match the Custom
// Types in your project, and edit the paths to match the routing in your
// project.
const routes = [
  {
    type: 'about',
    path: '/:uid',
  },
  {
    type: 'home',
    path: '/:uid',
  },
]



 export const client = prismic.createClient(repoName, {
  fetch,
  accessToken,
  routes,
})

 export const handleLinkResolver =(doc)=> {
  console.log('doc',doc)
  if (doc.type === 'blog_post') {
    const date = new Date(doc.first_publication_date)
    return `/${date.getFullYear()}/${doc.uid}`
  }
  return "/"
}



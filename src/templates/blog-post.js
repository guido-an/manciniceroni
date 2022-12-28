import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Newsletter from '../components/newsletter'
import ContactCta from '../components/contactCta'

export default function BlogPost ({ data }) {
  const post = data.allWpPost.nodes[0]
  return (
    <Layout>
      <div className='img-container'>
        <img className='img-blog-post' src={post.featuredImage.node.mediaItemUrl} width='100%' />
      </div>
      <div className='blog-content'>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <style jsx='true'>{`
        .blog-content {
          margin: 0 10px
        }
        .blog-content h1 {
          font-size: 22px;
          color: var(--main-color)
        }
        .blog-content p {
          color: var(--grey)
        }
        .blog-content ul li {
          list-style:none;
          color: var(--grey)
        }
        @media(min-width:968px){
          .img-blog-post {
            margin: 0 20%;
            box-shadow: var(--shadow);
            max-width: 900px
            
          }
          .img-container {
            margin: 0 5vw
          }
          .blog-content {
            margin: 0 20%;
            margin-top: 40px;
            margin-bottom: 60px;
          }
        }
        `}
      </style>
      <ContactCta />
    </Layout>
  )
}
export const query = graphql`
         query($slug: String!) {
           allWpPost(filter: { slug: { eq: $slug } }) {
             nodes {
               title
               content
               date(formatString: "MMMM DD, YYYY")
               featuredImage {
                node {
                  mediaItemUrl
                }
              }
             }
           }
         }
       `

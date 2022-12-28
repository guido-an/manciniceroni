import React from 'react'
import Button from './button'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Divider from '../components/divider'
import Img from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "01.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image2: file(relativePath: { eq: "02.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image3: file(relativePath: { eq: "03.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image4: file(relativePath: { eq: "04.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image5: file(relativePath: { eq: "05.png" }) {
        childImageSharp {
          fixed(width: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image6: file(relativePath: { eq: "06.png" }) {
        childImageSharp {
          fixed(width: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image7: file(relativePath: { eq: "07.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image8: file(relativePath: { eq: "08.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image9: file(relativePath: { eq: "09.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image10: file(relativePath: { eq: "10.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image11: file(relativePath: { eq: "11.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image12: file(relativePath: { eq: "12.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      image13: file(relativePath: { eq: "13.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className='collaborazioni'>
        <h2>HANNO SCELTO IL NOSTRO LAVORO</h2>
        <Divider />
        <p>La soddisfazione del Cliente è la gratificazione della nostra passione.</p>
      </div>
      <div className='logo-partners-container'>
        <div className='logo logo-1'>
          <Img fixed={data.image.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image2.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image3.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image4.childImageSharp.fixed} />
        </div>
        <div className='logo logo-5'>
          <Img fixed={data.image5.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image6.childImageSharp.fixed} />
        </div>
        <div className='logo logo-7'>
          <Img fixed={data.image7.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image8.childImageSharp.fixed} />
        </div>
        <div className='logo logo-9'>
          <Img fixed={data.image9.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image10.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image11.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image12.childImageSharp.fixed} />
        </div>
        <div className='logo'>
          <Img fixed={data.image13.childImageSharp.fixed} />
        </div>
      </div>

      <style jsx='true'>{`
         .collaborazioni {
             text-align: center;
         }
         .collaborazioni h2 {
          color: var(--main-color)
         }
         .collaborazioni {
             text-align: center;
         }
         .collaborazioni p {
             color: var(--grey);
         }
         .logo-partners-container {
             margin: 0 10px;
             text-align: center;
             padding-top: 10px
         }
         .logo {
            margin: 10px
             
         }
         @media(min-width: 968px){
             .collaborazioni {
                 margin-bottom: 20px
             }
             .logo-partners-container {
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-evenly;
             }
             .logo {
                 margin-top: 40px
             }
             .logo-1, .logo-5, .logo-7, .logo-9 {
                 position: relative;
                 top: 10px
             }
         }
      `}
      </style>
    </section>
  )
}

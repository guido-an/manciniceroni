import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
// import Hero from '../components/hero'
import ContactCta from '../components/contactCta'
import AboutHome from '../components/aboutHome'
import Partners from '../components/partners'
import Newsletter from '../components/newsletter'
import Divider from '../components/divider'
import { Helmet } from 'react-helmet'
import icon1 from '../images/crediti-bancari-icon.png'
import icon2 from '../images/crediti-commerciali-icon .png'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1900, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <Layout>

      <Helmet>
        <title>MANCINICERIONI | Gestione E Recupero Crediti</title>
      </Helmet>

      <div className='img-container'>
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
      {/* <div id='hero'>
        <Hero />
      </div> */}
      <AboutHome />
      <div className='services'>
        <h2>Aree Di Attività</h2>
        <Divider />
        <p className='subtitle'>Lavoriamo su due principali aree di assistenza al cliente:
        </p>
        <div className='single-service-container'>
          <div className='single-service'>
            <img src={icon1} style={{ display: 'block', margin: '0 auto' }} />
            <p><strong>GESTIONE E RECUPERO CREDITI COMMERCIALI</strong></p>
            <p>Forniamo assistenza alle piccole e medie imprese, artigiani e professionisti, per la gestione e il recupero di crediti commerciali.</p>
            <p style={{
              marginTop: '40px'
            }}
            ><Link to='/aree-di-attivita/#crediti-bancari'>{'> Scopri di più'}</Link>
            </p>
          </div>
          <div className='single-service'>
            <img src={icon2} style={{ display: 'block', margin: '0 auto' }} />
            <p><strong>GESTIONE E RECUPERO CREDITI BANCARI</strong></p>
            <p>Forniamo assistenza alle banche e agli intermediari finanziari per la gestione e il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP)</em></p>
            <p style={{
              marginTop: '40px'
            }}
            ><Link to='/aree-di-attivita/#crediti-commerciali'>{'> Scopri di più'}</Link>
            </p>
          </div>
        </div>
      </div>
      <Partners />
      <ContactCta />
      <style jsx='true'>{`
     .img-container {
       position: relative;
       bottom: 20px;
       margin-bottom: 20px
     }
    .services {
      position: relative;
      bottom: 60px;
      margin: 0 10px
    }
    .services h2 {
      color: var(--main-color)
    }
      .services h2, .services p {
        text-align: center
      }
      .services p {
          color: var(--grey) !important;
         
        }
        .single-service {
          box-shadow: var(--shadow);
          padding: 20px 20px 40px;
          margin-bottom: 20px;
          border-radius: 35px;
          max-width: 500px;
          margin: 20px auto
        
        }
        .single-service a {
          display: block;
          margin: 0 auto
        }
        .single-service strong {
          color: var(--main-color)
        }
        
        .single-service-container {
          margin-top: 60px
        }
        
      @media(min-width: 960px){
        .img-container {
           margin-bottom: 80px
         }
        #hero {
          position: relative;
          top: 40px
        }
        .services {
          margin-top: 140px
        }
        .subtitle{
          max-width: 60%;
          margin: 0 auto
        }
        .single-service-container {
          display: flex;
          justify-content: center;
        }
        .single-service{
          margin: 10px 40px;
          padding: 30px 40px 50px
        }
      }
   
      `}
      </style>

    </Layout>
  )
}

export default IndexPage

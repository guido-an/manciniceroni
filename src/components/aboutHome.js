import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  const data = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "mancini-ceroni-lo-studio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <section id='about-section'>
      <div className='half-section section-left'>
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
      <div className='half-section section-right'>
        <div id='about-right-container'>
          <h2>Lo Studio</h2>
          <div style={myDivider} />
          <p>
          Lo Studio ManciniCeroni si occupa in via esclusiva di recupero crediti e adotta un preciso metodo acquisito attraverso una consolidata esperienza maturata negli anni attraverso la collaborazione con primari Studi legali del settore e Società di recupero crediti.
          </p>
          <Link to='/lo-studio' id='about-right-link'>> Scopri di più </Link>

        </div>
      </div>
      <style jsx='true'>{`
        #about-right-container{
            padding: 80px 20px;
        }
        #about-right-container p {
          color: var(--grey)
        }
        #about-right-container h2 {
          color: var(--main-color)
        }
        #about-right-link{
          font-weight: 500;
          color: var(--grey);
          position: relative;
          top: 20px;
          padding-bottom: 80px;
          display: block
        }
        #about-right-link:hover {
          color: var(--main-color)
        }
        .section-left {
          margin:0 10px;
          box-shadow: var(--shadow);
        }
        .section-right {
          position: relative;
          bottom: 40px
        }
      @media (min-width: 1200px) {
        #about-section {
          display: flex;
        }
        #about-right-container {
          margin: 60px 60px;
          padding: 0
        
        }
        .half-section {
          min-width: 50%;
        }
       
        .section-left{
          margin: 0 0 0 40px
        }
        #about-right-link{
            padding-bottom: 0
        }
      }
    `}
      </style>
    </section>
  )
}

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
          <h2>Chi Siamo</h2>
          <div style={myDivider} />
          <p> La nostra boutique legale nasce dagli avvocati Elisabetta Ceroni e Nicola Mancini, professionisti con un solido background legale, specifico nel recupero crediti, costruito nei più importanti team legali nazionali.</p>
          <p>L’esperienza acquisita negli anni ci ha permesso di entrare in contatto con aziende strutturalmente diversificate ma simili nell’obiettivo di ottenere una gestione ed un recupero profittevole delle partite creditorie. Ogni caso è seguito in modo specifico, su misura e flessibile, applicando quelli che definiamo “servizi di artigianato legale innovativo”. 
</p>
<p>La conoscenza degli scenari legali, delle esigenze aziendali e dell’approccio da attuare a seconda degli ambiti, ci ha permesso di ottenere la fiducia dei nostri clienti.</p>
<p>La nostra rete di collaboratori esterni unitamente agli innovativi mezzi di comunicazione telematica che utilizziamo ci permettono di essere sempre al fianco di chi ci sceglie, seguendo ogni fase da vicino.
</p>

        </div>
      </div>
      <style jsx='true'>{`
        #about-right-container{
            padding: 80px 20px;
        }
        #about-right-container p {
          color: var(--grey);
          position: relative;
          bottom: 20px
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
        .section-right {
          
          bottom: 60px
        }
       
        .section-left{
          margin: 0 0 0 40px
        }
        #about-right-link{
            padding-bottom: 0;
            
        }
      }
    `}
      </style>
    </section>
  )
}

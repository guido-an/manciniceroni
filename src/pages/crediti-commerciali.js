import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import ContactCta from '../components/contactCta'
import Img from 'gatsby-image'
import icon1 from '../images/crediti-bancari-icon.png'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "crediti-commerciali.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div style={{
          position: 'relative',
          bottom: '20px'
        }}
        >
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
        <div className='container'>
          <div className='lo-studio'>
            <img
              style={{
                display: 'block',
                marginTop: '60px',
                width: '64px',
                position: 'relative',
                top: '20px'
              }} src={icon1}
            />
            <h2>Gestione e Recupero Crediti Commerciali</h2>
            <div style={myDivider} />

            <p>ManciniCeroni fornisce assistenza in favore di piccole e medie imprese, artigiani e professionisti, per la gestione ed il recupero di crediti commerciali.
            </p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con primari Studi legali e Società di recupero crediti, all’interno dei dipartimenti di contenzioso giudiziale e credit collection. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione e nel recupero dei crediti commerciali, in fase stragiudiziale, giudiziale ed esecutiva, nonché nelle procedure concorsuali (fallimenti; concordati).</p>
            <p>Lo Studio esegue l’attività necessaria e preventivamente concordata con il Cliente, per il rapido recupero del credito, maturando esclusivamente un compenso a risultato parametrato sull’effettivo credito recuperato. </p>
            <p>Lo Studio persegue altresì la valorizzazione dei crediti affidati, attuando una precisa strategia che mira a trasformare il singolo credito di difficile recuperabilità in un credito garantito da pegno e/o ipoteca, aumentando concretamente le prospettive di recupero.</p>
          </div>
        </div>
        <ContactCta />
      </Layout>
      <style jsx='true'>{`
          
          .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
          }
          .lo-studio h2 {
            color: var(--main-color)
          }
          @media(min-width:968px){
            .lo-studio{
              margin-top: 60px ;
              width: 80%;
              margin: 0 auto
            }
          }
        
          `}
      </style>
    </div>
  )
}

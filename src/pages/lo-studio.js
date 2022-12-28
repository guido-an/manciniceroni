import React, { useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import ContactCta from '../components/contactCta'
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
          fluid(maxWidth: 1900, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => window.scrollTo(0, 800), [])

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
            <h2>Lo Studio</h2>
            <div style={myDivider} />
            <span><strong>Professionisti del recupero crediti, con l’obiettivo del rapido raggiungimento del risultato. Spirito di ascolto e comprensione, competenza e perseveranza.</strong>
            </span>
            <p style={{
              marginTop: '40px'
            }}
            >Lo studio nasce con l’obiettivo di fornire un servizio mirato e completo nel settore del recupero crediti. L’esperienza maturata negli anni ci ha permesso di confrontarci con i migliori professionisti del settore, favorendo lo studio di casi complessi e delle operazioni ricorrenti che necessitano dell’attivazione di procedure mirate.
            </p>
            <p>La passione per questo ambito ci consente di intuire nell’immediato i possibili sviluppi del caso, adattando soluzioni su misura, flessibili e che rispondono prontamente alle esigenze del cliente. </p>
            <span><strong> L’APPROCCIO CHE FA LA DIFFERENZA</strong></span>
            <p>Il nostro modo di affrontare i casi è smart, veloce nell’adattarsi alle dinamiche e capace di raggiungere il risultato integrando soluzioni innovative.</p>
            <p>Lavoriamo a stretto contatto con il cliente condividendo le criticità e la scelta delle soluzioni da attivare in modo da gestire con chiarezza e trasparenza ogni passaggio. In caso di necessità abbiamo la possibilità di attivare collaboratori esterni che ci permettono di garantire la migliore combinazione di professionalità ed efficienza del lavoro.</p>
           
            <span><strong> ARTIGIANATO LEGALE INNOVATIVO</strong></span>
            <p>Forniamo ai nostri clienti “servizi di artigianato legale innovativo”, che consentono al cliente di:</p>
            <ul>
              <li>Gestire e recuperare i propri crediti rapidamente;
              </li>
              <li>Evitare o ridurre i costi e le spese in caso di mancato recupero;
              </li>
              <li>Ottenere la tutela e la valorizzazione dei propri crediti;
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >Raggiungere questi risultati è possibile attraverso un approccio di fiducia, trasparenza e massima collaborazione che viene instaurata con il cliente. L’obiettivo dello studio è quello di garantire l’unione tra qualità, efficacia e costi.
            </p>
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

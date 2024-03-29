import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
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
      image: file(relativePath: { eq: "nicola-mancini.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "elisabetta-ceroni.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageHero: file(relativePath: { eq: "professionisti-img.jpg" }) {
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
        <div className='img-container'>
          <Img fluid={data.imageHero.childImageSharp.fluid} />
        </div>
        <div className='container' id='professionisti'>
          <div className='lo-studio'>
            <h2>Professionisti</h2>
            <div style={myDivider} />
            <span><strong>A supporto del  cliente con entusiasmo e dedizione.</strong></span>
            <p>Il nostro studio è fondato sulle competenze e sull’esperienza degli avvocati Elisabetta Ceroni e Nicola Mancini, con la possibilità di attivare una rete di collaboratori esterni per raggiungere facilmente i clienti presenti in tutto il territorio nazionale.
            </p>
            <div className='professionisti-container'>
              <div className='professionista'>
                <div
                  className='img-container' id='img-container-1'
                >
                  <Img fluid={data.image2.childImageSharp.fluid} />
                </div>
                <div>
                  <h3>Avv. Elisabetta Ceroni</h3>
                  <p><strong>Formazione:</strong></p>
                  <ul>
                    <li>Laurea in Giurisprudenza presso l’Università “Luiss Guido Carli” di Roma;
                    </li>
                    <li>Abilitazione all’esercizio della professione forense ed iscrizione all’Albo degli Avvocati di Fermo;
                    </li>
                    <li>Scuola di specializzazione in diritto civile presso l’Università di Camerino.
                    </li>
                    <li>Dottoranda di ricerca in Legal and Social Sciences presso l’Università di Camerino.
                    </li>
                  </ul>
                  <p><strong>Esperienze:</strong>
                  </p>
                  <p>Ho collaborato con primari Studi Legali e intermediari finanziari, prestando assistenza per la gestione ed il recupero di crediti di derivazione commerciale ed utilities. </p>
                  <p>Ho fornito consulenza in qualità di legale esterno in favore di: </p>
                  <ul>
                    <li>Crediciò S.r.l.
                    </li>
                    <li>Zolva S.p.A.
                    </li>
                    <li>Europa Factor S.p.A.</li>
                    <li>Euro Service S.p.A.
                    </li>
                    <li>Studio legale Natali Mei;
                    </li>
                    <li>Bacciardi and Partners studio legale internazionale</li>
                    <li>Studio legale Emiliani & Associati</li>
                  </ul>
                  <p>Professionista Delegata alle vendite nelle procedure esecutive immobiliari presso il Tribunale di Fermo.</p>
                  <p><strong>Contatti</strong></p>
                  <p>Tel: 334 6775287</p>
                  <p>Email: <a href='mailto: elisabetta@ceronimancini.it'> elisabetta@ceronimancini.it</a></p>
                  <p>Linkedin: <a href='https://www.linkedin.com/in/elisabetta-ceroni/' target='_blank' rel='noreferrer'>Elisabetta Ceroni</a></p>
                </div>
              </div>
              <div
                className='professionista mobile-profession'
              >
                <div className='nicolaContent'>
                  <h3>Avv. Nicola Mancini</h3>
                  <p><strong>Formazione:</strong></p>
                  <ul>
                    <li>Laurea in Giurisprudenza presso l’Università “Alma Mater Studiorum” di Bologna;
                    </li>
                    <li>Master di secondo livello in Diritto Privato Europeo presso l’Università “La Sapienza” di Roma;
                    </li>
                    <li>Abilitazione all’esercizio della professione forense ed iscrizione all’Albo degli Avvocati di Ancona;
                    </li>
                    <li>Master di specializzazione in contenzioso bancario e finanziario.</li>
                  </ul>
                  <p><strong>Esperienze:</strong>
                  </p>
                  <p>Ho collaborato con primari Studi Legali, banche e intermediari finanziari, prestando assistenza per la gestione ed il recupero di crediti di derivazione commerciale e bancaria. </p>
                  <p>Ho fornito consulenza in qualità di loan manager e legale esterno in favore di: </p>
                  <ul>
                    <li>Cerved Credit Management S.p.A.;</li>
                    <li>Juliet S.p.A.;</li>
                    <li>Banca IFIS S.p.A.;</li>
                    <li>FBS S.p.A.;</li>
                    <li>La Scala Società Tra Avvocati Per Azioni; </li>
                    <li>Bacciardi and Partners studio legale internazionale.</li>
                  </ul>
                  <p><strong>Contatti</strong></p>
                  <p>Tel: 349 0887444</p>
                  <p>Email: <a href='mailto:nicola@ceronimancini.it'>nicola@ceronimancini.it </a></p>
                  <p>Linkedin: <a href='https://www.linkedin.com/in/avvocatonicolamancini/' target='_blank' rel='noreferrer'>Nicola Mancini</a></p>
                </div>
                <div
                  className='img-container nicolaImage' id='img-container-2'
                >
                  <Img fluid={data.image.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactCta />
      </Layout>
      <style jsx='true'>{`

      .img-container {
       position: relative;
       bottom: 20px;
     }
          .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
          }
          h2 {
            color: var(--main-color)
          }
          .professionista h3 {
            color: var(--main-color)
          }
          .professionista strong {
            color: var(--main-color)
          }
          #img-container-1 {
            margin-top: 40px;
          }
          @media(max-width:767px){
            .mobile-profession
            {
              display: flex;
              flex-direction: column;
              margin-top: 20%;
            }
            .mobile-profession .nicolaImage {order:1!important;}
            .mobile-profession .nicolaContent {order:2!important;}
            }
          @media(min-width:968px){
            .lo-studio{
              width: 100%;
              margin: 0 auto
            }
            .img-container {
               width: 100%;
            }
            #img-container-1 {
              margin-right: 40px;
              margin-top: 0
            }
            #img-container-2 {
              margin-left: 40px
            }
            .professionista {
              display: flex;
              justify-content: space-between;
              margin-top: 100px
            }
            #professionisti {
              margin-top: 40px
            }
          }
      `}
      </style>
    </div>
  )
}

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
      image: file(relativePath: { eq: "aree-di-attivita.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <Img fluid={data.image.childImageSharp.fluid} />
        <div className='container'>
          <div className='lo-studio'>
            <h2>Aree Di Attività</h2>
            <div style={myDivider} />
            <span><strong>Un solo settore, per garantire servizi di qualità.</strong>
              <p>Lo Studio Legale ManciniCeroni si occupa in via esclusiva e specialistica del settore del recupero crediti, distinto in due principali aree di attività:
              </p>
              <ul>
                <li>Gestione e recupero crediti commerciali</li>
                <li>Gestione e recupero crediti bancari NPL - UTP.</li>
              </ul>
            </span>
            <h3
              style={{
                marginTop: '40px'
              }}
              id='crediti-commerciali'
            >GESTIONE E RECUPERO CREDITI COMMERCIALI

            </h3>
            <p>ManciniCeroni fornisce assistenza in favore di piccole e medie imprese, artigiani e professionisti, per la gestione ed il recupero di crediti commerciali.
            </p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con primari Studi legali e Società di recupero crediti, all’interno dei dipartimenti di contenzioso giudiziale e credit collection. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione e nel recupero dei crediti commerciali, in fase stragiudiziale, giudiziale ed esecutiva, nonché nelle procedure concorsuali (fallimenti; concordati).</p>
            <p>Lo Studio esegue l’attività necessaria e preventivamente concordata con il Cliente, per il rapido recupero del credito, maturando esclusivamente un compenso a risultato parametrato sull’effettivo credito recuperato. </p>
            <p>Lo Studio persegue altresì la valorizzazione dei crediti affidati, attuando una precisa strategia che mira a trasformare il singolo credito di difficile recuperabilità in un credito garantito da pegno e/o ipoteca, aumentando concretamente le prospettive di recupero.</p>
            <h3
              style={{
                marginTop: '40px'
              }}
              id='crediti-bancari'
            >GESTIONE E RECUPERO CREDITI BANCARI NPL - UTP
            </h3>
            <p>ManciniCeroni fornisce assistenza in favore di banche ed Intermediari Finanziari per la gestione ed il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP).</em></p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con primari Studi legali e Società di recupero crediti, in qualità di gestori/asset manager nonché di legali interni. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione accurata e profittevole di portafogli di pratiche
              <em>NPL/UTP secured e unsecured di small, mid e large ticket</em>,
              per l’intera filiera della gestione del credito:

            </p>
            <ul>
              <li>Analisi delle pratiche affidate e pianificazione della migliore strategia di recupero
              </li>
              <li>Attività stragiudiziale, finalizzata alla definizione transattiva
              </li>
              <li>Attività giudiziale, esecutiva e concorsuale, finalizzata al recupero coattivo ed alla valorizzazione del credito

              </li>
              <li>Attività giudiziale di tutela del credito nelle cause passive</li>
              <li>costante aggiornamento, anche attraverso la conoscenza professionale dei principali portali gestionali utilizzati da banche e Società di recupero crediti: EPC, REC, SYGES, LAWEB, EASYLEX, WELLDONE.
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >Lo Studio fornisce altresì la propria collaborazione ed assistenza per attività di <em>Due Diligence</em>, valutazione/analisi dei portafogli, <em>Data Remediation e Business Plan</em>, garantendo qualità e rispetto della tempistica di definizione della lavorazione richiesta dal Cliente.
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

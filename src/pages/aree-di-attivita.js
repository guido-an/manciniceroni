import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import ContactCta from '../components/contactCta'
import Img from 'gatsby-image'
import icon1 from '../images/crediti-bancari-icon.png'
import icon2 from '../images/crediti-commerciali-icon .png'
import Newsletter from '../components/newsletter'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "crediti-bancari.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div className='img-container'>
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
        <div className='container'>
          <div className='lo-studio'>
            <h2>Aree di Attività</h2>
            <div style={myDivider} />
            <span><strong>Un solo settore, per garantire servizi di qualità.</strong>
              <p>Lo Studio Legale ManciniCeroni si occupa in via esclusiva e specialistica del settore del recupero crediti, distinto in due principali aree di attività:
              </p>
              <ul id='crediti-commerciali'>
                <li>Gestione e recupero crediti commerciali</li>
                <li>Gestione e recupero crediti bancari NPL - UTP.</li>
              </ul>
            </span>
            <img
              style={{
                display: 'block',
                marginTop: '60px',
                width: '64px'
              }} src={icon1}
            />
            <h3>GESTIONE E RECUPERO CREDITI COMMERCIALI
            </h3>
            <p>ManciniCeroni fornisce assistenza in favore di piccole e medie imprese, artigiani e professionisti, per la gestione ed il recupero di crediti commerciali.
            </p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con primari Studi legali e Società di recupero crediti, all’interno dei dipartimenti di contenzioso giudiziale e credit collection. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione e nel recupero dei crediti commerciali, in fase stragiudiziale, giudiziale ed esecutiva, nonché nelle procedure concorsuali (fallimenti; concordati).</p>
            <p>Lo Studio esegue l’attività necessaria e preventivamente concordata con il Cliente, per il rapido recupero del credito, proponendo un compenso a risultato parametrato sull’effettivo credito recuperato. </p>
            <p id='crediti-bancari'>Lo Studio persegue altresì la valorizzazione dei crediti affidati, attuando una precisa strategia che mira a trasformare il singolo credito di difficile recuperabilità in un credito munito di titolo esecutivo ed assistito da garanzia reale, aumentando concretamente le prospettive di recupero.</p>
            <img
              style={{
                display: 'block',
                marginTop: '60px',
                width: '64px'
              }} src={icon2}
            />
            <h3>GESTIONE E RECUPERO CREDITI BANCARI NPL - UTP
            </h3>
            <p>ManciniCeroni fornisce assistenza in favore di banche e intermediari finanziari, per la gestione ed il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP).</em></p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con i principali Servicer del settore dei crediti anomali, in qualità di Loan Manager nonché di legali esterni. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione accurata e profittevole di singole posizioni e/o portafogli di pratiche
              <em>NPL/UTP secured e unsecured di small, mid e large ticket</em>,
              per l’intera filiera della gestione del credito:

            </p>
            <ul>
              <li>Analisi delle pratiche affidate e pianificazione della migliore strategia di recupero;
              </li>
              <li>Attività stragiudiziale, finalizzata alla definizione transattiva;
              </li>
              <li>Acquisizione ed analisi di visure camerali, catastali - ipocatastali ed informative commerciali, per la verifica della solvibilità;
              </li>
              <li>Attività giudiziale, esecutiva e concorsuale, finalizzata al recupero coattivo ed alla valorizzazione del credito;

              </li>
              <li>Attività giudiziale di tutela del credito nelle cause passive;</li>
              <li>Costante aggiornamento, anche attraverso la conoscenza professionale dei principali portali gestionali utilizzati da banche e intermediari finanziari: EPC; REC; SYGES; LAWEB; EASYLEX; WELLDONE.
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >Lo Studio fornisce altresì la propria collaborazione ed assistenza per attività di <em>Due Diligence</em>, valutazione/analisi dei portafogli, <em>Data Remediation e Business Plan</em>, garantendo qualità e rispetto della tempistica di definizione della lavorazione richiesta dal Cliente.
            </p>
          </div>
        </div>
        <Newsletter />
      </Layout>
      <style jsx='true'>{`
      .img-container {
       position: relative;
       bottom: 20px;
       margin-bottom: 20px
     }
          .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
          }
          .lo-studio h2, .lo-studio h3 {
              color:  var(--main-color)
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


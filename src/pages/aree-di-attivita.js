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
            <span><strong>Un solo settore per garantire un servizio altamente professionale.</strong>
              <p>Il nostro studio è focalizzato nella gestione del recupero crediti di derivazione commerciale e bancaria.
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
            <p>Forniamo assistenza in favore di piccole e medie imprese, artigiani e professionisti, per la gestione ed il recupero di crediti commerciali.
            </p>
            <p>I nostri professionisti hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con i più importanti studi legali italiani e con le più accreditate società di recupero crediti all’interno dei dipartimenti di contenzioso giudiziale e credit collection. </p>
            <p>Lo studio è in grado di fornire autonoma assistenza nella gestione e nel recupero in fase stragiudiziale, giudiziale ed esecutiva, nonché nelle procedure concorsuali (fallimenti; concordati).</p>
            <p>Sempre dopo un attento confronto con il cliente, vengono concordate le principali attività per raggiungere l’obiettivo in maniera efficace e rapida, con la maturazione di un compenso conforme alle tariffe forensi e rapportato alle effettive somme recuperate. </p>
            <p id='crediti-bancari'>Lo studio persegue inoltre la valorizzazione dei crediti affidati, ponendo in essere tutte quelle attività finalizzate ad ottenere un titolo esecutivo e per quanto possibile una garanzia reale. In questo modo, il cliente avrà maggiori possibilità di perseguire il recupero del proprio credito sia in ottica di definizione stragiudiziale sia attivandosi in via coattiva-esecutiva.</p>
            <img
              style={{
                display: 'block',
                marginTop: '60px',
                width: '64px'
              }} src={icon2}
            />
            <h3>GESTIONE E RECUPERO CREDITI BANCARI NPL - UTP
            </h3>
            <p>Lavoriamo a fianco delle banche e degli intermediari finanziari per la gestione ed il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP)</em>.</p>
            <p>L’esperienza acquisita negli anni ci ha permesso di raggiungere un elevato livello di competenza nella collaborazione con i principali servicer del settore dei crediti anomali, in qualità di Loan manager, nonché di legali esterni.</p>
            <p>Forniamo autonoma assistenza nella gestione accurata e profittevole di singole posizioni e/o portafogli di pratiche NPL/UTP secured e unsecured di small, mid e large ticket, per l’intera filiera della gestione del credito:
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
              <li>Costante aggiornamento, anche attraverso la conoscenza professionale dei principali portali gestionali utilizzati da banche e intermediari finanziari: EPC, REC, SYGES, LAWEB, EASYLEX, WELLDONE.
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >Affianchiamo inoltre i nostri clienti nell’attività di <em>Due Diligence,</em> valutazione/analisi dei portafogli, <em>Data Remediation e Business Plan,</em> garantendo qualità e rispetto delle tempistiche richieste dal progetto.
            
            </p>
          </div>
        </div>
        <ContactCta />
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

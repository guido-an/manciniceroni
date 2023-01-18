import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

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
          fluid(maxWidth: 1900, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useEffect(() => {
    setTimeout(() => {
      const contactId= document.getElementById("contact-page");
        contactId.scrollIntoView({block:"start",inline:"nearest"});
    }, 100);
  }, [])
  return (
    <Layout>

      <div id='contact-page'>
        <div className='img-container'>
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>

        <div
          className='container' style={{
            paddingBottom: '60px'
          }}
        >
          <div className='lo-studio'>
            <h2>Contatti</h2>
            <div style={myDivider} />
            <span><strong>Mettiti in contatto con noi, ti forniremo tutto il supporto necessario.</strong>
            </span>
            <p style={{
              marginTop: '40px'
            }}
            >Tel. 349 0887444 – 334 6775287
            </p>

            <p><a href='mailto:info@ceronimancini.it'>info@ceronimancini.it</a></p>

          </div>
          <div id='maps-container'>
            <div className='container-office'>
              <h3 className='address'>Fermo</h3>
              <p className='contact-address'>63831 RAPAGNANO (FM)</p>
              <p className='contact-address'> Via San Severino, 2	</p>
              {/* <p className='contact-address'><a href='mailto:info@ceronimancini.it'>info@ceronimancini.it</a></p> */}
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.3787657012035!2d13.584256515559613!3d43.159572992227176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13320859b8b3de1f%3A0x6e3c058788a23610!2sVia%20S.%20Severino%2C%202%2C%2063831%20Rapagnano%20FM%2C%20Italy!5e0!3m2!1sen!2sin!4v1673956255541!5m2!1sen!2sin' width='100%' height='400px' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>
            </div>
            <div
              className='container-office' style={{
                marginTop: '40px'
              }}
            >
              <h3>Forlì-Cesena</h3>
              <p className='contact-address'>47042 CESENATICO (FC)</p>
              <p className='contact-address'>Via Don Ercole Fiori, 9</p>
              {/* <p className='contact-address'><a href='mailto:info@ceronimancini.it'>info@ceronimancini.it</a></p> */}
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.183563001052!2d12.341015015321862!3d44.162075979107115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cba1f7f0402c5%3A0x52b49d9450b1d856!2sVia%20Don%20Fiori%2C%209%2C%2047042%20Bagnarola%20FC%2C%20Italy!5e0!3m2!1sen!2ses!4v1611139833370!5m2!1sen!2ses' width='100%' height='400px' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' />
            </div>
            <div
              style={{
                marginTop: '0px'
              }} className='container-office'
            >
              <h3 className='address'>Ancona</h3>
              <p className='contact-address'>60125 ANCONA (AN)</p>
              <p className='contact-address'>Via Alcide De, Gasperi, 82 </p>
              {/* <p className='contact-address'><a href='mailto:info@ceronimancini.it'>info@ceronimancini.it</a></p> */}

              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9697678037182!2d13.507470515302106!3d43.60717107912294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7f907aa79ad3%3A0x30dcbba1e2cb19cb!2sVia%20Alcide%20de%20Gasperi%2C%2082%2C%2060125%20Ancona%20AN%2C%20Italy!5e0!3m2!1sen!2ses!4v1611057132380!5m2!1sen!2ses' width='100%' height='400px' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' />
            </div>
           
          </div>
        </div>

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
          .lo-studio h2 {
            color: var(--main-color) !important
          }
          .container-office h3 {
            color: var(--main-color) !important
          }
          .contact-address {
              line-height: 12px
          }
          .address {
              margin-top: 60px
          }
          @media(min-width:968px){
            .lo-studio{
              margin-top: 60px ;
              width: 80%;
              margin: 0 auto
            }
            .container-office {
              width: 30%
            }
            #maps-container {
              display: flex;
              justify-content: space-between
            }
            #contact-page {
              margin-top: 120px
            }
          } 
      `}
        </style>
      </div>
    </Layout>
  )
}

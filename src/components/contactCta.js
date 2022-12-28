import React from 'react'
import { Link } from 'gatsby'

const contactCta = () => (
  <section className='contact-cta'>
    <div>
      <h2>Sei interessato a saperne di più?</h2>
      <p>Contattaci per sapere quello che possiamo fare per te.</p>
    </div>
    <div>
      <Link style={{ textAlign: 'center' }} className='btn btn-cta' to='/contatti'>CONTATTI</Link>
    </div>
    <style jsx='true'>
      {`
      .contact-cta{
        background-color: #fafafa;
        color: #fff;
        text-align: center;
        padding: 60px 4% 120px;
        position: relative;
        top:60px
      }
      .contact-cta h2 {
          color: #052b60
      }
      .contact-cta p {
        color: #222;
        margin-bottom: 40px
      }
      .btn-cta{
          background: #052b60;
          color: #fff!important;
          font-weight: 400;
          padding: 10px 30px;
          border-radius: 35px;
          letter-spacing: 0.4px;

        }
        .btn-cta:hover{
          border: 1px solid #fff;
          background-color: #fff !important;
          color: var(--main-color) !important
        }
        .contact-cta p {
        font-weight: 300
        }
   
    @media(min-width: 1200px){
      .contact-cta{
        display:flex;
        justify-content: space-evenly;
        text-align: left;
        padding: 40px 4% 60px;
    

      }
      .contact-cta h2{
           font-size: 32px
        }
        .btn-cta{
          position: relative;
          top: 60px
        }
        .contact-cta p {
          position: relative;
          bottom: 10px;
        }
    }
      `}
    </style>
  </section>

)

export default contactCta

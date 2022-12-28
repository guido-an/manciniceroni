import React, { useState } from 'react'
import { Link } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addToMailchimp(email)
      setMessage('Email added succesfully :)')
    } catch (err) {
      console.log(err)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value)
  }
  return (
    <section className='newsletter'>
      <div>
        <h2>Iscriviti alla nostra newsletter</h2>
        <p>Scopri le ultime novità sulla gestione e recupero crediti.</p>
      </div>
      <div id='newsletter-form'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Inserisci la tua email'
            onChange={handleEmailChange}
          />
          <button>ISCRIVITI</button>
          <p style={{ marginBottom: '40px', fontWeight: '400', fontSize: '16px' }}>{message}</p>
        </form>
      </div>
      <style jsx='true'>
        {`
      .newsletter{
        color: #fff;
        text-align: center;
        padding: 60px 4% 120px;
        position: relative;
        position: relative;
        
      }
      .newsletter h2 {
          color: #fff
      }
      .newsletter p {
        color: #fff;
        margin-bottom: 40px
      }

      .newsletter input {
          height: 20px;
          width: 300px;
          padding: 10px;
          border: 0.5px solid #fff
      }
      button {
          display: block;
          margin: 10px auto 0;
          height: 42px;
          width: 325px;
          background-color: var(--main-color);
          color: #fff;
          border: 0.5px solid #fff
      }
   
    @media(min-width: 1200px){
      .newsletter{
        display:flex;
        justify-content: space-evenly;
        text-align: left;
        padding: 40px 4% 60px;
      }
      .newsletter h2{
           font-size: 32px
        }
       
        .newsletter p {
          position: relative;
          bottom: 10px;
        }

        button {
          display: inline-block;
          margin: 10px auto 0;
          width: 150px;
      }
      #newsletter-form {
          position: relative;
          top: 30px
      }
    }
`}
      </style>
    </section>

  )
}

export default Newsletter

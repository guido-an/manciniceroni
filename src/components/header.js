import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import logoDesktop from '../images/02_LOGO-CERONI&MANCINI.png'

export default () => {
  const data = useStaticQuery(graphql`
  query {
    logoMobile: file(relativePath: { eq: "logo-sinistra.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  const [visible, setVisible] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  const [subMenuDesktop, setSubMenuDesktop] = useState(false)

  const activeStyles = {
    color: '#052B60',
    borderBottom: '2px solid #052B60'
  }

  const showMobileMenu = (data) => {
    setVisible(!visible)
  }

  return (
    <header onMouseLeave={() => setSubMenuDesktop(false)}>
      <section className='mobile-nav'>
        <Link to='/'>
          {' '}
          <Img fixed={data.logoMobile.childImageSharp.fixed} />
        </Link>
        {visible ? (
          <div onClick={showMobileMenu} className='burger-icon-close'>
            <span>X</span>
          </div>
        ) : (
          <div onClick={showMobileMenu} className='burger-icon-open'>
            <span />
            <span />
            <span />
          </div>
        )}
      </section>

      {visible ? (
        <nav className='mobile-menu'>
          <ul>
            <li>
              <Link
                to='/'
                activeClassName='active'
              >HOME
              </Link>
            </li>
            <li>
              <Link to='/lo-studio'>LO STUDIO</Link>
            </li>
            <li>
              <Link to='/professionisti'>PROFESSIONISTI</Link>
            </li>
            <li onClick={() => setSubMenu(!subMenu)}>
              <Link to='/aree-di-attivita'>AREE DI ATTIVITÀ</Link>
            </li>
            {subMenu && (
              <div className='submenu'>
                <li>
                  <Link to='/aree-di-attivita/#crediti-commerciali'>CREDITI COMMERCIALI</Link>
                </li>
                <li>
                  <Link to='/aree-di-attivita/#crediti-bancari'>CREDITI BANCARI</Link>
                </li>
              </div>)}
            <li>
              <Link to='/news'>NEWS</Link>
            </li>
            <li>
              <Link to='/contatti'>CONTATTI</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <p />
      )}

      <nav className='desktop-menu'>
        <div style={{ width: '400px' }}>
          <Link to='/'>
            <img
              src={logoDesktop} style={{
                position: 'relative',
                bottom: '15px',
                height:"83px"
              }}
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to='/' activeStyle={activeStyles}>HOME</Link>
          </li>
          <li>
            <Link to='/lo-studio' activeStyle={activeStyles}>LO STUDIO</Link>
          </li>
          <li>
            <Link to='/professionisti' activeStyle={activeStyles}>PROFESSIONISTI</Link>
          </li>
          <li
            onMouseEnter={() => setSubMenuDesktop(true)}

          >
            <Link to='/aree-di-attivita' activeStyle={activeStyles}>AREE DI ATTIVITÀ</Link>
          </li>
          <li>
            <Link to='/news' activeStyle={activeStyles}>NEWS</Link>
          </li>
          <li>
            <Link to='/contatti' activeStyle={activeStyles}>CONTATTI</Link>
          </li>
        </ul>
      </nav>
      {subMenuDesktop && (
        <div className='submenu-desktop'>
          <li>
            <Link to='/aree-di-attivita/#crediti-commerciali'>CREDITI COMMERCIALI</Link>
          </li>
          <li>
            <Link to='/aree-di-attivita/#crediti-bancari'>CREDITI BANCARI</Link>
          </li>
        </div>)}

      <style jsx='true'>{`
          .mobile-nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
          .mobile-menu li {
            list-style: none
          }

          .desktop-menu {
            display: none;
          }

          header a {
            color: #5e5e5e;
          }
          header a:hover {
            color: #052B60 !important;
          }
          .burger-icon-close span {
            font-size: 26px;
            color: #777;
            position: relative;
            right: 20px;
          }
          .burger-icon-open {
            position: relative;
            top: 55px;
            right: 10px;
          }
          .mobile-menu ul {
            position: relative;
            bottom: 20px
          }

          .burger-icon-open span {
            width: 30px;
            border: 1px solid #777;
            margin: 5px;
            display: block;
            position: relative;
            bottom: 50px
          }
          .mobile-menu li {
            margin: 10px;
          }
          .submenu li {
            font-size: 14px;
            margin-left: 20px
          }
          @media (min-width: 1200px) {
           
            .mobile-nav {
              display: none;
            }
            .mobile-menu {
              display: none;
            }
            .logo{
              position: relative;
              bottom: 10px;
            }
            .desktop-menu {
              display: flex;
              justify-content: space-around;
              height: 70px;
              position: fixed;
              background-color: #fff;
              top: 0px;
              right: 0px;
              left: 0;
              padding: 20px 40px 0;
              z-index: 99;
              border-bottom: 2px solid #f7f7f7
         
            }
            .desktop-menu li {
            list-style: none;
            position: relative;
              bottom: 20px;
          }
            .desktop-menu ul {
              display: flex;
              position: relative;
              
            }
            .desktop-menu ul li {
              margin: 20px;
            }
            .desktop-menu ul li:hover {
              color: #052B60
            }
            .logo-desktop {
              position: relative;
              top: 5px
            }
            .submenu-desktop {
              z-index: 99;
              position: relative;
              top: 70px;
              background-color: #fff;
              width: 250px;
              padding: 10px 20px;
              position: fixed;
              top: 80px;
              right: 100px;
              border: 2px solid #fafafa
            }
            .submenu-desktop li {
              font-size: 15px;
              list-style: none;
              margin-bottom: 5px
            }
          }
        `}
      </style>
    </header>
  )
}

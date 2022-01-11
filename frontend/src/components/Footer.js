import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>       
          <div className='footer-link-items'>
            <h2>CONTACT</h2>
            <p><i className="far fa-address-book"></i>  Leoš Procházka</p>
            <p><i className="fas fa-map-marker-alt"></i>  Krátká 561, Lenešice 439 23</p>
            <p><i className="fas fa-phone-alt"></i>  +420 605 454 093</p>
            <p><i className="fas fa-envelope"></i>  prochazka.l@seznam.cz</p>
          </div>  
          <div className='footer-link-items'>
            <h2>INFORMATION</h2>
            <Link to='/'><li>About company</li></Link>
            <Link to='/'><li>Terms and Conditions</li></Link>
            <Link to='/'><li>Complaints Procedure</li></Link>
            <Link to='/'><li>Protection and personal data</li></Link>
          </div>
          <div className='footer-link-items'>
            <h2>DOWNLOAD</h2>
            <Link to='/'><li>Brochure to download</li></Link>
            <Link to='/'><li>Technical details</li></Link>
          </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Zaluzie Prochazka
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Zaluzie Prochazka © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

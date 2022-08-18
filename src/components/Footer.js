import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.instagram.com/mohsenpasdar' target={'_blank'}><InstagramIcon /></a>
                <a href='https://twitter.com/mohsenpasdar' target={'_blank'}><TwitterIcon /></a>
                <a href='https://www.facebook.com/msnddr/' target={'_blank'}><FacebookIcon /></a>
                <a href='https://www.linkedin.com/in/mohsenpasdar/' target={'_blank'}><LinkedInIcon /></a>
            </div>
            <p>&copy; 2022 mohsenpasdar.com</p>
        </div>
    );
};

export default Footer
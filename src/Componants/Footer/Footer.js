import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const fb = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const instra = <FontAwesomeIcon icon={faInstagram} />
const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Footer = () => {
    return (
        <div id="Footer" className="footer p-5">
            <div className="row">
                <div className="col-md-2">
                    <a class="navbar-brand" href="#">POWER <span class="x"> X</span> </a>
                </div>
                <div className="col-md-2">
                    <h5>Need Help ?</h5>
                    <ul className="footerLi">
                        <a href="#"> <li>Help Center</li></a>
                        <a href="#"> <li>Email Support</li></a>
                        <a href="#"> <li>Live Chat</li></a>
                        <a href="#"> <li>Gift Certificates</li></a>
                        <a href="#"> <li>Send Us FeedBack</li></a>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h5>Digital Resources</h5>
                    <ul className="footerLi">
                        <a href="#"> <li>Articles</li></a>
                        <a href="#"> <li>E-books</li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Connect with Us</h5>
                    <ul className="socialLink">
                        <li> <a href="#">{youtube}</a></li>
                        <li> <a href="#">{fb}</a></li>
                        <li> <a href="#">{instra}</a></li>
                        <li> <a href="#">{twitter}</a></li>
                        <li> <a href="#">{whatsapp}</a></li>
                    </ul>
                    <ul className="footerLi">
                        <a href="#"> <li>Forum</li></a>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Join Our Newsletter</h5>
                    <p className="newsletter">Get exclusive news,features, and updates from
                    the Shredder Weight Loos Academy.</p>
                </div>
            </div>
            <p className="copyright"> © Copyright {new Date().getFullYear()} Programming Hero. All Rights Reserved"</p>
        </div>
    );
};

export default Footer;
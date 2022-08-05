import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from "./index";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const isMobile = useMediaQuery(
        '(max-width: 550px)'
    );

    return (
        <footer>
            <div class="footer-container">
                <h2>Thanks for visiting! Feel free to contact me for further inquiries!</h2>
                <p class="email">jenny100.yu@gmail.com</p>

                <div class="footer-underline"></div>
                
                <a href="https://www.linkedin.com/in/jennyyu519/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icons" />
                </a>
                <a href="https://github.com/MochiTarts" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icons" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Cv4yXE2DOnY_rpJ9nPNMg" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} className="icons" />
                </a>
                <a href="https://www.instagram.com/jy_melodicist/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="icons" />
                </a>
            </div>
            <p class="footer-final-text">Copyright &copy; { year } Jenny Yu</p>
        </footer>
    );
};

export default Footer;
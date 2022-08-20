import { Link } from "react-router-dom";

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../assets/images/logo-footer.png';
import FooterBgImage from '../assets/images/footer-bg.jpg';

const FooterSC = styled.footer`
    background: url(${FooterBgImage}) no-repeat;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    background-blend-mode: multiply;
    color: ${({ theme }) => theme.colors.white};

    font-size: .875rem;
    font-weight: 600;
    line-height: 1.5;
    padding: 0 5% 2em;

    .footer {
        
        &__top {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3em;
            
            padding: 5em 0;
            text-align: center;
        }
        
        &__fig {
            max-width: 500px;
        }

        &__figc {
            margin-top: 1.5em;
        }

        &__link {
            color: ${({ theme }) => theme.colors.white};

            &--contact {
                display: flex;
                align-items: center;
                gap: 1em;
            }
        }

        &__heading {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: .75em;
        }



        &__list {
            display: flex;
            flex-direction: column;
            gap: .75em;
        }

        &__address {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1em;
        }

        @media (min-width: 700px) {
            &__top {

                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;
                
                text-align: left;
            }

            &__fig,
            &__nav,
            &__address-c {
                flex: 45%;
            }
            
            &__address {
                align-items: flex-start;
            }
        }
        
        @media (min-width: 900px) {
            &__fig,
            &__nav,
            &__address-c {
                flex: 200px;
                max-width: fit-content;
            }
            
            &__fig {
                max-width: 300px;
            }

            &__address-c {
                max-width: 225px;
            }            
        }
    }
`;

const Footer = () => {
    return (
        <FooterSC>
            <div className="footer__top">
                <figure className="footer__fig">
                    <img src={Logo} alt="GCET logo" />
                    <figcaption className="footer__figc">
                        Global Concept Emerge Technologies Limited has
                        infrastructure, network &amp; security certified experts and
                        specialists in these business IT solutions.
                    </figcaption>
                </figure>
                <nav className="footer__nav">
                    <h3 className="footer__heading">Solutions</h3>
                    <ul className="footer__list">
                        <li>
                            <Link className="footer__link" to='/'>
                                Enterprise Security Solutions &amp; Services
                            </Link>
                        </li>
                        <li>
                            <Link className="footer__link" to='/'> Infrastructure Solutions &amp; Services </Link>
                        </li>
                        <li>
                            <Link className="footer__link" to='/'> Business Service Management </Link>
                        </li>
                        <li>
                            <Link className="footer__link" to='/'> Enterprise Networking Solutions </Link>
                        </li>
                        <li>
                            <Link className="footer__link" to='/'> Cloud and Mobile Solutions </Link>
                        </li>
                        <li>
                            <Link className="footer__link" to='/'> Business Enterprise Software </Link>
                        </li>
                    </ul>
                </nav>
                <nav className="footer__nav">
                    <h3 className="footer__heading">Services</h3>
                    <ul className="footer__list">
                        <li><Link className="footer__link" to='/'> IT Advisory and Managed Services </Link></li>
                        <li><Link className="footer__link" to='/'> Network Assessment Services </Link></li>
                    </ul>
                </nav>
                <div className="footer__address-c">
                    <h3 className="footer__heading">Corporate Office</h3>
                    <address className="footer__address">
                        <p>
                            24b Tijani Amodu Close, off Sanusi Fafunwa, Victoria
                            Island Lagos.
                        </p>
                        <p>
                            <a className='footer__link footer__link--contact' href="tel:+234 8118193875">
                                <FontAwesomeIcon icon='fa-solid fa-phone' />
                                <span>+234 8118193875</span>
                            </a>
                        </p>
                        <p>
                            <a className='footer__link footer__link--contact' href="mailto:info@gcetng.com">
                                <FontAwesomeIcon icon='fa-regular fa-envelope' />
                                <span>info@gcetng.com</span>
                            </a>
                        </p>
                    </address>
                </div>
            </div>
            <p>
                &copy; Copyrights <abbr title="Global Concept Emerge Technologies">GCET</abbr>.
                All rights reserved.
            </p>
        </FooterSC>
    )
}

export default Footer;
import { Link } from "react-router-dom";

import styled from 'styled-components';

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
    padding: 0 5% 2em;
    
    a {
        color: ${({ theme }) => theme.colors.white};
    }

    h3 {
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: .75em;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: .75em;
    }
`;

const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    padding: 5em 0;
    text-align: center;

    > * {
        /* border: 1px solid red; */
        flex: 250px;
    }

    @media (min-width: 600px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;

        text-align: left;
    }
`;

const Figure = styled.figure`
    max-width: 500px;

    figcaption {
        margin-top: 1.5em;
    }
`;

const Footer = () => {
    return (
        <FooterSC>
            <FooterTop>

                <Figure>
                    <img src={Logo} alt="GCET logo" />
                    <figcaption>
                        Global Concept Emerge Technologies Limited has
                        infrastructure, network &amp; security certified experts and
                        specialists in these business IT solutions.
                    </figcaption>
                </Figure>
                <nav>
                    <h3>Solutions</h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                Enterprise Security Solutions &amp; Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/'> Infrastructure Solutions &amp; Services </Link>
                        </li>
                        <li>
                            <Link to='/'> Business Service Management </Link>
                        </li>
                        <li>
                            <Link to='/'> Enterprise Networking Solutions </Link>
                        </li>
                        <li>
                            <Link to='/'> Cloud and Mobile Solutions </Link>
                        </li>
                        <li>
                            <Link to='/'> Business Enterprise Software </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3>Services</h3>
                    <ul>
                        <li><Link to='/'> IT Advisory and Managed Services </Link></li>
                        <li><Link to='/'> Network Assessment Services </Link></li>
                    </ul>
                </nav>
                <div>
                    <h3>Corporate Office</h3>
                    <address>
                        <p>
                            24b Tijani Amodu Close, off Sanusi Fafunwa, Victoria
                            Island Lagos.
                        </p>
                        <a href="tel:+234 8118193875">+234 8118193875</a>
                        <a href="mailto:info@gcetng.com">info@gcetng.com</a>
                    </address>
                </div>
            </FooterTop>
            <p>
                &copy; Copyrights <abbr title="Global Concept Emerge Technologies">GCET</abbr>.
                All rights reserved.
            </p>
        </FooterSC>
    )
}

export default Footer;
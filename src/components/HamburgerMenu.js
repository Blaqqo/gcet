import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../contexts/app';

import HamburgerIcon from './HamburgerIcon';

const Menu = styled.div`
  display: block;
  
  @media (min-width: 800px) {
    display: none;
  }
`;

const Aside = styled.aside`
  padding: 5em 5% 3em 2em;

  background: ${({ theme }) => theme.colors.mediumBlue};
  color: hsla(0, 0%, 100%, .75);

  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 5;

  visibility: ${({ $isMenuOpen }) => $isMenuOpen ? 'visible' : 'hidden'};
  transform: translateY(${({ $isMenuOpen }) => $isMenuOpen ? 0 : '100vh'});
  transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Nav = styled.nav`
    .ham__details {
        list-style: none;
    }
        

    .ham__submenu {
        margin-top: .25em;
        margin-left: 1em;
    }

    .ham__list {
        display: flex;
        flex-direction: column;
        gap: 2em;

    }
    
    .ham__item {
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.25rem;
        font-weight: 600;
    }
    
    .ham__link {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        
        &--flex {
            display: flex;
            align-items: center;
            gap: .75em;
            
            max-width: fit-content;
        }
    }

    .ham__subitem {
        font-size: 1rem;
        padding: .25em;
    }

    .ham__sublink {
        color: ${({ theme }) => theme.colors.white};
    }
    
    .ham__link-btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border-radius: .25em;
        display: block;
        padding: .625em .875em;
        width: fit-content;
    }
`;

const HamburgerMenu = () => {
    const { state: { isMenuOpen } } = useContext(AppContext);

    return (
        <Menu>
            <HamburgerIcon />

            <Aside $isMenuOpen={isMenuOpen}>

                <Nav>
                    <ul className='ham__list'>
                        <li className='ham__item'>
                            <Link className='ham__link' to='/about'>About</Link>
                        </li>
                        <li className='ham__item'>
                            <details className='ham__details'>
                                <summary className='ham__summary ham__link ham__link--flex'>
                                    <FontAwesomeIcon icon='fa-solid fa-caret-right' />Solutions
                                </summary>
                                <ul className='ham__submenu' aria-label='submenu'>
                                    <li className='ham__subitem'><Link to='/solutions/eess' className='ham__sublink'>Enterprise Security Solutions &amp; Services (ESSS)</Link></li>
                                    <li className='ham__subitem'><Link to='/solutions/iss' className='ham__sublink'>Infrastructure Solutions &amp; Services (ISS)</Link></li>
                                    <li className='ham__subitem'><Link to='/solutions/bsms' className='ham__sublink'>Business Service Management Solutions</Link></li>
                                    <li className='ham__subitem'><Link to='/solutions/ens' className='ham__sublink'>Enterprise Networking Solutions</Link></li>
                                    <li className='ham__subitem'><Link to='/solutions/cms' className='ham__sublink'>Cloud and Mobile Solutions</Link></li>
                                    <li className='ham__subitem'><Link to='/solutions/bes' className='ham__sublink'>Business Enterprise Software</Link></li>
                                </ul>
                            </details>

                        </li>
                        <li className='ham__item'>
                            <details className='ham__details'>
                                <summary className='ham__summary ham__link ham__link--flex'>
                                    <FontAwesomeIcon icon='fa-solid fa-caret-right' /> Services
                                </summary>
                                <ul className='ham__submenu' aria-label='submenu'>
                                    <li className='ham__subitem'><Link to='/services/it-advisory' className='ham__sublink'>IT Advisory and Managed Services</Link></li>
                                    <li className='ham__subitem'><Link to='/services/network-assessment' className='ham__sublink'>Network Assessment Services</Link></li>
                                </ul>
                            </details>

                        </li>
                        <li className='ham__item'>
                            <Link className='ham__link' to='/blog'>Blog</Link>
                        </li>
                        <li className='ham__item'>
                            <Link className='ham__link' to='/contact'>Contact</Link>
                        </li>
                        <li className='ham__item'>
                            <a href='https://store.gcetng.com' className='ham__link' title='Store'><FontAwesomeIcon icon='fa-solid fa-cart-shopping' /></a>
                        </li>
                        <li className='ham__item'>
                            <Link className='ham__link ham__link-btn' to='/consultancy'>
                                Get Consultancy
                            </Link>
                        </li>
                    </ul>
                </Nav>
            </Aside>
        </Menu>
    )
}

export default HamburgerMenu;
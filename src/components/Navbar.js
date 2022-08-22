import { useContext } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/images/logo-header.png';

import { AppContext } from '../contexts/app';

import HamburgerMenu from './HamburgerMenu';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5em;
    
    font-weight: 600;
    position: relative;
    z-index: 10;
    
    @media (max-width: 800px) {
        & {
            ${({ $isMenuOpen }) => $isMenuOpen && `
            position: fixed;
            top: 2.65em;
            right: 5%;
            `}
        }

        .nav__logo{
            display: ${({ $isMenuOpen }) => $isMenuOpen ? 'none' : 'block'};
        }
    }

    .nav__menu {
        display: none;

        flex: 1;
        max-width: 800px;
    }

    .nav__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav__item,
    .nav__subitem {
        position: relative;
        display: block;
        float: left;
    }

    .nav__item {
        white-space: nowrap;

        
        &:hover > .nav__submenu,
        &:focus-within > .nav__submenu,
        .nav__submenu:hover,
        .nav__submenu:focus {
            display: block;
            opacity: 1;
            visibility: visible;

        }
    }

    .nav__link {
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        &--flex {
            display: flex;
            align-items: center;
            gap: .75em
        }
    }

    .nav__submenu {
        border-radius: .125em;
        padding-top: 1em;
        min-width: 200px;

        display: none;
        visibility: hidden;
        opacity: 0;

        position: absolute;
        left: 0;
        transition: all .5s ease-in-out;
    }

    .nav__subitem {
        clear: both;
        width: 100%;
        
    }
    
    .nav__sublink {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.darkGray};
        display: block;
        padding: .65em 1em;

        &:hover {
            background: #f5f5f5;
        }
    }
    
    .nav__link-btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border-radius: .25em;
        display: block;
        padding: .625em .875em;
    }

    @media (min-width: 800px) {
        .nav__menu {
            display: block;
        }
    }
`;

const Navbar = () => {
    const { state: { isMenuOpen } } = useContext(AppContext);

    return (
        <Nav $isMenuOpen={isMenuOpen}>
            <Link to='/'>
                <img className='nav__logo' src={logo} alt="GCET logo" />
            </Link>

            <div className="nav__menu">
                <ul className="nav__list">
                    <li className='nav__item'><Link className='nav__link' to='/about'>About</Link></li>
                    <li className='nav__item'>
                        <span className='nav__link nav__link--flex' aria-haspopup={true}>Solutions
                            <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                        </span>

                        <ul className="nav__submenu" aria-label='submenu'>
                            <li className='nav__subitem'><Link to='/solutions/eess' className='nav__sublink'>Enterprise Security Solutions &amp; Services (ESSS)</Link></li>
                            <li className='nav__subitem'><Link to='/solutions/iss' className='nav__sublink'>Infrastructure Solutions &amp; Services (ISS)</Link></li>
                            <li className='nav__subitem'><Link to='/solutions/bsms' className='nav__sublink'>Business Service Management Solutions</Link></li>
                            <li className='nav__subitem'><Link to='/solutions/ens' className='nav__sublink'>Enterprise Networking Solutions</Link></li>
                            <li className='nav__subitem'><Link to='/solutions/cms' className='nav__sublink'>Cloud and Mobile Solutions</Link></li>
                            <li className='nav__subitem'><Link to='/solutions/bes' className='nav__sublink'>Business Enterprise Software</Link></li>
                        </ul>
                    </li>
                    <li className='nav__item'>
                        <span className='nav__link nav__link--flex' aria-haspopup={true}>Services
                            <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                        </span>
                        <ul className="nav__submenu" aria-label='submenu'>
                            <li className='nav__subitem'><Link to='/services/it-advisory' className='nav__sublink'>IT Advisory and Managed Services</Link></li>
                            <li className='nav__subitem'><Link to='/services/network-assessment' className='nav__sublink'>Network Assessment Services</Link></li>
                        </ul>
                    </li>
                    <li className='nav__item'><Link className='nav__link' to='/'>Blog</Link></li>
                    <li className='nav__item'><Link className='nav__link' to='/'>Contact</Link></li>
                    <li className='nav__item'>
                        <Link className='nav__link' to='/'>
                            <FontAwesomeIcon icon='fa-solid fa-cart-shopping' />
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link className="nav__link-btn" to='/'>
                            Get Consultancy
                        </Link>
                    </li>
                </ul>
            </div>

            <HamburgerMenu />
        </Nav>
    )
}

export default Navbar;
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
    padding: 0 5% 1em;
    position: relative;
    z-index: 10;
    
    @media (max-width: 800px) {
        & {
            ${({ $isMenuOpen }) => $isMenuOpen && `
            position: fixed;
            top: 2em;
            right: 0;
            `}
        }

        .nav__logo{
            display: ${({ $isMenuOpen }) => $isMenuOpen ? 'none' : 'block'};
        }
    }

    .nav {

        &__menu {
            display: none;

            flex: 1;
            max-width: 800px;
        }
    
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__item,
        &__subitem {
            position: relative;
            display: block;
            float: left;
        }

        &__item {
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

        &__link {
            color: ${({ theme }) => theme.colors.white};

            &--flex {
                display: flex;
                align-items: center;
                gap: .75em
            }
        }

        &__submenu {
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
    
        &__subitem {
            clear: both;
            width: 100%;
            
        }
        
        &__sublink {
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.darkGray};
            display: block;
            padding: .65em 1em;

            &:hover {
                background: #eeeeee;
            }
        }
        
        &__link-btn {
            background: ${({ theme }) => theme.colors.lightBlue};
            color: ${({ theme }) => theme.colors.white};
            border-radius: .25em;
            display: block;
            padding: .625em .875em;
        }

        @media (min-width: 800px) {
            &__menu {
                display: block;
            }
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
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Enterprise Security Solutions &amp; Services (ESSS)</Link></li>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Infrastructure Solutions &amp; Services (ISS)</Link></li>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Business Service Management Solutions</Link></li>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Enterprise Networking Solutions</Link></li>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Business Enterprise Software</Link></li>
                        </ul>
                    </li>
                    <li className='nav__item'>
                        <span className='nav__link nav__link--flex' aria-haspopup={true}>Services
                            <FontAwesomeIcon icon='fa-solid fa-chevron-down' />
                        </span>
                        <ul className="nav__submenu" aria-label='submenu'>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>IT Advisory and Managed Services</Link></li>
                            <li className='nav__subitem'><Link to='/' className='nav__sublink'>Network Assessment Services</Link></li>
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
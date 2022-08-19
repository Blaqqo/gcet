import { Link } from "react-router-dom";

import styled from "styled-components";

import logo from '../assets/images/logo-header.png';

import heroBgLeft from '../assets/images/home/hero-bg-left.svg';
import heroBgRight from '../assets/images/home/hero-bg-right.svg';

import HeroCarousel from "./home/HeroCarousel";

const HeaderSC = styled.header`
    background-image: url(${heroBgLeft}), url(${heroBgRight});
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    background-repeat: no-repeat;
    background-position: left bottom, right top;
    color: ${({ theme }) => theme.colors.white};

    padding: 3em 5%;
    min-height: 100vh;

    a {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5em;

    .nav__menu {
        flex: 1;
        max-width: 800px;
    }

    .nav__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav__link-btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border-radius: .25em;
        display: block;
        font-size: 1.125rem;
        font-weight: 600;
        padding: .625em .875em;
    }
`;

const Header = () => {
    return (
        <HeaderSC>
            <Navbar>

                <img src={logo} alt="GCET logo" />

                <nav className="nav__menu">
                    <ul className="nav__list">
                        <li><Link to='/'>About</Link></li>
                        <li>
                            <Link to='/'>Solutions
                                {/* <!-- arrow-down --> */}
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>Services
                                {/* <!-- arrow-down --> */}
                            </Link>
                        </li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact</Link></li>
                        <li>
                            <Link to='/'>
                                {/* <!-- Cart --> */}
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__link-btn" to='/'>
                                Get Consultancy
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Navbar>

            <HeroCarousel />
        </HeaderSC>
    )
}

export default Header;
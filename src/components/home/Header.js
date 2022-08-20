import styled from "styled-components";

import heroBgLeft from '../../assets/images/home/hero-bg-left.svg';
import heroBgRight from '../../assets/images/home/hero-bg-right.svg';

import Navbar from '../Navbar';
import HeroCarousel from "./HeroCarousel";

const HeaderSC = styled.header`
    background-image: url(${heroBgLeft}), url(${heroBgRight});
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    background-repeat: no-repeat;
    background-position: left bottom, right top;
    color: ${({ theme }) => theme.colors.white};

    min-height: 100vh;
    padding: .25em 5%;

    a {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const Header = () => {
    return (
        <HeaderSC>
            <Navbar />
            <HeroCarousel />
        </HeaderSC>
    )
}

export default Header;
import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from '../contexts/app';

const Button = styled.button`
  background: transparent;
  border: none;

  position: relative;
  z-index: 10;

  .ham__lines {
    width: 35px;
    height: 26.25px;
    position: relative;
    margin: 0 auto;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
  }

  .ham__line {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 1em;
    opacity: 1;
    left: 0;
    transition: all .25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:nth-child(1),
    &:nth-child(4) {
      left: ${({ $isMenuOpen }) => $isMenuOpen ? '50%' : 0};
      width: ${({ $isMenuOpen }) => $isMenuOpen ? 0 : '100%'};
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 11px;
    }
    
    &:nth-child(1) {
      top: ${({ $isMenuOpen }) => $isMenuOpen ? '11px' : 0};
    }

    &:nth-child(2) {
      transform: rotate(${({ $isMenuOpen }) => $isMenuOpen ? '45deg' : 0});
    }
    
    &:nth-child(3) {
      transform: rotate(${({ $isMenuOpen }) => $isMenuOpen ? '-45deg' : 0});
    }

    &:nth-child(4) {
      top: ${({ $isMenuOpen }) => $isMenuOpen ? '11px' : '22px'};
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

const HamburgerIcon = () => {
  const { state: { isMenuOpen }, dispatch } = useContext(AppContext);

  const toggleHamburgerMenu = () => {
    isMenuOpen ?
      dispatch({ type: 'CLOSE_MENU' }) :
      dispatch({ type: 'OPEN_MENU' })
  }

  return (
    <Button $isMenuOpen={isMenuOpen} onClick={toggleHamburgerMenu} aria-label='Menu'>
      <div className='ham__lines'>
        <span className='ham__line'></span>
        <span className='ham__line'></span>
        <span className='ham__line'></span>
        <span className='ham__line'></span>
      </div>
    </Button>
  )
}

export default HamburgerIcon
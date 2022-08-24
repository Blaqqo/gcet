import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import BSMSHeroBg from '../../../assets/images/solutions/bsms-hero-bg.jpg';
import BSMSOverview from '../../../assets/images/solutions/bsms-overview.jpg';

// Partners' logo
import alienVaultLogo from '../../../assets/images/partners/alien-vault.png';
import VMWareLogo from '../../../assets/images/partners/vmware.png';
import essentryLogo from '../../../assets/images/partners/essentry.png';
import cyberSocLogo from '../../../assets/images/partners/cyber-soc.png';


const Header = styled.header`
    background-image: linear-gradient(${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${BSMSHeroBg});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};

    min-height: min(100vh, 520px);
    padding: 2em 5%;

    display: grid;
    align-items: start;

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    @media (min-width: 1100px) {
      & {
        padding-left: 120px;
        padding-right: 120px;
      }
    }
`;

const Main = styled.main`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Overview = styled.section`
  margin: 3em 5%;

  display: flex;
  flex-direction: column;
  gap: 2em calc(2em + 5vw);

  .overview__heading {
    border-top: 1.2px solid currentColor;

    color: ${({ theme }) => theme.colors.mediumBlue};
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
    padding-top: .25em;
  }

  .overview__right {
    line-height: 2;

    > * {
      margin-bottom: 1.5em;
    }
  }

  @media (min-width: 800px) {
    & {
      flex-direction: row;
    }
    
    .overview__left,
    .overview__right {
      flex: 1;
    }

    .overview__left {
      max-width: 440px;
    }

    .overview__right {
      max-width: 700px;
    }
  }

  @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const Partners = styled.section`
    margin: 5em 5% 13em;

    .partners__heading {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
    }

    .partners__logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.5em;
      
      margin-top: 3em;
    }

    .partners__logo-c {
        flex: max(calc(25% - 2.5em), 160px);
        height: 100px;
        
        display: grid;
        place-items: center;
    }

    .partners__logo {
        box-shadow: 0px 4px 4px rgba(3, 169, 244, 0.11);
        border-radius: .625em;
        height: 100%;
        width: 100%;
        max-width: 160px;
        
        overflow: hidden;
        object-fit: scale-down;
        padding: .75em;
    }

    @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const BSMS = () => {

  return (
    <>
      <Header>
        <Navbar />

        <h1>
          Business Service <br />
          Management Solutions
        </h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={BSMSOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              The goal of every IT Service Management framework is to ensure that the right processes, people and technology are in place so
              that the organization can meet its business goals.
            </p>
            <p>
              Transform your "call center" into an indispensable business centric service support provider. IT "request and support"
              organizations are redefining their core mission to assist the business in driving to new standards, while realizing their goals
              through an evolution of process efficiency, cost management, and automation.
            </p>
          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c"><img className='partners__logo' src={alienVaultLogo} alt="Alien Vault logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={VMWareLogo} alt="VMWare logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={essentryLogo} alt="Essentry logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={cyberSocLogo} alt="CyberSoc logo" /></div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default BSMS;
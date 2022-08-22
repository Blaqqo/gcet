import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import useCloseMenu from '../../../hooks/useCloseMenu';

import ENSHeroBg from '../../../assets/images/solutions/ens-hero-bg.jpg';
import ENSOverview from '../../../assets/images/solutions/ens-overview.jpg';

// Partners' logo
import juniperNetworksLogo from '../../../assets/images/partners/juniper-networks.png';
import ciscoLogo from '../../../assets/images/partners/cisco.png';
import sophosLogo from '../../../assets/images/partners/sophos.png';



const Header = styled.header`
    background-image: url(${ENSHeroBg}), linear-gradient(${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
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

const ENS = () => {
  useCloseMenu();

  return (
    <>
      <Header>
        <Navbar />

        <h1>
          Enterprise Networking <br />
          Solution
        </h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={ENSOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              Enterprise Networks Solutions help you accelerate innovation, reduce cost and complexity, and enhance security and benefits from
              mobility. This provides customers provides fast and reliable connectivity for end users as well as applications.
            </p>
            <p>
              Applications are increasingly more distributed in the modern network and simplified networking and security across wired and
              wireless infrastructure is a business imperative. Also helps employees and machines communicate, share files, access systems, and
              analyze the performance of an IT environment that drives business operations.
            </p>
            <p>Enterprise networks are configured to connect a limited number of authorized systems, apps, and individuals.</p>

          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c"><img className='partners__logo' src={juniperNetworksLogo} alt="Juniper Networks logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={ciscoLogo} alt="Cisco logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={sophosLogo} alt="Sophos logo" /></div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default ENS;
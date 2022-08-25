import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import EESSHeroBg from '../../../assets/images/solutions/eess-hero-bg.jpg';
import EESSOverview from '../../../assets/images/solutions/eess-overview.jpg';

// Partners' logo
import paloaltoNetworksLogo from '../../../assets/images/partners/paloalto-networks.png';
import fortinetLogo from '../../../assets/images/partners/fortinet.png';
import f5Logo from '../../../assets/images/partners/f5.png';
import ciscoLogo from '../../../assets/images/partners/cisco.png';
import barracudaLogo from '../../../assets/images/partners/barracuda.png';
import coreviewLogo from '../../../assets/images/partners/coreview.png';


const Header = styled.header`
    background-image: linear-gradient(${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${EESSHeroBg});

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
  
  strong {
    font-weight: 700;
  }

  .overview__heading {
    border-top: 1.2px solid currentColor;

    color: ${({ theme }) => theme.colors.mediumBlue};
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5em;
    padding-top: .25em;
  }

  .overview__right {
    line-height: 2.1;

    > * {
      margin-bottom: 1.5em;
    }
  }

  .overview__list {
    list-style: disc inside;
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
      min-height: 100px;
      
      display: grid;
      place-items: center;
    }

    .partners__link {
      box-shadow: 0px 4px 4px rgba(3, 169, 244, 0.11);
      border-radius: .625em;
      
      display: block;
      overflow: hidden;
      height: 100%;
      width: 100%;
      max-width: 160px;
      padding: .75em;
    }
    
    .partners__logo {
      height: 100%;
      width: 100%;
      
      object-fit: scale-down;
    }

    @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const EESS = () => {

  return (
    <>
      <Header>
        <Navbar />

        <h1>Enterprise Security Solutions <br />
          &amp; Services (ESSS)</h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={EESSOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              Our goal for this highly sensitive area is to provide security solutions across all levels of the IT Infrastructure from Network,
              Servers, Storage infrastructure to Application and Database.
            </p>
            <p>
              With our security solutions and services, we deliver end to end Information, Network, Data, process and people security for
              organizations of all types. Such products and services includes:
            </p>

            <ul className='overview__list'>
              <li>UTMs/NGFs/NGIPS</li>
              <li>Endpoint Security (antivirus / antimalware / antibot / Encryption)</li>
              <li>Gateway security solutions</li>
              <li>Events and log monitoring /management</li>
              <li>DB, App &amp; data encryption</li>
              <li>System &amp; user activity monitoring and management</li>
            </ul>
            <p>
              <strong>We help organizations secure, manage, monitor, or document what is important to them in very cost-effective manner.</strong>
            </p>
          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.paloaltonetworks.com/' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={paloaltoNetworksLogo} alt="Paloalto Networks logo" />
              </a>
            </div>
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.fortinet.com' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={fortinetLogo} alt="Fortinet logo" />
              </a>
            </div>
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.f5.com/' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={f5Logo} alt="f5 logo" />
              </a>
            </div>
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.cisco.com/c/en_dz/index.html' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={ciscoLogo} alt="Cisco logo" />
              </a>
            </div>
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.barracuda.com/' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={barracudaLogo} alt="Barracuda logo" />
              </a>
            </div>
            <div className="partners__logo-c">
              <a className='partners__link' href='https://www.coreview.com/' target='_blank' rel='noreferrer'>
                <img className='partners__logo' src={coreviewLogo} alt="Coreview logo" />
              </a>
            </div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default EESS;
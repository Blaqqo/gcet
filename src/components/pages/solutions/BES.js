import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import BESHeroBg from '../../../assets/images/solutions/bes-hero-bg.jpg';
import BESOverview from '../../../assets/images/solutions/bes-overview.jpg';

// Partners' logo
import BMCLogo from '../../../assets/images/partners/bmc.png';
import entuityLogo from '../../../assets/images/partners/entuity.png';
import infiniteBlueLogo from '../../../assets/images/partners/infinite-blue.png';
import manageEngineLogo from '../../../assets/images/partners/manage-engine.png';
import solarWindsLogo from '../../../assets/images/partners/solarwinds.png';
import forescoutLogo from '../../../assets/images/partners/forescout.png';
import coreViewLogo from '../../../assets/images/partners/coreview.png';



const Header = styled.header`
    background-image: linear-gradient(${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${BESHeroBg});
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
    margin: 7.5em 5% 12em;

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

const BES = () => {

  return (
    <>
      <Header>
        <Navbar />

        <h1>
          Business Enterprise <br />
          Software
        </h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={BESOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              Today's business needs to be Dynamic, Volatile and highly competitive not business as usual. To keep moving forward you need every
              affordable advantage to stay competitive, innovative, nimble and profitable while getting ready for tomorrow.
            </p>
            <p>
              Accomplishing this is about maintaining your organization's backbone, infrastructure and processes so they're up-to-date and ready
              to take you to the next plateau. It means ensuring that systems are highly efficient - maximizing the integration between value
              chain components - and implementing the right IT systems that ensure you getting the most value and collaboration from your internal
              and external resources.
            </p>
            <p>
              Great organizations know how important enterprise software is - and it's what helps them stay ready to innovate through any business
              cycle, far before their competition does. To take this on and receive the results you demand, you need a trusted and experienced IT
              partner (Global Concept Emerge Technologies (GCET)).
            </p>
          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c"><img className='partners__logo' src={BMCLogo} alt="BMS logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={entuityLogo} alt="Entuity logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={infiniteBlueLogo} alt="Infinite Blue logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={manageEngineLogo} alt="Manage Engine logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={solarWindsLogo} alt="Solarwinds logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={forescoutLogo} alt="Forescout logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={coreViewLogo} alt="Coreview logo" /></div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default BES;
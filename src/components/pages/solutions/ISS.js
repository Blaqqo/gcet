import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import ISSHeroBg from '../../../assets/images/solutions/iss-hero-bg.jpg';
import ISSOverview from '../../../assets/images/solutions/iss-overview.jpg';

// Partners' logo
import hewlettPackardEnterpriseLogo from '../../../assets/images/partners/hewlett-packard-enterprise.png';
import dellLogo from '../../../assets/images/partners/dell.png';
import brocadeLogo from '../../../assets/images/partners/brocade.png';
import netAppLogo from '../../../assets/images/partners/netapp.png';
import huaweiLogo from '../../../assets/images/partners/huawei.png';
import ciscoLogo from '../../../assets/images/partners/cisco.png';


const Header = styled.header`
    background-image: linear-gradient(${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${ISSHeroBg});
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

const ISS = () => {

  return (
    <>
      <Header>
        <Navbar />

        <h1>
          Infrastructure Solutions <br />
          &amp; Services (ISS)
        </h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={ISSOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              Legacy storage and protection methodologies are at the limits of their capabilities while budgets for new infrastructure are likewise
              limited. As a result, many enterprises have exhausted their alternatives to cost-effectively address these infrastructure challenges. We
              are offer infrastructure and data center operation across data asset management, Data Storage, Server orchestration and integration. Deploy
              business applications, data analytics, data and system virtualization, and cloud solutions faster using proven data center solutions.
              Experience superior scalability, simplified management, and streamlined operations. This will Increase your flexibility and interoperability
              with a programmable infrastructure built on open standards. Do all of this with less risk and lower costs.
            </p>
            <p>
              Every organization requires IT infrastructure to operate, we have partnered the best-in-class OEM providers to make sure that we can offer
              our customers those solutions that give their business the necessary agility to leap-frog competition while getting the best out of their
              investment and avoiding technology lock-in.
            </p>
          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c"><img className='partners__logo' src={hewlettPackardEnterpriseLogo} alt="Hewlett Packard Enterprise logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={dellLogo} alt="Dell logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={brocadeLogo} alt="Brocade logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={netAppLogo} alt="NetApp logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={huaweiLogo} alt="Huawei logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={ciscoLogo} alt="Cisco logo" /></div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default ISS;
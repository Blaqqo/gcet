import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import useCloseMenu from '../../../hooks/useCloseMenu';

import CMSHeroBg from '../../../assets/images/solutions/cms-hero-bg.jpg';
import CMSOverview from '../../../assets/images/solutions/cms-overview.jpg';

// Partners' logo
import AWSLogo from '../../../assets/images/partners/aws.png';
import azureLogo from '../../../assets/images/partners/azure.png';
import citrixLogo from '../../../assets/images/partners/citrix.png';
import manageEngineLogo from '../../../assets/images/partners/manage-engine.png';


const Header = styled.header`
    background-image: linear-gradient(${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${CMSHeroBg});
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

const CMS = () => {
  useCloseMenu();

  return (
    <>
      <Header>
        <Navbar />

        <h1>
          Cloud and Mobile <br />
          Solutions
        </h1>
      </Header>
      <Main>
        <Overview>
          <div className='overview__left'>
            <h2 className='overview__heading'>Overview</h2>
            <img src={CMSOverview} alt="" />
          </div>
          <div className='overview__right'>
            <p>
              We provide private cloud offerings for customers that have the supported Infrastructure in place and provide public cloud support
              for customers with offsite infrastructure needs.
            </p>
            <p>
              Under cloud solutions, we will provide self-service, service catalogues, automation and orchestration type of solutions using
              industry-leading technologies to achieve a flexible solution that will drive maximum customer benefits at very reasonable costs.
            </p>
            <p>
              In addition to these solutions, we will provide other supporting solutions like cloud backup and recovery as well as Cloud Disaster
              Recovery solutions and the link if necessary. With our Cloud Solutions &amp; Services, we help organizations enable IT-as-a-Service
              (ITaaS) (for internal or external use), using; to the extent possible, their existing infrastructure. Also we believe that
              improving on SLA's, added productivity via self-service and service analytics will enable our customers to derive maximum
              utilization from their IT investment.
            </p>
            <p>
              As the world is going more and more mobile, we believe that the future of technology will be largely mobile - as already evident
              and organizations who want highly motivated staff and improved productivity will have no choice but to have the allowance and
              capability, to effectively implement long lasting BYOD (bring your own device) strategies and management technologies.
            </p>
            <p>
              We help organizations to empower their staff to be more productive and mix work and play to the benefit of the business and the
              freedom of staff by enabling bring your own device 'BYOD' capabilities. Organizations can exploit mobile device &amp; application
              management to the benefit of their business. We are well positioned to help organizations advance in the mobile era.
            </p>
            <p>
              We strongly believe we will drive differentiation in this space, by providing cost effective mobile application and mobile device
              management solutions and services to help organizations cope in the "new" world.
            </p>
          </div>
        </Overview>
        <Partners>
          <h2 className='partners__heading'>Our Partners</h2>

          <div className="partners__logos">
            <div className="partners__logo-c"><img className='partners__logo' src={AWSLogo} alt="AWS logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={azureLogo} alt="Azure logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={citrixLogo} alt="Citrix logo" /></div>
            <div className="partners__logo-c"><img className='partners__logo' src={manageEngineLogo} alt="Manage Engine logo" /></div>
          </div>
        </Partners>
      </Main>
      <Footer />
    </>
  )
}

export default CMS;
import styled from 'styled-components';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { convertHexToRgba } from '../../../utils/convertHexToRgba';

import useCloseMenu from '../../../hooks/useCloseMenu';

import ITAdvisoryHeroBg from '../../../assets/images/services/it-advisory-hero-bg.jpg';
import ITAdvisoryOverview from '../../../assets/images/services/it-advisory-overview.jpg';

// Partners' logo
import HPLogo from '../../../assets/images/partners/hp.png';
import dellLogo from '../../../assets/images/partners/dell.png';
import nimbleStorageLogo from '../../../assets/images/partners/nimble-storage.png';
import netAppLogo from '../../../assets/images/partners/netapp.png';
import veeamLogo from '../../../assets/images/partners/veeam.png';
import barracudaLogo from '../../../assets/images/partners/barracuda.png';
import coreViewLogo from '../../../assets/images/partners/coreview.png';
import commVaultLogo from '../../../assets/images/partners/commvault.png';
import VMWareLogo from '../../../assets/images/partners/vmware.png';
import ciscoLogo from '../../../assets/images/partners/cisco.png';
import sophosLogo from '../../../assets/images/partners/sophos.png';
import f5Logo from '../../../assets/images/partners/f5.png';
import microsoftLogo from '../../../assets/images/partners/microsoft.png';
import trendMicroLogo from '../../../assets/images/partners/trend-micro.png';
import forescoutLogo from '../../../assets/images/partners/forescout.png';
import fortinetLogo from '../../../assets/images/partners/fortinet.png';
import BCInTheCloudLogo from '../../../assets/images/partners/bc-in-the-cloud.png';
import alienVaultLogo from '../../../assets/images/partners/alien-vault.png';

const Header = styled.header`
    background-image: linear-gradient(${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}, ${({theme}) => convertHexToRgba(theme.colors.mediumBlue, .7)}), 
      url(${ITAdvisoryHeroBg});
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

    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin: .5em 0;
    }

    p {
        line-height: 1.5625;
    }
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
      margin: 1.5em 0;
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

const Request = styled.section`
    color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .9)};
    margin: 8em 5%;

    display: flex;
    flex-direction: column;
    gap: 2em;

    a {
        color: inherit;
    }

    .request__form {
        background: #F9FFFF;
        border: 1px solid rgba(0, 0, 4, 0.1);
        border-radius: 2.5em;
        padding: 3em;

        display: grid;
        gap: 1.5em 1em;
    }

    .form__input-wrapper {
        display: flex;
        flex-direction: column;
        gap: .5em;
    }

    .form__label {
        font-weight: 700;
    }

    .form__select,
    .form__input {
        background: transparent;
        border: 1px solid rgba(14, 11, 43, 0.2);
        border-radius: .25em;
        font-size: .875rem;
        padding: .5em 1em;
        width: 100%;
        
        &:focus {
            outline: 2px solid ${({ theme }) => theme.colors.darkGray};
        }
    }

    .form__input {

        /* Chrome/Opera/Safari */
        &::-webkit-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }

        /* Firefox 19+ */
        &::-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }

        /* IE 10+ */
        &:-ms-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }

        /* Firefox 18- */
        &:-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.black, .2)};
        }
    }

    .form__btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        border: none;
        border-radius: .5em;
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.125rem;
        margin-top: 1em;
        padding: .625em .875em;
    }

    @media (min-width: 700px) {
        & {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .request__text,
        .request__form {
            flex: 1;
        }

        .request__text {
            max-width: 500px;
        }

        .request__form {
            grid-template-columns: repeat(2, 1fr);
            max-width: 550px;
        }

        .form__input-wrapper:first-child,
        .form__btn {
            grid-column: 1 / -1;
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
    margin: 5em 5% 10em;
    
    .partners__heading {
        text-align: center;
    }
    
    .partners__logos {

        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: center;
        gap: 2em;
        
        margin-top: 3em;

    }
    
    .partners__logo-c {
        border-radius: .625em;
        box-shadow: 0px 4px 4px rgba(3, 169, 244, 0.11);
        flex: 145px;
        max-width: 160px;

        min-height: 100px;
        overflow: hidden;
        padding: .5em 0;
        
        display: grid;
        place-items: center;
    }

    @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const ItAdvisory = () => {
    useCloseMenu();

    return (
        <>
            <Header>
                <Navbar />
                <h1>IT Advisory and <br />
                    Managed Services</h1>
            </Header>
            <Main>
                <Overview>
                    <div className='overview__left'>
                        <h2 className='overview__heading'>Overview</h2>
                        <img src={ITAdvisoryOverview} alt="" />
                    </div>
                    <div className='overview__right'>
                        <p>
                            Under the Services portfolio, GCET provides consulting, managed and professional services to customers, first around
                            all our core solutions and then in specialized areas like security, automation, tuning, customization /special /
                            customer-specific archiving, processes, etc., that are not off the shelf.
                        </p>
                        <p>
                            With our experience from global IT organizations like Microsoft, Cisco, IBM, CheckPoint, Sophos, Barracuda and with our
                            ITIL, Project Management, architecture and other exposures we have gained over the years and our partnership with
                            individual and teams of experts around the world, we have a service that helps customers improve their operations from
                            process initiation, design and or optimization to architecture designs, integration into service management to solution
                            evaluation and documentation.
                        </p>
                    </div>
                </Overview>
                <Request>
                    <div className='request__text'>
                        <h2>Request for a Call Back</h2>
                        <p>
                            We are available through our open channels to review
                            your enquiry and respond at the shortest possible time.
                            Kindly fill the call back form to receive a call from
                            one of our experts, or chat with us online. You can as
                            well send us an email on <a href="mailto:info@gcetng.com">info@gcetng.com</a> and
                            you will receive our response within 24 hours.
                        </p>
                    </div>
                    <form className='request__form' method='POST'>
                        <div className='form__input-wrapper'>
                            <label className='form__label' htmlFor="discussion-type"
                            >Discussion with Support Team</label
                            >
                            <select
                                className='form__select'
                                name="discussion-type"
                                id="discussion-type"
                                required
                            >
                                <option value="eess">
                                    Enterprise Security Solutions &amp; Services
                                </option>
                            </select>
                        </div>
                        <div className='form__input-wrapper'>
                            <label className='form__label' htmlFor="first-name">First Name</label>
                            <input
                                className='form__input'
                                id="first-name"
                                type="text"
                                name="first-name"
                                placeholder="Type Here"
                                required
                            />
                        </div>
                        <div className='form__input-wrapper'>
                            <label className='form__label' htmlFor="last-name">Last Name</label>
                            <input
                                className='form__input'
                                id="last-name"
                                type="text"
                                name="last-name"
                                placeholder="Type Here"
                                required
                            />
                        </div>
                        <div className='form__input-wrapper'>
                            <label className='form__label' htmlFor="email">Email</label>
                            <input
                                className='form__input'
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Sample@xyz.com"
                                required
                            />
                        </div>
                        <div className='form__input-wrapper'>
                            <label className='form__label' htmlFor="phone-number">Phone Number</label>
                            <input
                                className='form__input' id="phone-number" type="tel" name="phone-number" placeholder="012345678" required />
                        </div>
                        <button className='form__btn' type="submit">Submit</button>
                    </form>
                </Request>
                <Partners>
                    <figure>
                        <figcaption>
                            <h2 className="partners__heading">Our Partners</h2>
                        </figcaption>
                        <div className='partners__logos'>
                            <div className='partners__logo-c'><img className='partners__logo' src={HPLogo} alt="HP logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={dellLogo} alt="Dell logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={nimbleStorageLogo} alt="Nimble Storage logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={netAppLogo} alt="NetApp logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={veeamLogo} alt="Veeam logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={barracudaLogo} alt="Barracudalogo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={coreViewLogo} alt="CoreView logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={commVaultLogo} alt="CommVault logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={VMWareLogo} alt="VMWare logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={ciscoLogo} alt="Cisco logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={sophosLogo} alt="Sophos logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={f5Logo} alt="f5 logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={microsoftLogo} alt="Microsoft logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={trendMicroLogo} alt="Trend Micro logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={forescoutLogo} alt="Forescout logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={fortinetLogo} alt="Fortinet logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={BCInTheCloudLogo} alt="BC in the Cloud logo" /></div>
                            <div className='partners__logo-c'><img className='partners__logo' src={alienVaultLogo} alt="AlienVault logo" /></div>
                        </div>
                    </figure>
                </Partners>
            </Main>
            <Footer />
        </>
    )
}

export default ItAdvisory;
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from '../Navbar';
import HeroCarousel from '../home/HeroCarousel';
import Footer from '../Footer';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

// Images
import aboutGcetImage from '../../assets/images/home/about-gcet-img.jpg';
import aboutGcetBg from '../../assets/images/home/about-gcet-bg.jpg';
import provenExperienceImage from '../../assets/images/home/proven-experience-img.jpg';

// Partners' logo
import HPLogo from '../../assets/images/partners/hp.png';
import dellLogo from '../../assets/images/partners/dell.png';
import nimbleStorageLogo from '../../assets/images/partners/nimble-storage.png';
import netAppLogo from '../../assets/images/partners/netapp.png';
import veeamLogo from '../../assets/images/partners/veeam.png';
import barracudaLogo from '../../assets/images/partners/barracuda.png';
import coreViewLogo from '../../assets/images/partners/coreview.png';
import commVaultLogo from '../../assets/images/partners/commvault.png';
import VMWareLogo from '../../assets/images/partners/vmware.png';
import ciscoLogo from '../../assets/images/partners/cisco.png';
import sophosLogo from '../../assets/images/partners/sophos.png';
import f5Logo from '../../assets/images/partners/f5.png';
import microsoftLogo from '../../assets/images/partners/microsoft.png';
import trendMicroLogo from '../../assets/images/partners/trend-micro.png';
import forescoutLogo from '../../assets/images/partners/forescout.png';
import fortinetLogo from '../../assets/images/partners/fortinet.png';
import BCInTheCloudLogo from '../../assets/images/partners/bc-in-the-cloud.png';
import alienVaultLogo from '../../assets/images/partners/alien-vault.png';

import heroBgLeft from '../../assets/images/home/hero-bg-left.svg';
import heroBgRight from '../../assets/images/home/hero-bg-right.svg';

const Header = styled.header`
    background-image: url(${heroBgLeft}), url(${heroBgRight});
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    background-repeat: no-repeat;
    background-position: left bottom, right top;
    color: ${({ theme }) => theme.colors.white};

    min-height: 100vh;
    padding: 2em 5%;

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

const Services = styled.section`
    margin: 6em 5%;

    .services__text {
        line-height: 1.5;
        margin: 0 auto;
        max-width: 800px;
    }
    
    .services__link {
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border-radius: .25em;
        display: block;
        font-weight: 700;
        margin: 2em auto;
        padding: .625em .875em;
        width: fit-content;
    }
    
    @media (min-width: 700px) {
        .services__text {
            text-align: center;
        }
    }

    @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const About = styled.section`
    background: url(${aboutGcetBg}) no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};
    padding: 3em 5%;

    p {
        margin: 1em 0;
    }
    
    .about__fig {
        display: flex;
        flex-direction: column;
        gap: calc(2em + 7.5vw);
    }

    .about__img {
        border-radius: 6.25em;
    }

    .about__link {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.lightBlue};
        border-radius: .25em;
        display: block;
        font-weight: 700;
        margin: 2em 0;
        padding: .625em .875em;
        width: fit-content;
    }

    @media (min-width: 700px) {
        .about__fig {
            flex-direction: row;
            align-items: flex-start;
        }

        .about__figc,
        .about__img-c {
            flex: 400px;
        }

        .about__figc {
            max-width: 600px;
        }

        .about__img-c {
            max-width: fit-content;
        }
    }

    
    @media (min-width: 1100px) {
        & {
            background-size: contain;

            padding-left: 120px;
            padding-right: 120px;
        }
    }
`;

const Experience = styled.section`
    color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .9)};
    margin: 5em 5%;

    .experience__heading {
        margin: .5em 0;
    }
    
    .experience__fig {
        display: flex;
        flex-direction: column;
        column-gap: calc(2em + 5vw);
    }
    
    .experience__img-c {
        max-width: 610px;
    }
    
    .experience__figc {
        max-width: 500px;
    }

    .experience__br {
        display: none;
    }
        
    @media (min-width: 700px) {
        .experience__fig {
            flex-direction: row;
            align-items: center;
        }

        .experience__img-c,
        .experience__figc {
            flex: 1;
        }

        .experience__br {
            display: block;
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

const Home = () => {

    return (
        <>
            <Header>
                <Navbar />
                <HeroCarousel />
            </Header>

            <Main>
                <Services>
                    <div className='services__text'>
                        <h2>What we do Differently</h2>
                        <p>
                            Global Concept Emerge Technologies Limited is a team of
                            infrastructure, network &amp; security certified experts and
                            specialists who deliver IT solutions that are transparent,
                            flexible and robust enough to drive customers'
                            organizational and business goals.
                        </p>

                        <Link className='services__link' to='/consultancy'>Get Consultancy</Link>
                    </div>
                </Services>
                <About>
                    <figure className='about__fig'>
                        <figcaption className='about__figc'>
                            <h2>
                                Know About <abbr title="Global Concept Emerge Technologies">GCET</abbr>
                            </h2>
                            <p>
                                Global Concept Emerge Technologies Limited is an IT
                                Solutions delivery company incorporated under the
                                Companies and Allied Matters Act 1990, to undertake
                                and provide various information technology, as well
                                as advisory services to all sectors of the Nigerian
                                economy including Government departments &amp; as well
                                as educational institutions.
                            </p>
                            <p>
                                As certified technology company with interest in
                                carefully tailored Information Technology Solutions,
                                we are geared solely towards Consulting, Enterprise
                                solutions architecture, Service delivery and
                                implementation of both Networks, Security and
                                Infrastructure.
                            </p>
                            <Link className='about__link' to='/'>About Us</Link>
                        </figcaption>
                        <div className="about__img-c">
                            <img className='about__img' src={aboutGcetImage} alt="" />
                        </div>
                    </figure>
                </About>
                <Experience>
                    <figure className='experience__fig'>
                        <div className="experience__img-c">
                            <img className='experience__img' src={provenExperienceImage} alt="" />
                        </div>
                        <figcaption className='experience__figc'>
                            <h2 className='experience__heading'>Our 21 Years of <br className="experience__br" /> Proven Experience</h2>
                            <p>
                                Our promise to you is this; From the general to the
                                more specific solutions, we will help you do the
                                most with the least required, while making the
                                Complex Look Simple.
                            </p>
                        </figcaption>
                    </figure>
                </Experience>
                <Request id='request'>
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
                            <div className='partners__logo-c'>
                                <a href='https://www.hp.com/emea_africa-en/home.html' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={HPLogo} alt="HP logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.dell.com' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={dellLogo} alt="Dell logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.hpe.com/us/en/storage/nimble.html' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={nimbleStorageLogo} alt="Nimble Storage logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.netapp.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={netAppLogo} alt="NetApp logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.veeam.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={veeamLogo} alt="Veeam logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.barracuda.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={barracudaLogo} alt="Barracudalogo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.coreview.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={coreViewLogo} alt="CoreView logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.commvault.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={commVaultLogo} alt="CommVault logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.vmware.com/company.html' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={VMWareLogo} alt="VMWare logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.cisco.com/c/en_dz/index.html' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={ciscoLogo} alt="Cisco logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.sophos.com/en-us/company' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={sophosLogo} alt="Sophos logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.f5.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={f5Logo} alt="f5 logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.microsoft.com' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={microsoftLogo} alt="Microsoft logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.trendmicro.com' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={trendMicroLogo} alt="Trend Micro logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.forescout.com/company/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={forescoutLogo} alt="Forescout logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://www.fortinet.com' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={fortinetLogo} alt="Fortinet logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://bcinthecloud.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={BCInTheCloudLogo} alt="BC in the Cloud logo" />
                                </a>
                            </div>
                            <div className='partners__logo-c'>
                                <a href='https://cybersecurity.att.com/' target='_blank' rel='noreferrer'>
                                    <img className='partners__logo' src={alienVaultLogo} alt="AlienVault logo" />
                                </a>
                            </div>
                        </div>
                    </figure>
                </Partners>
            </Main>

            <Footer />
        </>
    )
}

export default Home
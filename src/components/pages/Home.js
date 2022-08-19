import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

import { convertHexToRgba } from '../../utils/convertHexToRgba';


// Images
import aboutGcetImage from '../../assets/images/home/about-gcet-img.jpg';
import aboutGcetBg from '../../assets/images/home/about-gcet-bg.jpg';
import provenExperienceImage from '../../assets/images/home/proven-experience-img.jpg';

// Partners' logo
import HPLogo from '../../assets/images/partners/hp-logo.png';
import dellLogo from '../../assets/images/partners/dell-logo.png';
import nimbleStorageLogo from '../../assets/images/partners/nimble-storage-logo.png';
import netAppLogo from '../../assets/images/partners/netapp-logo.png';
import veeamLogo from '../../assets/images/partners/veeam-logo.png';
import barracudaLogo from '../../assets/images/partners/barracuda-logo.png';
import coreViewLogo from '../../assets/images/partners/coreview-logo.png';
import commVaultLogo from '../../assets/images/partners/commvault-logo.png';
import VMWareLogo from '../../assets/images/partners/vmware-logo.png';
import ciscoLogo from '../../assets/images/partners/cisco-logo.png';
import sophosLogo from '../../assets/images/partners/sophos-logo.png';
import f5Logo from '../../assets/images/partners/f5-logo.png';
import microsoftLogo from '../../assets/images/partners/microsoft-logo.png';
import trendMicroLogo from '../../assets/images/partners/trend-micro-logo.png';
import forescoutLogo from '../../assets/images/partners/forescout-logo.png';
import fortinetLogo from '../../assets/images/partners/fortinet-logo.png';
import BCInTheCloudLogo from '../../assets/images/partners/bc-in-the-cloud-logo.png';
import alienVaultLogo from '../../assets/images/partners/alien-vault-logo.png';


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
    margin: 3em 5%;

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
            align-items: center;
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
`;

const Request = styled.section`
    color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .9)};
    margin: 5em 5%;

    display: flex;
    flex-direction: column;
    gap: 2em;

    .request__form {
        background: #F9FFFF;
        border: 1px solid rgba(0, 0, 4, 0.1);
        border-radius: 2.5em;
        padding: 3em;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5em 1em;
    }

    .form__input-wrapper:first-child,
    .form__btn {
        grid-column: 1 / -1;
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
        border: 1px solid rgba(14, 11, 43, 0.2);
        border-radius: .25em;
        font-size: .875rem;
        padding: .5em 1em;
    }

    .form__select {

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
            flex: 1 1;
        }

        .request__text {
            max-width: 500px;
        }

        .request__form {
            max-width: 550px;
        }
    }
`;

const Partners = styled.section`
    margin: 5em 5% 10em;

    .partners__heading {
        text-align: center;
    }
    
    .partners__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
        grid-auto-rows: 1fr;
        gap: 2em;
        
        margin-top: 3em;
    }

    .partners__img-c {
        border-radius: .625em;
        box-shadow: 0px 4px 4px rgba(3, 169, 244, 0.11);

        height: 100%;
        width: 100%;
        overflow: hidden;
        
        display: grid;
        place-items: center;
    }
    
    .partners__img {

    }
`;

const Home = () => {
    return (
        <>
            <Header />

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

                        <Link className='services__link' to='/'>Get Consultancy</Link>
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
                    <form className='request__form'>
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
                                <option value="">
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
                        <div className='partners__grid'>
                            <div className='partners__img-c'><img className='partners__img' src={HPLogo} alt="HP logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={dellLogo} alt="Dell logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={nimbleStorageLogo} alt="Nimble Storage logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={netAppLogo} alt="NetApp logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={veeamLogo} alt="Veeam logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={barracudaLogo} alt="Barracudalogo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={coreViewLogo} alt="CoreView logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={commVaultLogo} alt="CommVault logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={VMWareLogo} alt="VMWare logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={ciscoLogo} alt="Cisco logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={sophosLogo} alt="Sophos logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={f5Logo} alt="f5 logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={microsoftLogo} alt="Microsoft logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={trendMicroLogo} alt="Trend Micro logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={forescoutLogo} alt="Forescout logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={fortinetLogo} alt="Fortinet logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={BCInTheCloudLogo} alt="BC in the Cloud logo" /></div>
                            <div className='partners__img-c'><img className='partners__img' src={alienVaultLogo} alt="AlienVault logo" /></div>
                        </div>
                    </figure>
                </Partners>
            </Main>

            <Footer />
        </>
    )
}

export default Home
import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

// images
import heroImg from '../../assets/images/about/hero-img.png';
import aboutSectionImg from '../../assets/images/about/about-section-img.jpg';
import valuePassion from '../../assets/images/about/passion.svg';
import valueFocus from '../../assets/images/about/customer-focus.svg';
import valueIntegrity from '../../assets/images/about/integrity.svg';
import valueEffectiveness from '../../assets/images/about/effectiveness.svg';
import approachBg from '../../assets/images/about/approach-bg.jpg';
import visionBg from '../../assets/images/about/vision-bg.jpg';
import processBg from '../../assets/images/about/process-bg.jpg';

import MDImg from '../../assets/images/about/md.jpg';
import COOImg from '../../assets/images/about/coo.jpg';
import faceBookIcon from '../../assets/images/icons/facebook.svg';
import twitterIcon from '../../assets/images/icons/twitter.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';


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

    .hero__fig {
        padding: 2em 0;
        
        display: flex;
        flex-direction: column;
        column-gap: 2em;
    }

    .hero__heading {
        font-size: 2.75rem;
        font-weight: 800;
        margin: .25em 0;
    }

    .hero__p {
        font-size: 1.125rem;
        line-height: 1.5625;
    }

    @media (min-width: 800px) {
        .hero__fig {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 2em;
        }

        .hero__figc,
        .hero__img-c {
            flex: 300px;
            max-width: 600px;
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

const Intro = styled.section`
    margin: 4em 5%;
    text-align: center;
    
    .intro__text {
        max-width: 750px;
        margin: 0 auto;
    }
`;

const AboutSC = styled.section`
    margin: 6em 5%;

    .about__heading {
        margin: .5em 0;
    }
    
    .about__fig {
        display: flex;
        flex-direction: column;
        gap: 2em;
        justify-content: space-between;
    }
    
    .about__img-c {
        max-width: 550px;
    }
    
    .about__img {
        border-radius: 6.25em;
        width: 100%;
    }
    
    .about__figc {
        max-width: 600px;
    }

    .about__p {
        margin: 1.25em 0;
    }
    
    @media (min-width: 800px) {
        .about__fig {
            flex-direction: row;
            align-items: center;
        }

        .about__img-c,
        .about__figc {
            flex: 1;
        }
    }
`;

const Values = styled.section`
    margin: 4em 5%;
    
    .values__heading {
        text-align: center;
    }

    .values__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2em;

        margin: 3em auto 6em;
        max-width: 950px;
    }

    .value {
        min-width: 170px;

    }

    .value__fig {
        border-radius: .625em;
        box-shadow: 2px 4px 6px 5px rgba(69, 99, 135, 0.1);
        padding: 1.75em 1em;

        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;

    }
    
    .value__figc {
        font-weight: 700;
    }

    .articles {
        display: grid;
        grid-auto-rows: 1fr;
        gap: 2em;
        justify-content: center;
    }

    .article {
        background-repeat: no-repeat;
        background-size: cover;
        color: ${({ theme }) => theme.colors.white};
        padding: 1em;

        &--approach {
            background-image: linear-gradient(to top, #456387 67.55%, rgba(34, 78, 132, 0.3) 100%), url(${approachBg});
        }
    
        &--vision {
            background-image: linear-gradient(to top, #456387 67.55%, rgba(34, 78, 132, 0.3) 100%), url(${visionBg});
        }
        
        &--process {
            background-image: linear-gradient(to top, #456387 67.55%, rgba(34, 78, 132, 0.3) 100%), url(${processBg});
        }
            
    }

    .article__heading {
        font-size: 1.5625rem;
        margin: 1em 0;
        text-align: center;
    }

    .article__p {
        margin: 1em 0;
    }

    @media (min-width: 409px) {
        .values__list {
            justify-content: space-between;
        }

        .value:nth-child(even) {
            margin-top: 5em;

        }
    }
    
    @media (min-width: 700px) {
        .articles {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }
`;

const Team = styled.section`
    margin: 7.5em 5%;
    
    .team__heading {
        margin: 2em 0;
        text-align: center;
    }
    
    .team__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2em;

        max-width: 880px;
        margin: 0 auto;
        text-align: center;
    }

    .teammate {
        flex: 200px;
        max-width: 360px; 
    }

    .teammate__fig {
        background: ${({ theme }) => theme.colors.mediumBlue};
        border-radius: .625em;
        overflow: hidden;
    }

    .teammate__figc {            
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        padding: .75em 0;
    }

    .teammate__name {
        font-weight: 600;
    }

    .teammate__role {
        margin: .35em 0 .75em;
    }

    .teammate__socials {
        display: flex;
        justify-content: center;
        gap: .75em;
    }


    .dialog {
        background: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: 1.25em;
        max-width: 650px;
        max-height: 80vh;
        overflow-y: auto;
        padding: 1.5em;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &::backdrop {
            background: ${({ theme }) => convertHexToRgba(theme.colors.mediumBlue, .5)};
        }
    }

    .dialog__close-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.125rem;
        outline: none;

        display: block;
        margin-left: auto;
    }

    .dialog__fig {
        display: flex;
        align-items: center;
        gap: 2em;

        margin: .25em 0;
    }

    .dialog__img {
        max-width: 175px;
    }

    .dialog__name {
        font-size: 1.375rem;
        font-weight: 700;
    }

    .dialog__job-role {
        font-size: 1.125rem;
        font-weight: 600;
    }

    .dialog__heading {
        border-bottom: 3px solid ${({ theme }) => theme.colors.mediumBlue};
        font-size: 1.125rem;
        margin: 1.25em 0;
        max-width: fit-content;
        padding-bottom: .25em;
    }

    .dialog__p {
        line-height: 1.5;
        margin: 1em 0;
    }
`;

const About = () => {
    const [displayMdModal, setDisplayMdModal] = useState(false);
    const [displayCooModal, setDisplayCooModal] = useState(false);

    const mdDialogRef = useRef(null);
    const cooDialogRef = useRef(null);


    const showMdModal = (event) => {
        if (event.target.nodeName !== 'IMG' && event.target.nodeName !== 'A') {
            setDisplayMdModal(true);
        }
    }

    const hideMdModal = () => {
        setDisplayMdModal(false);
    }

    const showCooModal = (event) => {
        if (event.target.nodeName !== 'IMG' && event.target.nodeName !== 'A') {
            setDisplayCooModal(true);
        }
    }

    const hideCooModal = () => {
        setDisplayCooModal(false);
    }

    useEffect(() => {
        const dialog = mdDialogRef.current;

        displayMdModal ?
            dialog.showModal() :
            dialog.close();


        return () => dialog.close();
    }, [displayMdModal]);

    useEffect(() => {
        const dialog = cooDialogRef.current;

        displayCooModal ?
            dialog.showModal() :
            dialog.close();


        return () => dialog.close();
    }, [displayCooModal]);

    return (
        <>
            <Header>
                <Navbar />

                <figure className="hero__fig">
                    <figcaption className="hero__figc">
                        <h1 className='hero__heading'>We simplify complexity</h1>
                        <p className="hero__p">
                            We help businesses build their IT organisation from the heart of growth and innovation to increased all-round efficiency.
                        </p>
                    </figcaption>
                    <div className="hero__img-c">
                        <img src={heroImg} alt="" className="hero__img" />
                    </div>
                </figure>
            </Header>
            <Main>
                <Intro>
                    <div className="intro__text">
                        <h2 className='intro__heading'>Let's Introduce <abbr title="Global Concept Emerge Technologies">GCET</abbr></h2>
                        <p className='intro__p'>
                            Global Concept Emerge Technologies Limited is an IT Solutions delivery company incorporated
                            under the Companies and Allied Matters Act 1990, to undertake and provide various information technology,
                            as well as advisory services to all sectors of the Nigerian economy including Government departments &amp;
                            as well as educational institutions.
                        </p>
                    </div>
                </Intro>
                <AboutSC>
                    <figure className="about__fig">
                        <figcaption className="about__figc">
                            <h2 className='about__heading'>Who we are</h2>
                            <p className='about__p'>
                                As certified technology company with interest in carefully tailored Information Technology Solutions,
                                we are geared solely towards Consulting, Enterprise solutions architecture, Service delivery and implementation
                                of both Networks, Security and Infrastructure.
                            </p>
                            <p className='about__p'>
                                Enterprise customer performance and success is significantly impacted by IT infrastructure and management
                                capabilities. IT and Infrastructure service management services have undergone a significant change and
                                increasingly in modern day strategy. Our teams are poised on delivering business value-add solutions to improved
                                efficiency at reduced costs.
                            </p>
                            <p className='about__p'>
                                Our capability and competency lie in our unbiased approach to simplify complex situation into a milestone success,
                                professionalism, ability to standby our words and our expertise are seasoned engineers who have successfully
                                delivered, deployed and managed several enterprise solutions locally and international on IT projects.
                            </p>
                        </figcaption>

                        <div className="about__img-c">
                            <img src={aboutSectionImg} alt="" className="about__img" />
                        </div>
                    </figure>
                </AboutSC>
                <Values>
                    <h2 className='values__heading'>Core Values</h2>
                    <ul className='values__list'>
                        <li className='value'>
                            <figure className='value__fig'>
                                <img src={valuePassion} alt="" />
                                <figcaption className='value__figc'>Passion</figcaption>
                            </figure>
                        </li>
                        <li className='value'>
                            <figure className='value__fig'>
                                <img src={valueFocus} alt="" />
                                <figcaption className='value__figc'>Customer focus</figcaption>
                            </figure>
                        </li>
                        <li className='value'>
                            <figure className='value__fig'>
                                <img src={valueIntegrity} alt="" />
                                <figcaption className='value__figc'>Integrity</figcaption>
                            </figure>
                        </li>
                        <li className='value'>
                            <figure className='value__fig'>
                                <img src={valueEffectiveness} alt="" />
                                <figcaption className='value__figc'>Effectiveness</figcaption>
                            </figure>
                        </li>
                    </ul>

                    <div className='articles'>
                        <article className='article article--approach'>
                            <h3 className='article__heading'>Our Approach</h3>
                            <p className='article__p'>
                                At <abbr title="Global Concept Emerge Technologies">GCET</abbr> Limited, our goal is to simplify complexity to the advantage of our clients where we keep researching
                                IT solutions for current and future needs to ensure customers business model evolves with time.
                            </p>
                            <p className='article__p'>
                                This makes us to provide complete solutions dedicated to support our client's business KPIs in order to gain
                                speed, accuracy and efficiency. We enable businesses to transform into digital enterprises for the ultimate
                                competitive advantage. Making the complex things look simple is our approach and this enlist GCET Limited as
                                new breed system integrator.
                            </p>
                        </article>
                        <article className='article article--vision'>
                            <h3 className='article__heading'>Our Vision</h3>
                            <p className='article__p'>
                                Providing bespoke and secure solutions that drive business innovation, agility and customer satisfaction.
                            </p>
                        </article>
                        <article className='article article--process'>
                            <h3 className='article__heading'>Our Process</h3>
                            <p className='article__p'>
                                At <abbr title="Global Concept Emerge Technologies">GCET</abbr>, we try to work with the people who are directly involved in the process. Their ideas reveal new approaches, problem
                                solving mentality that allow us to buy into change as culture for world class analysis, evaluation and recommendation. We listen
                                and conduct impact analysis to understand full effect of clients' needs to spot possible risks and points of failures which we
                                apply professional remediation to achieve clients expected outcome. In addressing these demands, organizations are looking for
                                new ways to consolidate IT resources—whether in the data center or cloud. The increasing demand is how to simplify IT environment
                                and pave way for innovation. <abbr title="Global Concept Emerge Technologies">GCET</abbr> Limited provides following solutions as services to help our clients succeed and exceed their
                                expectations.
                            </p>
                        </article>
                    </div>
                </Values>
                <Team>
                    <h2 className='team__heading'>Our Team</h2>
                    <ul className='team__list'>
                        <li onClick={showMdModal} className='teammate'>
                            <figure className='teammate__fig'>
                                <img className='teammate__img' src={MDImg} alt="GCET Managing Director" />
                                <figcaption className='teammate__figc'>
                                    <h3 className='teammate__name' onClick={showMdModal}>Tayo Olubanke</h3>
                                    <p className='teammate__role'>Managing Director</p>
                                    <div className='teammate__socials'>
                                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img src={faceBookIcon} alt="Facebook icon" title='Facebook' /></a>
                                        <a href="https://www.twitter.com" target='_blank' rel="noreferrer"><img src={twitterIcon} alt="Twitter icon" title='Twitter' /></a>
                                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><img src={instagramIcon} alt="Instagram icon" title='Instagram' /></a>
                                        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                        <li onClick={showCooModal} className='teammate'>
                            <figure className='teammate__fig'>
                                <img className='teammate__img' src={COOImg} alt="GCET COO" />
                                <figcaption className='teammate__figc'>
                                    <h3 className='teammate__name' onClick={showCooModal}>Solomon Awosina</h3>
                                    <p className='teammate__role'><abbr title="Chief Operating Officer">COO</abbr> / <abbr title="Chief Technology Officer">CTO</abbr></p>
                                    <div className='teammate__socials'>
                                        <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><img src={faceBookIcon} alt="Facebook icon" title='Facebook' /></a>
                                        <a href="https://www.twitter.com" target='_blank' rel="noreferrer"><img src={twitterIcon} alt="Twitter icon" title='Twitter' /></a>
                                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer"><img src={instagramIcon} alt="Instagram icon" title='Instagram' /></a>
                                        <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>

                    <dialog ref={mdDialogRef} className='dialog'>
                        <button className='dialog__close-btn' onClick={hideMdModal}>
                            <FontAwesomeIcon icon='fa-solid fa-xmark' />
                        </button>
                        <figure className='dialog__fig'>
                            <img className='dialog__img' src={MDImg} alt="GCET Managing Director" />
                            <figcaption>
                                <p className='dialog__name'>Tayo Olubanke</p>
                                <p className='dialog__job-role'>Managing Director</p>
                            </figcaption>
                        </figure>

                        <h3 className='dialog__heading'>Background</h3>
                        <p className='dialog__p'>
                            Tayo is an Applied Geophysics graduate from Federal University of Technology Akure. He is a result oriented I.T. Consultant
                            with extensive experience in designing IT cost saving solutions that empower organizations to meet business KPIs.
                        </p>
                        <p className='dialog__p'>
                            His experience in pre-sales spans a wide area of IT with primary area of focus being infrastructure solutions (both software
                            and hardware) - Enterprise Storage Systems, Cloud, Big Data, Business Intelligence /Data Warehouse, Backup and Recovery
                            Solutions, Business Continuity Solutions, ILM (information life-cycle Management).
                        </p>
                        <p className='dialog__p'>
                            He is also a successful Product Manager for BMC Software, Commvault, Citrix and Nimble Storage. The very first Nimble Storage
                            product manager in Nigeria and West Africa, Tayo is a certified enterprise storage expert, who has over 9 years' experience
                            working with enterprises within and outside Nigeria in Telecoms, Banks, Oil &amp; Gas and the Government Sector.
                        </p>
                        <p className='dialog__p'>
                            He has lead various teams in successful installation, configuration, deployment, upgrade and migration of many enterprise
                            storage systems.
                        </p>
                    </dialog>

                    <dialog ref={cooDialogRef} className='dialog'>
                        <button className='dialog__close-btn' onClick={hideCooModal}>
                            <FontAwesomeIcon icon='fa-solid fa-xmark' />
                        </button>
                        <figure className='dialog__fig'>
                            <img className='dialog__img' src={COOImg} alt="GCET COO" />
                            <figcaption>
                                <p className='dialog__name'>Solomon Awosina</p>
                                <p className='dialog__job-role'><abbr title="Chief Operating Officer">COO</abbr> / <abbr title="Chief Technology Officer">CTO</abbr></p>
                            </figcaption>
                        </figure>

                        <h3 className='dialog__heading'>Background</h3>
                        <p className='dialog__p'>
                            Solomon holds a Higher National Diploma in Electrical Electronics from Yaba College of Technology and BSc in Computer
                            Science. He is a Network and IT security Certified Professional with over twelve years' experience in design, configuration
                            and administration of different products and solutions.
                        </p>
                        <p className='dialog__p'>
                            Solomon has lead various teams in successful installation, configuration, deployment, upgrade and migration of devices and
                            network. His analytical skill garnered from his years of experience in the banking sector has been an asset in financial
                            analysis and justification for investment in technology.
                        </p>
                    </dialog>
                </Team>
            </Main>
            <Footer />
        </>
    )
}

export default About;
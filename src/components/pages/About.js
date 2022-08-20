import styled from 'styled-components';

import Navbar from '../Navbar';
import Footer from '../Footer';

import useCloseMenu from '../../hooks/useCloseMenu';

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

import mdImg from '../../assets/images/about/md.jpg';
import cooImg from '../../assets/images/about/coo.jpg';
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
    padding: 2em 0;

    .hero {
        
        &__fig {
            padding: 2em 5%;
            
            display: flex;
            flex-direction: column;
            align-content: center;
            column-gap: 2em;
        }

        &__heading {
            font-size: 2.75rem;
            font-weight: 800;
            margin: .25em 0;
        }

        &__p {
            font-size: 1.125rem;
            line-height: 1.5625;
        }

        @media (min-width: 800px) {
            &__fig {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                gap: 2em;
            }

            &__figc,
            &__img-c {
                flex: 300px;
                max-width: 600px;
            }
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

    .about {
        &__heading {
            margin: .5em 0;
        }
        
        &__fig {
            display: flex;
            flex-direction: column;
            gap: 2em;
            justify-content: space-between;
        }
        
        &__img-c {
            max-width: 550px;
        }
        
        &__img {
            border-radius: 6.25em;
            width: 100%;
        }
        
        &__figc {
            max-width: 600px;
        }

        &__p {
            margin: 1.25em 0;
        }
        
        @media (min-width: 800px) {
            &__fig {
                flex-direction: row;
                align-items: center;
            }

            &__img-c,
            &__figc {
                flex: 1;
            }
        }
    }
`;

const Values = styled.section`
    margin: 4em 5%;
    
    .values {
        
        &__heading {
            text-align: center;
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2em;

            margin: 3em auto 6em;
            max-width: 950px;
        }

       
    }

    .value {
        min-width: 170px;

        &__fig {
            border-radius: .625em;
            box-shadow: 2px 4px 6px 5px rgba(69, 99, 135, 0.1);
            padding: 1.75em 1em;

            display: flex;
            flex-direction: column;
            gap: 1.5em;
            align-items: center;

        }
        
        &__figc {
            font-weight: 700;
        }
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
        
        &__heading {
            font-size: 1.5625rem;
            margin: 1em 0;
            text-align: center;
        }

        &__p {
            margin: 1em 0;
        }

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
    text-align: center;

    .team {

        &__heading {
            margin: 2em 0;
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2em;

            max-width: 880px;
            margin: 0 auto;
        }

    }

    .teammate {
        flex: 200px;
        max-width: 360px;

        &__fig {
            background: ${({ theme }) => theme.colors.mediumBlue};
            border-radius: .625em;
            overflow: hidden;

        }

        &__figc {            
            color: ${({ theme }) => theme.colors.white};
            padding: .75em 0;
        }

        &__name {
            font-weight: 600;
        }

        &__role {
            margin: .35em 0 .75em;
        }

        &__socials {
            display: flex;
            justify-content: center;
            gap: .75em;
        }
    }
`;

const About = () => {
    useCloseMenu();

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
                        <li className='teammate'>
                            <figure className='teammate__fig'>
                                <img className='teammate__img' src={mdImg} alt="GCET Managing Director" />
                                <figcaption className='teammate__figc'>
                                    <h3 className='teammate__name'>Tayo Olubanke</h3>
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
                        <li className='teammate'>
                            <figure className='teammate__fig'>
                                <img className='teammate__img' src={cooImg} alt="GCET COO" />
                                <figcaption className='teammate__figc'>
                                    <h3 className='teammate__name'>Solomon Awosina</h3>
                                    <p className='teammate__role'>COO / CTO</p>
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
                </Team>
            </Main>
            <Footer />
        </>
    )
}

export default About;
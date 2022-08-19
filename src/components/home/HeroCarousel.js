import { Link } from "react-router-dom";

import styled from "styled-components";

import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { convertHexToRgba } from "../../utils/convertHexToRgba";

import heroImg1 from '../../assets/images/home/hero-img-1.jpg';
import heroImg2 from '../../assets/images/home/hero-img-2.jpg';
import heroImg3 from '../../assets/images/home/hero-img-3.jpg';

const SwiperSC = styled(Swiper)`
    margin-top: 4em;

    .swiper-pagination-bullet {
        background: ${({ theme }) => convertHexToRgba(theme.colors.white, .5)};
    }

    .swiper-pagination-bullet-active {
        background: ${({ theme }) => theme.colors.white};
    }

    /* .hero__slide {
        border: 1px solid red;
    } */

    .hero__fig {
        display: flex;
        flex-direction: column;
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

    .hero__link-btns {
        display: flex;
        gap: 1em;

        margin: 2em 0;
    }

    .hero__link-btn {
        border-radius: .25em;
        font-size: 1.125rem;
        font-weight: 600;
        padding: .625em .875em;

        &--consultancy {
            background: ${({ theme }) => theme.colors.lightBlue};
            color: ${({ theme }) => theme.colors.white};
        }

        &--call {
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }

    @media (min-width: 700px) {
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

const HeroCarousel = () => {
    return (
        <SwiperSC
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}>
            <SwiperSlide className="hero__slide">
                <figure className="hero__fig">
                    <figcaption className="hero__figc">
                        <h1 className="hero__heading">Grow Your Business</h1>
                        <p className="hero__p">
                            We help businesses build their IT organisation from the
                            heart of growth and innovation to increased all-round
                            efficiency.
                        </p>
                        <menu className="hero__link-btns">
                            <li>
                                <Link className='hero__link-btn hero__link-btn--consultancy' to='/'>Get Consultancy</Link>

                            </li>
                            <li>

                                <Link className='hero__link-btn hero__link-btn--call' to='/'>Quick Call Back</Link>
                            </li>
                        </menu>
                    </figcaption>
                    <div className="hero__img-c">
                        <img className="hero__img" src={heroImg1} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide className="hero__slide">
                <figure className="hero__fig">
                    <figcaption className="hero__figc">
                        <h1 className="hero__heading">Plan Your Dream</h1>
                        <p className="hero__p">
                            You have an IT roadmap, or have not developed one yet, we are here to help you build your IT dream from planning phase to full execution.
                        </p>
                        <menu className="hero__link-btns">
                            <li>
                                <Link className='hero__link-btn hero__link-btn--consultancy' to='/'>Get Consultancy</Link>

                            </li>
                            <li>

                                <Link className='hero__link-btn hero__link-btn--call' to='/'>Quick Call Back</Link>
                            </li>
                        </menu>
                    </figcaption>
                    <div className="hero__img-c">
                        <img className="hero__img" src={heroImg2} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
            <SwiperSlide className="hero__slide">
                <figure className="hero__fig">
                    <figcaption className="hero__figc">
                        <h1 className="hero__heading">Grow Your Business</h1>
                        <p className="hero__p">
                            We help businesses build their IT organisation from the
                            heart of growth and innovation to increased all-round
                            efficiency.
                        </p>
                        <menu className="hero__link-btns">
                            <li>
                                <Link className='hero__link-btn hero__link-btn--consultancy' to='/'>Get Consultancy</Link>

                            </li>
                            <li>

                                <Link className='hero__link-btn hero__link-btn--call' to='/'>Quick Call Back</Link>
                            </li>
                        </menu>
                    </figcaption>
                    <div className="hero__img-c">
                        <img className="hero__img" src={heroImg3} alt="" />
                    </div>
                </figure>
            </SwiperSlide>
        </SwiperSC>
    )
}

export default HeroCarousel;
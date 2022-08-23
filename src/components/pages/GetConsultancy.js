import styled from 'styled-components';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import heroBgLeft from '../../assets/images/home/hero-bg-left.svg';
import heroBgRight from '../../assets/images/home/hero-bg-right.svg';

import telegramIcon from '../../assets/images/icons/telegram.svg';
import hexagonsImg from '../../assets/images/contact/hexagons.png';

const Header = styled.header`
    background-image: url(${heroBgLeft}), url(${heroBgRight});
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    background-repeat: no-repeat;
    background-position: left bottom, right top;
    color: ${({ theme }) => theme.colors.white};

    min-height: 555px;
    padding: 2em 5%;

    display: grid;
    align-items: start;


    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em 35%;
    }
    
    .hero__heading {
        font-size: 2.25rem;
        margin: .5em 0;
    }

    .hero__p {
        line-height: 1.5;
    }

    .hero__question-mark {
        font-size: 6.25rem;
        font-weight: 700;
    }

    @media (min-width: 600px) {
        .hero {
            flex-direction: row;
        }

        .hero__text {
            max-width: 500px;
        }
    }

    @media (min-width: 1100px) {
      & {
        padding-left: 120px;
        padding-right: 120px;
      }
    }
`;

const FormSection = styled.section`
    margin: -5em auto 10em;
    
    .form-wrapper {
        
        border-radius: .625em;
        box-shadow: 0px 4px 4px rgba(15, 12, 40, 0.1);
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: stretch;
    }


    .form,
    .address-wrapper {
        flex: 1;
    }

    .form {
        background: ${({ theme }) => theme.colors.white};

        padding: 2em 3em 1em;
    }
    
    .form__inputs {
        display: grid;
        gap: 1.5em 1em;
    }

    .form__heading {
        font-size: 1.5rem;
        margin: .5em 0 1em;
    }

    .form__input-wrapper {
        display: flex;
        flex-direction: column;
        gap: .5em;

        &--textarea {
            grid-column: 1 / -1;
        }
    }

    .form__label {
        font-weight: 600;
    }

    .form__input {

        border: 1px solid #0E0B2B33;
        border-radius: .3125em;
        color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        font-size: .875rem;
        padding: .5em 1em;
        width: 100%;

        &--textarea {
            resize: none;
        }
        
        &:focus {
            outline: 2px solid ${({ theme }) => theme.colors.darkGray};
        }

        /* Chrome/Opera/Safari */
        &::-webkit-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        }

        /* Firefox 19+ */
        &::-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        }

        /* IE 10+ */
        &:-ms-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        }

        /* Firefox 18- */
        &:-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .6)};
        }
    }

    .form__btn {
        background: transparent;
        border: none;
        cursor: pointer;
        display: block;
        margin: 1.5em auto 0;
    }


    .address-wrapper {
        background: ${({ theme }) => theme.colors.mediumBlue};
        color: ${({ theme }) => theme.colors.white};

        padding: 2em;
        padding-bottom: 1em;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .address {
        font-weight: 600;
        line-height: 1.5;
    }

    .address__heading {
        font-size: 1.25rem;
        font-weight: 700;
        margin: .5em 0 1em;
    }

    .address__link {
        color: inherit;
        display: block;
        margin: 1.5em 0;
    }

    .address-wrapper__img {
        align-self: flex-end;
    }

    @media (min-width: 800px) {
        .form-wrapper {
            flex-direction: row;
        }

        .form__inputs {
            grid-template-columns: repeat(2, 1fr);
        }

        .address-wrapper {
            max-width: 425px;
        }
    }

    @media (min-width: 1100px) {
      & {
        margin-left: 120px;
        margin-right: 120px;
      }
    }
`;

const Main = styled.main`
    color: ${({ theme }) => theme.colors.darkGray};
`;

const GetConsultancy = () => {
    return (
        <>
            <Header>
                <Navbar />

                <section className='hero'>
                    <div className='hero__text'>
                        <h1 className='hero__heading'>How can we help?</h1>
                        <p className='hero__p'>
                            Enter your information below, and we will follow up with an email to find a suitable day and time to connect. We look forward to
                            learning more about you and your organization and how we can help achieve your goals.
                        </p>
                    </div>
                    <span className='hero__question-mark'>?</span>
                </section>
            </Header>
            <Main>
                <FormSection>
                    <div className="form-wrapper">
                        <form className='form' method="POST">
                            <h2 className='form__heading'>Get Consultancy</h2>
                            <div className="form__inputs">
                                <div className='form__input-wrapper'>
                                    <label className='form__label' htmlFor='name'>Your Name</label>
                                    <input className='form__input' type='text' id='name' name='name' placeholder='Type Your Name Here' required />
                                </div>
                                <div className='form__input-wrapper'>
                                    <label className='form__label' htmlFor='email'>Email Address</label>
                                    <input className='form__input' type='email' id='email' name='email' placeholder='Enter a Valid Email Address' required />
                                </div>
                                <div className='form__input-wrapper'>
                                    <label className='form__label' htmlFor='phone-number'>Phone Number</label>
                                    <input className='form__input' type='tel' id='phone-number' name='phone-number' placeholder='Phone Number' required />
                                </div>
                                <div className='form__input-wrapper'>
                                    <label className='form__label' htmlFor='organization'>Organization</label>
                                    <input className='form__input' type='text' id='organization' name='organization' placeholder='Type Here' required />
                                </div>
                                <div className='form__input-wrapper form__input-wrapper--textarea'>
                                    <label className='form__label' htmlFor='message'>What can we help you with?</label>
                                    <textarea className='form__input form__input--textarea' name="message" id="message" placeholder='Type Message Here...' rows="5" required />
                                </div>
                            </div>
                            <button className='form__btn' type="submit" title='Submit'>
                                <img src={telegramIcon} alt="Submit" />
                            </button>

                        </form>
                        <div className="address-wrapper">
                            <address className='address'>
                                <h3 className='address__heading'>Contact Information</h3>
                                <p>24b Tijani Amodu Close, off <br /> Sanusi Fafunwa, Victoria Island <br /> Lagos.</p>
                                <a className='address__link' href="mailto:info@gcetng.com">info@gcetng.com</a>
                                <a className='address__link' href="tel:+234 8118193875">+234 8118193875</a>
                            </address>

                            <img className='address-wrapper__img' src={hexagonsImg} alt="" />
                        </div>
                    </div>
                </FormSection>
            </Main>
            <Footer />
        </>
    )
}

export default GetConsultancy;
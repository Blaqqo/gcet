import { useState } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import logo from '../../assets/images/logo-header.png';

const Header = styled.header`
    background: ${({ theme }) => theme.colors.mediumBlue};

    padding: 1em 5%;

    @media (min-width: 1100px) {
      & {
        padding-left: 120px;
        padding-right: 120px;
      }
    }
`;

const FormSection = styled.section`
    margin: 0 5%;

    .form {
        max-width: 400px;
        margin: 0 auto;
    }

    .form__heading {
        font-size: 2.5em;
        margin: 1.5em 0;
        text-align: center;
    }

    .form__input-wrapper {
        display: flex;
        flex-direction: column;
        gap: .35em;

        margin: 1em 0;
    }

    .form__label {
        font-weight: 600;
    }

    .form__input {
        border: 1px solid ${({ theme }) => theme.colors.darkGray};
        color: ${({ theme }) => theme.colors.darkGray};
        font-size: .875rem;
        padding: .75em 1.5em;
        padding-right: 3em;
        width: 100%;

        /* Chrome/Opera/Safari */
        &::-webkit-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .7)};
        }

        /* Firefox 19+ */
        &::-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .7)};
        }

        /* IE 10+ */
        &:-ms-input-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .7)};
        }

        /* Firefox 18- */
        &:-moz-placeholder {
            color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .7)};
        }
    }

    .password-wrapper {
        position: relative;
    }
    
    .password-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1rem;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        right: 1em;
    }

    .form__submit-btn {
        background: ${({ theme }) => theme.colors.lightBlue};
        border: none;
        border-radius: .3125em;
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
        display: block;
        font-size: 1em;
        font-weight: 600;
        padding: 1em 1.25em;
        width: 100%;
    }

    .checkbox-wrapper {
        display: flex;
        gap: .5em;

        font-size: .875rem;
        margin: 1em 0;
    }
`;

const AdminLogin = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <>
            <Header>
                <Link to='/'>
                    <img src={logo} alt="GCET logo" />
                </Link>
            </Header>
            <main>

                <FormSection>
                    <form className='form' method='POST'>
                        <h1 className='form__heading'>Admin Login</h1>

                        <div className="form__input-wrapper">
                            <label htmlFor="email" className="form__label">Email Address</label>
                            <input
                                className='form__input'
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email address'
                                required
                            />
                        </div>
                        <div className="form__input-wrapper">
                            <label htmlFor="password" className="form__label">Password</label>
                            <div className="password-wrapper">
                                <input
                                    className='form__input'
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder='**********'
                                    minLength={8}
                                    required
                                />
                                <button className='password-btn' type='button' onClick={togglePasswordVisibility}>
                                    {isPasswordVisible ?
                                        <FontAwesomeIcon icon='fa-regular fa-eye-slash' /> : <FontAwesomeIcon icon='fa-regular fa-eye' />}
                                </button>
                            </div>
                        </div>
                        <div className='checkbox-wrapper'>
                            <input type="checkbox" name="rememeber-me" id="remember-me" />
                            <label htmlFor="remember-me">Remember Me</label>
                        </div>
                        <button className='form__submit-btn' type="submit">Login</button>
                    </form>
                </FormSection>
            </main>
        </>
    )
}

export default AdminLogin;
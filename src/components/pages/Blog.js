import styled from 'styled-components';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Article from '../blog/Article';
import SideArticle from '../blog/SideArticle';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

import articleImg1 from '../../assets/images/blog/article-1.jpg';
import articleImg2 from '../../assets/images/blog/article-2.jpg';
import articleImg3 from '../../assets/images/blog/article-3.jpg';
import articleImg4 from '../../assets/images/blog/article-4.jpg';
import articleImg5 from '../../assets/images/blog/article-5.jpg';
import articleImg6 from '../../assets/images/blog/article-6.jpg';
import articleImg7 from '../../assets/images/blog/article-7.jpg';
import articleImg8 from '../../assets/images/blog/article-8.jpg';

const Header = styled.header`
    background: ${({ theme }) => theme.colors.mediumBlue};
    padding: 1.25em 5%;

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

const Intro = styled.section`
    margin: 3em 5%;
    text-align: center;

    .intro__heading {
        font-size: 2.75rem;
        font-weight: 700;
        margin: .125em 0;
    }

    .intro__form {
        border-radius: .625em;
        box-shadow: 2px 3px 10px 2px rgba(182, 182, 182, 0.25);
        margin: 1.5em auto;
        max-width: 610px;
        padding: 1em;

        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }

    .intro__input {
        flex: 200px;

        border-radius: .3125em;
        background: #E8F1F5;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: .75em;
        width: 100%;

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

    .intro__btn {
        border: none;
        border-radius: .25em;
        background: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        font-size: 1rem;
        font-weight: 700;
        padding: .625em .875em;
    }
`;

const ArticlesContainer = styled.div`
    margin: 4em 5%;

    display: grid;
    gap: calc(2em + 5vw);
    
    .articles {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .aside {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
    
    @media (min-width: 900px) {
        & {
            grid-template-columns: 1fr 390px;
        }
    }

    @media (min-width: 1100px) {
        & {
            margin-left: 120px;
            margin-right: 120px;
        }
    }
`;

const Blog = () => {
    return (
        <>
            <Header>
                <Navbar />
            </Header>
            <Main>
                <Intro>
                    <h1 className='intro__heading'>Get Informed!</h1>
                    <p>Read the latest news here on our platform

                        <form className='intro__form'>
                            <input className='intro__input' type="search" name="search" id="search" placeholder='Search for keywords or trends' required />
                            <button className='intro__btn' type="submit">Search</button>
                        </form>
                    </p>
                </Intro>
                <ArticlesContainer>
                    <section className='articles'>
                        <Article articleImg={articleImg1} />
                        <Article articleImg={articleImg2} />
                    </section>
                    <aside className='aside'>
                        <SideArticle image={articleImg3} author='Frank Korg' title='Alleged Kaseya ransomware attacker arrives in Texas for trial' />
                        <SideArticle image={articleImg4} author='Abel Johanns' title='OpenSSL patches infinite-loop DoS bug in certificate verification' />
                        <SideArticle image={articleImg5} author='Dowell McPherson' title='S3 Ep74: Cybercrime busts, Apple patches, Pi Day, and disconnects' />
                        <SideArticle image={articleImg6} author='Phil Abraham' title="Beware bogus Betas - cryptocoin scammers abuse Apple's" />
                        <SideArticle image={articleImg7} author='Frank Korg' title='CISA warning: “Russian actors bypassed 2FA” - what happened' />
                        <SideArticle image={articleImg8} author='George Run' title='Apple patches 87 security holes - from iPhones and Macs to Wind' />
                    </aside>
                </ArticlesContainer>
            </Main>
            <Footer />
        </>
    )
}

export default Blog;
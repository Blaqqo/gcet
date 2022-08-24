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
import articleImg9 from '../../assets/images/blog/article-9.jpg';
import articleImg10 from '../../assets/images/blog/article-10.jpg';

const Header = styled.header`
    background: ${({ theme }) => theme.colors.mediumBlue};
    padding: 1.25em 5%;
    min-height: 105px;

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
                    <p>Read the latest news here on our platform</p>
                        <form className='intro__form'>
                            <input className='intro__input' type="search" name="search" id="search" placeholder='Search for keywords or trends' required />
                            <button className='intro__btn' type="submit">Search</button>
                        </form>
                </Intro>
                <ArticlesContainer>
                    <section className='articles'>
                        <Article image={articleImg1}
                            author='Paul Ducklin'
                            title='Laptop denial-of-service via music: the 1980s R&amp;B song with a CVE!'
                            text="You've probably heard the old joke: “Humour in the public service? It’s no laughing matter!”
                            
                            But the thing with downbeat, blanket judgements of this sort is that it only takes a single counter-example to disprove"
                            link='https://nakedsecurity.sophos.com/2022/08/22/laptop-denial-of-service-via-music-the-1980s-rb-song-with-a-cve/'
                            date='2022-08-22'
                        />
                        <Article image={articleImg2}
                            author='Paul Ducklin'
                            title='Apple patches double zero-day in browser and kernel - update now!'
                            text="Apple just pushed out an emergency update for two zero-day bugs that are apparently actively being exploited.

                            There's a remote code execution hole (RCE) dubbed CVE-2022-32893 in Apple's HTML rendering software (WebKit), by means of which a booby trapped web page can trick iPhones, iPads and Macs into running unauthorised and untrusted software code"
                            link='https://nakedsecurity.sophos.com/2022/08/18/apple-patches-double-zero-day-in-browser-and-kernel-update-now/'
                            date='2022-08-18'
                        />
                    </section>
                    <aside className='aside'>
                        <SideArticle
                            image={articleImg3}
                            author='Paul Ducklin'
                            title='S3 Ep96: Zoom 0-day, AEPIC leak, Conti reward, healthcare security [Audio + Text]'
                            link='https://nakedsecurity.sophos.com/2022/08/18/s3-ep96-zoom-0-day-aepic-leak-conti-reward-heathcare-security-audio-text/'
                            date='2022-08-18'
                        />
                        <SideArticle
                            image={articleImg4}
                            author='Paul Ducklin'
                            title='Chrome browser gets 11 security fixes with 1 zero-day - update now!'
                            link='https://nakedsecurity.sophos.com/2022/08/17/chrome-browser-gets-11-security-fixes-with-1-zero-day-update-now/'
                            date='2022-08-17'
                        />
                        <SideArticle
                            image={articleImg5}
                            author='Naked Secret Writer'
                            title='US offers reward “up to $10 million” for information about the Conti gang'
                            link='https://nakedsecurity.sophos.com/2022/08/16/us-offers-reward-up-to-10-million-for-information-about-the-conti-gang/'
                            date='2022-08-16'
                        />
                        <SideArticle
                            image={articleImg6}
                            author='Paul Ducklin'
                            title='Zoom for Mac patches critical bug - update now!'
                            link='https://nakedsecurity.sophos.com/2022/08/15/zoom-for-mac-patches-get-root-bug-update-now/'
                            date='2022-08-15'
                        />
                        <SideArticle
                            image={articleImg7}
                            author='Paul Ducklin'
                            title='S3 Ep95: Slack leak, Github onslaught, and post-quantum crypto [Audio + Text]'
                            link='https://nakedsecurity.sophos.com/2022/08/11/s3-ep95-slack-leak-github-onslaught-and-post-quantum-crypto-audio-text/'
                            date='2022-08-11'
                        />
                        <SideArticle
                            image={articleImg8}
                            author='Paul Ducklin'
                            title="APIC/EPIC! Intel chips leak secrets even the kernel shouldn't see"
                            link='https://nakedsecurity.sophos.com/2022/08/10/apic-epic-intel-chips-leak-secrets-even-the-kernel-shouldnt-see/'
                            date='2022-08-10'
                        />
                        <SideArticle
                            image={articleImg9}
                            author='Paul Ducklin'
                            title='Slack admits to leaking hashed passwords for five years'
                            link='https://nakedsecurity.sophos.com/2022/08/08/slack-admits-to-leaking-hashed-passwords-for-three-months/'
                            date='2022-08-08'
                        />
                        <SideArticle
                            image={articleImg10}
                            author='Paul Ducklin'
                            title='Traffic Light Protocol for cybersecurity responders gets a revamp'
                            link='https://nakedsecurity.sophos.com/2022/08/05/traffic-light-protocol-for-cybersecurity-responders-gets-a-revamp/'
                            date='2022-08-05'
                        />
                    </aside>
                </ArticlesContainer>
            </Main>
            <Footer />
        </>
    )
}

export default Blog;
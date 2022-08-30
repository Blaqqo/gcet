import styled from 'styled-components';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

const ArticleSC = styled.article`
    line-height: 1.4;

    .article__info {
        display: flex;
        align-items: center;
        gap: .5em;

        margin: .5em 0;
    }

    .article__author {
        background: ${({ theme }) => theme.colors.mediumBlue};
        color: #FFFFFC;
        font-size: .875em;
        font-weight: 650;
        border-radius: .1875em;
        max-width: fit-content;
        padding: .25em 1em;
        white-space: nowrap;
    }
    
    .article__time {
        color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .8)};
        font-size: .875em;
        white-space: nowrap;
    }

    .article__heading {
        font-size: 1.375rem;
        font-weight: 600;
        margin: .25em 0;
    }

    .article__text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        gap: 1em;

        > p:last-child::after {
            content: '...';
        }
    }

    .article__link {
        color: inherit;
        display: block;
        margin: .5em 0;
    }
`;

const ReadMoreLink = styled.a`
    color: ${({ theme }) => theme.colors.lightBlue};
    font-weight: 600;
    display: block;
    margin: .5em 0;
`;

const Article = ({ children, image, title, author, link, date }) => {

    return (
        <ArticleSC>
            <figure>
                <img src={image} alt="" />
                <figcaption>
                    <div className="article__info">
                        <address className='article__author'>{author}</address>
                        <time className='article__time' dateTime={date}>{new Date(date).toDateString()}</time>
                    </div>
                    <h2 className='article__heading'><a className='article__link' href={link} target='_blank' rel="noreferrer">{title}</a></h2>
                    <div className='article__text'>
                        {children}
                    </div>
                    <ReadMoreLink href={link} target='_blank' rel='noreferrer'>Read more</ReadMoreLink>
                </figcaption>
            </figure>
        </ArticleSC>
    )
}

export default Article
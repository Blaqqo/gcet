import styled from 'styled-components';

import { convertHexToRgba } from '../../utils/convertHexToRgba';

const Article = styled.article`
     line-height: 1.4;

     .article__fig {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .article__info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .5em;

        margin: .5em 0;
    }
    
    .article__author {
        background: ${({ theme }) => theme.colors.mediumBlue};
        color: #FFFFFC;
        font-size: .875em;
        font-weight: 600;
        border-radius: .1875em;
        max-width: fit-content;
        padding: .25em 1em;
        text-align: center;
    }
    
    .article__time {
        color: ${({ theme }) => convertHexToRgba(theme.colors.darkGray, .8)};
        font-size: .875em;
    }

    .article__heading {
        font-size: 1.125rem;
        font-weight: 600;
        margin: .25em 0;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media (min-width: 300px) {
        .article__fig {
            flex-direction: row;
        }
    }
`;

const SideArticle = ({ image, title, author }) => {
    return (
        <Article>
            <figure className='article__fig'>
                <img src={image} alt="" />
                <figcaption>
                    <div className="article__info">
                        <address className='article__author'>{author}</address>
                        <time className='article__time' dateTime='2022-03-23'>23rd March 2022</time>
                    </div>
                    <h3 className='article__heading'>{title}</h3>
                </figcaption>
            </figure>
        </Article>
    )
}

export default SideArticle;
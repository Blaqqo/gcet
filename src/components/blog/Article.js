import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Comment from './Comment';

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
        font-weight: 600;
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
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

const ReadMoreLink = styled(Link)`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.lightBlue};
    display: block;
    font-weight: 600;
    margin: .5em 0;
`;

const Article = ({ articleImg }) => {

    return (
        <ArticleSC>
            <figure>
                <img src={articleImg} alt="" />
                <figcaption>
                    <div className="article__info">
                        <address className='article__author'>Paul Ducklin</address>
                        <time className='article__time' dateTime='2022-03-23'>23rd March 2022</time>
                    </div>
                    <h2 className='article__heading'>Serious Security: DEADBOLT - the ransomware that goes straight for your backups</h2>
                    <p className='article__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim ornare odio ultrices quis enim mauris id dictumst amet. Leo cras
                        tempus in in quam. Odio risus ultrices ut ut turpis nulla porta lacus. Amet molestie ut pretium sed dui ullamcorper. Nec, vel porttitor
                        posuere arcu, placerat at arcu. Porttitor porta congue sociis nunc enim diam. Aenean donec nisl et elit turpis auctor
                        massa
                    </p>
                    <ReadMoreLink to=''>Read more</ReadMoreLink>

                    <Comment />
                </figcaption>
            </figure>
        </ArticleSC>
    )
}

export default Article
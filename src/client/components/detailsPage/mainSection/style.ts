import styled from 'styled-components';
import {
    BREAK_POINT_MEDIUM,
    BREAK_POINT_MEDIUM_LARGE,
    BREAK_POINT_SMALL,
} from '../../../../common/constants/breakPoints';
import { CONTENT_COLOR, HEADER_COLOR } from '../../../../common/constants/theme';

export const MainSectionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 3rem;
    color: ${CONTENT_COLOR};
    @media (max-width: ${BREAK_POINT_SMALL}) {
        padding: 2rem 1rem;
    }
`;

export const ImageWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    div {
        padding-top: 117%;
    }
    img {
        position: absolute!important;
        left: 0;
        top: -40%;
        box-shadow: 1.3rem 0.7rem 0.7rem rgba(0, 0, 0, .4);
        border-radius: 1rem;
    }
`;

export const Info = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 3rem;
    font-size: 1.2rem;
    h1 {
        color: ${HEADER_COLOR};
        font-size: 2.3em;
        margin-bottom: 1rem;
    }
    @media (max-width: ${BREAK_POINT_MEDIUM_LARGE}) {
        width: 66.6%;
    }
    @media (max-width: ${BREAK_POINT_MEDIUM}) {
        width: 60%;
        font-size: 1rem;
        h1 {
            font-size: 1.8em;
        }
    }
    @media (max-width: ${BREAK_POINT_SMALL}) {
        font-size: 0.8rem;
        h1 {
            font-size: 1.5em;
        }
    }
`;

export const OverviewWrapper = styled.div`
    width: 33.33%;
    h2 {
        color: ${HEADER_COLOR};
        font-size: 2em;
    }
    p {
        font-size: 1.5em;
    }
    @media (max-width: ${BREAK_POINT_MEDIUM_LARGE}) {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #0F303D;
        width: 100%;
        font-size: 0.9rem;
    }
`;

export const Separator = styled.span`
    padding: 0 0.5rem;
`;

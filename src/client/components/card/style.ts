import { Label } from 'semantic-ui-react';
import styled from 'styled-components';
import { CONTENT_COLOR, HEADER_COLOR } from '../../../common/constants';

export const Card = styled.div`
    width: calc(25% - 2em);
    position: relative;
    background-color: transparent;
    margin: 1em;
    @media (max-width: 1024px) {
        width: calc(33.333% - 2em);
    }
    @media (max-width: 600px) {
        width: calc(50% - 2em);
    }
`;

export const ImageWrapper = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 150%;
    img {
        position: absolute!important;
        left: 0;
        top: 0;
        border-radius: 1em;
    }
`;

export const Vote = styled(Label)`
    && {
        color: white;
        background-color: ${props => props.bgcolor};
        z-index: 2;
        position: absolute;
        left: 0.8em;
        top: 0.8em;
        width: 4em;
    }
`;

export const Title = styled.h4`
    background-color: transparent;
    color: ${HEADER_COLOR};
    margin: 0.5em 0;
    font-weight: 400;
`;

export const ReleaseDate = styled.p`
    background-color: transparent;
    color: ${CONTENT_COLOR};
    font-size: 0.9em;
`;

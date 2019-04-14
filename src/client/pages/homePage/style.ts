import styled from 'styled-components';
import {
    BREAK_POINT_LARGE,
    BREAK_POINT_SMALL,
} from '../../../common/constants/breakPoints';
import { BACKGROUND_COLOR, HEADER_COLOR } from '../../../common/constants/theme';

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${BACKGROUND_COLOR};
    min-height: 100vh;
`;

export const MainSectionWrapper = styled.div`
    flex-grow: 1;
    position: relative;
    padding: 5vh 15vw 2vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    @media (max-width: ${BREAK_POINT_LARGE}) {
        padding: 5vh 7vw 2vh;
    }
    @media (max-width: ${BREAK_POINT_SMALL}) {
        padding: 5vh 2vw 2vh;
    }
    h1 {
        width: 100%;
        color: ${HEADER_COLOR};
        padding-left: 0.5em;
    }
`;

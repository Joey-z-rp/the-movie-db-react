import styled from 'styled-components';
import { getImageUrl } from '../../utils/movieInfoHelper';
import {
    BREAK_POINT_LARGE,
    BREAK_POINT_MEDIUM,
    BREAK_POINT_SMALL,
} from '../../../common/constants/breakPoints';
import { BACKGROUND_COLOR } from '../../../common/constants/theme';

export const DetailPageWrapper = styled.div`
    background-color: ${BACKGROUND_COLOR};
    min-height: 100vh;
`;

export const Header = styled.div`
    height: 400px;
    background-image: url(
        "${props => getImageUrl(props.backdropPath, 1280, props.fallbackImage)}"
    );
    background-size: cover;
    background-position: center;
    @media (max-width: ${BREAK_POINT_LARGE}) {
        background-image: url(
            "${props => getImageUrl(props.backdropPath, 780, props.fallbackImage)}"
        );
    }
    @media (max-width: ${BREAK_POINT_MEDIUM}) {
        height: 300px;
    }
    @media (max-width: ${BREAK_POINT_SMALL}) {
        height: 230px;
    }
`;

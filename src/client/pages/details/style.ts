import styled from 'styled-components';
import { getImageUrl } from '../../utils/movieInfoHelper';
import { BACKGROUND_COLOR } from '../../../common/constants';

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
    @media (max-width: 1024px) {
        background-image: url(
            "${props => getImageUrl(props.backdropPath, 780, props.fallbackImage)}"
        );
    }
    @media (max-width: 768px) {
        height: 300px;
    }
    @media (max-width: 500px) {
        height: 230px;
    }
`;

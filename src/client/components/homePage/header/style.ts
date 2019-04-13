import styled from 'styled-components';
import backgroundImage from './images/background.jpg';

export const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-image: url("${backgroundImage}");
    background-size: cover;
`;

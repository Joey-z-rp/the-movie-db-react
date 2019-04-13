import styled from 'styled-components';

export const LoadMoreWrapper = styled.div`
    position: relative;
    height: 70px;
    background-color: ${props => props.bgcolor};
    > div {
        background-color: transparent!important;
    }
`;

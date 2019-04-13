import { Search } from 'semantic-ui-react';
import styled from 'styled-components';
import { GREEN_COLOR } from '../../../../common/constants';

export const StyledSearchBar = styled(Search)`
    && {
        z-index: 1001;
        position: absolute;
        bottom: 0;
        transform: translateY(50%);
        i {
            color: ${GREEN_COLOR};
            opacity: 1!important;
        }
        input {
            width: 50vw;
            color: ${GREEN_COLOR}!important;
            &::-webkit-input-placeholder {
                color: ${GREEN_COLOR}!important;
            }
            &::-moz-placeholder {
                color: ${GREEN_COLOR}!important;
            }
            &::-ms-input-placeholder {
                color: ${GREEN_COLOR}!important;
            }
            @media (max-width: 495px) {
                width: 90vw;
            }
        }
    }
`;

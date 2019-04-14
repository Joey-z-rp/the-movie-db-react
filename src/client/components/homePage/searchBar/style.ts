import { Search } from 'semantic-ui-react';
import styled from 'styled-components';
import { BREAK_POINT_SMALL } from '../../../../common/constants/breakPoints';
import { GREEN_COLOR } from '../../../../common/constants/theme';

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
            @media (max-width: ${BREAK_POINT_SMALL}) {
                width: 90vw;
            }
        }
    }
`;

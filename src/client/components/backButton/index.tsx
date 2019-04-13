import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import { BackButtonWrapper } from './style';

const BackButton: React.FunctionComponent = () => (
    <BackButtonWrapper>
        <Icon
            inverted
            name="arrow left"
            onClick={() => history.back()}
            size="big"
        />
    </BackButtonWrapper>
);

export default BackButton;

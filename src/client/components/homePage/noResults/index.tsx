import * as React from 'react';
import { memo } from 'react';
import { NoResultsWrapper } from './style';

const NoResults: React.FunctionComponent = () => (
    <NoResultsWrapper>
        No results found.
    </NoResultsWrapper>
);

export default memo(NoResults);

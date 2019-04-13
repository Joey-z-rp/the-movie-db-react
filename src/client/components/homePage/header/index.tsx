import * as React from 'react';
import { memo } from 'react';
import { Image } from 'semantic-ui-react';
import SearchBar from '../searchBar';
import logo from './images/logo.svg';
import { HeaderWrapper } from './style';

const Header: React.FunctionComponent = () => (
    <HeaderWrapper>
        <Image size="tiny" src={logo} />
        <SearchBar />
    </HeaderWrapper>
);

export default memo(Header);

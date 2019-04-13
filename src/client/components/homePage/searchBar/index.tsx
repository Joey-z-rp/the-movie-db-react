import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StyledSearchBar } from './style';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch): any => ({
});

// TODO: type check
class SearchBar extends React.PureComponent<any> {
    render() {
        return (
            <StyledSearchBar
                fluid
                placeholder="Search"
                showNoResults={false}
                size="large"
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    getMovies,
    handleInputChangeAction,
} from '../../../actions/movies';
import {
    ISearchBarDispatchProps,
    ISearchBarProps,
} from '../../../interfaces/components/searchBar';
import { StyledSearchBar } from './style';

let searchTimer;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch): ISearchBarDispatchProps => ({
    handleInputChange: input => dispatch(handleInputChangeAction(input)),
    search: () => dispatch(getMovies()),
});

class SearchBar extends React.PureComponent<ISearchBarProps> {
    render() {
        const {
            handleInputChange,
            search,
        } = this.props;

        return (
            <StyledSearchBar
                fluid
                onKeyUp={(event) => {
                    clearTimeout(searchTimer);
                    handleInputChange(event.target.value);
                    if (event.key === 'Enter') return search();
                    searchTimer = setTimeout(search, 300);
                }}
                placeholder="Search"
                showNoResults={false}
                size="large"
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));

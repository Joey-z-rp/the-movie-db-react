import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovies } from '../../actions/movies';
import Card from '../../components/card';
import Header from '../../components/homePage/header';
import noImageAvailable from '../../components/images/noImageAvailable.png';
import Loader from '../../components/loader';
import {
    IHomePageDispatchProps,
    IHomePageProps,
    IHomePageStateProps,
} from '../../interfaces/pages/homePage';
import { IState } from '../../interfaces/store';
import {
    getFormattedReleaseDate,
    getImageUrl,
} from '../../utils/movieInfoHelper';
import {
    HomePageWrapper,
    MainSectionWrapper,
} from './style';

const mapStateToProps = (state: IState): IHomePageStateProps => ({
    isFetching: state.movies.isFetching,
    movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch): IHomePageDispatchProps => ({
    getPopularMovies: () => dispatch(getMovies()),
});

class HomePage extends React.Component<IHomePageProps> {
    componentDidMount() {
        this.props.getPopularMovies();
    }

    render() {
        const {
            isFetching,
            movies,
        } = this.props;

        return (
            <HomePageWrapper>
                <Header />
                <MainSectionWrapper>
                    <Loader active={isFetching} />
                    <h1>Popular Movies</h1>
                    {movies && movies.map(movie => (
                        <Card
                            key={movie.id}
                            linkUrl={`/movie/${movie.id}`}
                            posterUrl={getImageUrl(movie.poster_path, 200, noImageAvailable)}
                            releaseDate={getFormattedReleaseDate(movie.release_date)}
                            title={movie.title}
                            voteAverage={movie.vote_average * 10}
                        />
                    ))}
                </MainSectionWrapper>
            </HomePageWrapper>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));

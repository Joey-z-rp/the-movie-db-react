import { IMovie } from '../store';

export interface IHomePageStateProps {
    isFetching: boolean;
    movies: IMovie[];
}

export interface IHomePageDispatchProps {
    getPopularMovies: () => Promise<any>;
}

export type IHomePageProps = IHomePageStateProps & IHomePageDispatchProps;

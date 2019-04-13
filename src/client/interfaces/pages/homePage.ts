import { IMovie } from '../store';

export interface IHomePageStateProps {
    isFetching: boolean;
    isLoadingMore: boolean;
    movies: IMovie[];
    totalResults: number;
}

export interface IHomePageDispatchProps {
    getPopularMovies: () => Promise<any>;
    loadMore: () => Promise<any>;
}

export type IHomePageProps = IHomePageStateProps & IHomePageDispatchProps;

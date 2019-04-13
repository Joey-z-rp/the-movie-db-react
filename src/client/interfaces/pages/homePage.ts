import { IMovie } from '../store';

export interface IHomePageStateProps {
    error: Error | null;
    isFetching: boolean;
    isLoadingMore: boolean;
    movies: IMovie[];
    searchFor: string;
    totalResults: number;
}

export interface IHomePageDispatchProps {
    getPopularMovies: () => Promise<any>;
    loadMore: () => Promise<any>;
}

export type IHomePageProps = IHomePageStateProps & IHomePageDispatchProps;

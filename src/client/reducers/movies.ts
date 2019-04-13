import {
    GET_MOVIES,
    LOAD_MORE,
    RECEIVE_MOVIES,
} from '../actions/movies';
import { IAction } from '../interfaces/actions';
import { IMoviesState } from '../interfaces/store';

const initialState = {
    isFetching: false,
    isLoadingMore: false,
    movies: [],
    page: 0,
    totalPages: 0,
    totalResults: 0,
};

export default function reducer(
    state: IMoviesState = initialState,
    action: IAction,
): IMoviesState {
    switch (action.type) {

        case GET_MOVIES:
            return {
                ...state,
                isFetching: true,
            };

        case LOAD_MORE:
            return { ...state, isLoadingMore: true };

        case RECEIVE_MOVIES:
            const movies = action.page > 1
                ? state.movies.concat(action.movies)
                : action.movies;

            return {
                ...state,
                movies,
                isFetching: false,
                isLoadingMore: false,
                page: action.page,
                totalPages: action.totalPages,
                totalResults: action.totalResults,
            };

        default:
            return state;
    }
}

import {
    ERROR_RECEIVING_MOVIES,
    GET_MOVIES,
    HANDLE_INPUT_CHANGE,
    LOAD_MORE,
    RECEIVE_MOVIES,
} from '../actions/movies';
import { IAction } from '../interfaces/actions';
import { IMoviesState } from '../interfaces/store';

const initialState = {
    error: null,
    input: '',
    isFetching: false,
    isLoadingMore: false,
    movies: [],
    page: 0,
    searchFor: '',
    totalPages: 0,
    totalResults: 0,
};

export default function reducer(
    state: IMoviesState = initialState,
    action: IAction,
): IMoviesState {
    switch (action.type) {

        case ERROR_RECEIVING_MOVIES:
            return {
                ...state,
                error: action.error,
                isFetching: false,
                isLoadingMore: false,
                movies: [],
                searchFor: '',
            };

        case GET_MOVIES:
            return {
                ...state,
                error: null,
                isFetching: true,
                movies: state.input !== state.searchFor ? [] : state.movies,
                searchFor: state.input,
            };

        case HANDLE_INPUT_CHANGE:
            return { ...state, input: action.input };

        case LOAD_MORE:
            return { ...state, isLoadingMore: true };

        case RECEIVE_MOVIES:
            if (state.searchFor !== action.query) return state;

            const movies = action.page > 1
                ? state.movies.concat(action.movies)
                : action.movies;

            return {
                ...state,
                movies,
                error: null,
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

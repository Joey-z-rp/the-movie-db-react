import {
    GET_MOVIES,
    RECEIVE_MOVIES,
} from '../actions/movies';
import { IAction } from '../interfaces/actions';
import { IMoviesState } from '../interfaces/store';

const initialState = {
    isFetching: false,
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
                movies: [],
            };

        case RECEIVE_MOVIES:
            return {
                ...state,
                isFetching: false,
                movies: action.movies,
                page: action.page,
                totalPages: action.totalPages,
                totalResults: action.totalResults,
            };

        default:
            return state;
    }
}

import {
    ERROR_RECEIVING_MOVIE_DETAILS,
    GET_MOVIE_DETAILS,
    RECEIVE_MOVIE_DETAILS,
} from '../actions/details';
import { IAction } from '../interfaces/actions';
import { IDetailsState } from '../interfaces/store';

const initialState = {
    backdropPath: '',
    error: null,
    isFetching: false,
    overview: '',
    posterPath: '',
    releaseDate: '',
    runtime: 0,
    title: '',
    voteAverage: 0,
};

export default function reducer(
    state: IDetailsState = initialState,
    action: IAction,
): IDetailsState {
    switch (action.type) {

        case ERROR_RECEIVING_MOVIE_DETAILS:
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };

        case GET_MOVIE_DETAILS:
            return {
                ...initialState,
                error: null,
                isFetching: true,
            };

        case RECEIVE_MOVIE_DETAILS:
            return {
                ...state,
                backdropPath: action.backdropPath,
                error: null,
                isFetching: false,
                overview: action.overview,
                posterPath: action.posterPath,
                releaseDate: action.releaseDate,
                runtime: action.runtime,
                title: action.title,
                voteAverage: action.voteAverage,
            };

        default:
            return state;
    }
}

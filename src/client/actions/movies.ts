import {
    IAction,
    IGetMoviesResponse,
    IProcessedMoviesResponse,
} from '../interfaces/actions';
import fetch from '../../common/utils/fetch';

// action types

export const ERROR_RECEIVING_MOVIES = 'ERROR_RECEIVING_MOVIES';
export const GET_MOVIES = 'GET_MOVIES';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const LOAD_MORE = 'LOAD_MORE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

// action creators

export function errorReceivingMoviesAction(error: Error) {
    return {
        error,
        type: ERROR_RECEIVING_MOVIES,
    };
}

export function getMoviesAction(): IAction {
    return { type: GET_MOVIES };
}

export function handleInputChangeAction(input: string) {
    return { input, type: HANDLE_INPUT_CHANGE };
}

export function loadMoreAction() {
    return { type: LOAD_MORE };
}

export function receiveMoviesAction(response: IProcessedMoviesResponse): IAction {
    return {
        movies: response.results,
        page: response.page,
        query: response.query,
        totalPages: response.total_pages,
        totalResults: response.total_results,
        type: RECEIVE_MOVIES,
    };
}

// async actions

export function getMovies(pageNumber: number = 1) {
    return (dispatch, getState) => {
        const input = getState().movies.input;
        const path = input ? '/search/movie' : '/movie/popular';
        const query = input ? `&query=${encodeURI(input)}` : '';
        const queryParameter = `?page=${pageNumber}${query}`;
        const url = `/api${path}${queryParameter}`;

        dispatch(getMoviesAction());

        return fetch(url)
            .then((response: IGetMoviesResponse) => (
                dispatch(receiveMoviesAction({
                    ...response,
                    query: input,
                }))
            ))
            .catch(err => dispatch(errorReceivingMoviesAction(err)));
    };
}

export function loadNextPage() {
    return (dispatch, getState) => {
        dispatch(loadMoreAction());
        const nextPage = getState().movies.page + 1;

        return getMovies(nextPage)(dispatch, getState);
    };
}

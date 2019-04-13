import { IGetDetailsResponse } from '../interfaces/actions';
import fetch from '../../common/utils/fetch';

// action types

export const ERROR_RECEIVING_MOVIE_DETAILS = 'ERROR_RECEIVING_MOVIE_DETAILS';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS';

// action creators

export function errorReceivingMovieDetailsAction(error: Error) {
    return {
        error,
        type: ERROR_RECEIVING_MOVIE_DETAILS,
    };
}

export function getMovieDetailsAction() {
    return { type: GET_MOVIE_DETAILS };
}

export function receiveMovieDetailsAction(result: IGetDetailsResponse) {
    return {
        backdropPath: result.backdrop_path,
        overview: result.overview,
        posterPath: result.poster_path,
        releaseDate: result.release_date,
        runtime: result.runtime,
        title: result.title,
        voteAverage: result.vote_average,
        type: RECEIVE_MOVIE_DETAILS,
    };
}

// async actions

export function getMovieDetail(id: string) {
    return (dispatch, getState) => {
        const url = `/api/movie/${id}`;

        dispatch(getMovieDetailsAction());

        return fetch(url)
            .then((result: IGetDetailsResponse) => dispatch(receiveMovieDetailsAction(result)))
            .catch(err => dispatch(errorReceivingMovieDetailsAction(err)));
    };
}

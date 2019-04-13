import { IMovie } from '../store';

export interface IAction {
    type: string;
    [key: string]: any;
}

export interface IGetMoviesResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IProcessedMoviesResponse extends IGetMoviesResponse{
    query: string;
}

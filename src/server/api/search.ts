import { API_BASE } from '../../common/constants';
import fetch from '../../common/utils/fetch';

export const getMovieSearchResult = async (req, res) => {
    const apiKey = req.apiKey;
    const page = req.query.page;
    const query = req.query.query;
    const url = `${API_BASE}/search/movie?api_key=${apiKey}&page=${page}&query=${query}`;

    const result = await fetch(url);

    res.json(result);
};

import { API_BASE } from '../../common/constants';
import fetch from '../../common/utils/fetch';

export const getPopularMovie = async (req, res) => {
    const apiKey = req.apiKey;
    const page = req.query.page;
    const url = `${API_BASE}/movie/popular?api_key=${apiKey}&page=${page}`;

    const result = await fetch(url);

    res.json(result);
};

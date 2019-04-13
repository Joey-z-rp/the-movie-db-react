import { combineReducers } from 'redux';

import details from './details';
import movies from './movies';

export default combineReducers({
    details,
    movies,
});

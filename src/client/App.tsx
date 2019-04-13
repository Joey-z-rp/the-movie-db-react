import * as React from 'react';
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';

import Homepage from './pages/homePage';

const App = () => (
    <Switch>
        <Route component={Homepage} exact path="/" />
    </Switch>
);

export default withRouter(App);

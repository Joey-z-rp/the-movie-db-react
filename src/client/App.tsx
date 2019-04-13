import * as React from 'react';
import {
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';

import Details from './pages/details';
import Homepage from './pages/homePage';

const App = () => (
    <Switch>
        <Route component={Homepage} exact path="/" />
        <Route component={Details} exact path="/movie/:id" />
    </Switch>
);

export default withRouter(App);

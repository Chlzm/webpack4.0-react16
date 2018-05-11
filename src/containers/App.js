import React from 'react'
import {Link, Router,StaticRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import configure from '../store/configureStore'
import Home from './Home'
import List from './List'
import createHistory from 'history/createBrowserHistory'
let history = createHistory();
const store = configure({ config: global.$GLOBALCONFIG })
export default class Index extends React.Component {
    constructor(options) {
        super(options);
        this.state = {
            value: 'webpack 4.0 & react 16.0.0'
        }
    }

    render() {
        return (
            <Router history={history}>
                <Provider store={store}>
                    <Route render={params => {
                        let {location} = params;
                        return (
                            <Switch key={location.pathname} location={location}>
                                <Route exact path="/" component={Home}></Route>
                                <Route exact path="/list" component={List}></Route>
                            </Switch>
                        )
                    }}>
                    </Route>
                </Provider>

            </Router>
        )
    }
}
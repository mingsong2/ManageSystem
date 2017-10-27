import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Admin from './components/admin/app';
// import Login from './components/login'



class RouteComponent extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/nest" component={Admin} />

                        {/* 重定向路由 */}
                        {<Redirect from="/" to="/nest" />}

                    </Switch>
                </div>
            </Router>
        );
    }
}


export default RouteComponent;

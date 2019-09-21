import React from 'react';
import {connect} from 'react-redux';

import {Switch,Redirect, Route, Router,BrowserRouter,HashRouter} from 'react-router-dom';

import BaseComponent from './BaseComponent';
import { createBrowserHistory,createHashHistory } from 'history';

import Main from 'components/Main';

import {userFetchData, logout} from 'redux/actions/user';

import '../assets/bootstrap/css/grid.min.css'
import '../../node_modules/antd/dist/antd.min.css'
import '../assets/scss/app.scss'


class App extends BaseComponent {



    constructor(props){
        super(props)
        this.state={
           
        }

    }

    render() {

        return (
            <div className="App" style={{direction:'rtl',padding:'20px'}} >
                <div className="main-container">
                <HashRouter>
                    <Router history={createHashHistory()}>
                        <div>
                            <Switch>
                                <Route path={"*"} render={() => (<Main/>)}/>
                            </Switch>
                        </div>
                    </Router>
                </HashRouter>    

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
       
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (data) => dispatch(userFetchData(data)),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
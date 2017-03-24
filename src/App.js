import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer, { getA11yMessage } from './reducers';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mapStateToA11yProps = (state) => ({
    a11yMessage: getA11yMessage(state)
});


const A11yMessage = ({ a11yMessage }) => (
    <div aria-live="assertive" aria-atomic="true">
        {a11yMessage ? <span>{a11yMessage}</span> : null}
    </div>
);

const A11yMessageRedux = connect(mapStateToA11yProps)(A11yMessage);

const Header = withRouter(() => (
    <header>
        <div className="container">
            <nav className="collapse navbar-collapse" id="bs-navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to="/">Overview</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders">Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
));

const Overview = () => (
    <section>
        <h1 className="page-header">Overview</h1>
    </section>
);

const Orders = () => (
    <section>
        <h1 className="page-header">Orders</h1>
    </section>
);

const Contact = () => (
    <section>
        <h1 className="page-header">Contact</h1>
    </section>
);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <A11yMessageRedux/>
                        <Header/>
                        <main className="container">
                            <Route exact={true} path="/" component={Overview}/>
                            <Route exact={true} path="/orders" component={Orders}/>
                            <Route exact={true} path="/contact" component={Contact}/>
                        </main>
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;

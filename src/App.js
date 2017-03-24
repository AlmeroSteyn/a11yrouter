import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducer, { getA11yMessage } from './reducers';
import * as actions from './actions';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const mapStateToA11yProps = (state) => ({
    a11yMessage: getA11yMessage(state)
});

class A11yMessage extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentA11yMessage: ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.a11yMessage){
            setTimeout(()=>{this.setState({
                currentA11yMessage: nextProps.a11yMessage
            })}, 50);
            setTimeout(()=>{this.setState({
                currentA11yMessage: ''
            })}, 500)
        }
    }

    render() {
        const { currentA11yMessage } = this.state;
        return (
            <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                {currentA11yMessage ? <span>{currentA11yMessage}</span> : ''}
            </div>
        );
    }
}



const A11yMessageRedux = connect(mapStateToA11yProps, actions)(A11yMessage);

const Header = () => (
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
);

class Overview extends Component {

    componentDidMount() {

            this.props.setA11yMessage('Overview page loaded.')

    }

    componentWillUnmount() {
        this.props.setA11yMessage('')
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Overview</h1>
            </section>
        );
    }
}

const OverviewWithRedux = connect(null, actions)(Overview);


class Orders extends Component {

    componentDidMount() {
            this.props.setA11yMessage('Orders page loaded.')

    }

    componentWillUnmount() {
        this.props.setA11yMessage('')
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Orders</h1>
            </section>
        );
    }
}

const OrdersWithRedux = connect(null, actions)(Orders);

class Contact extends Component {

    componentDidMount() {
            this.props.setA11yMessage('Contact page loaded.')

    }


    componentWillUnmount() {
        this.props.setA11yMessage('')
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Contact</h1>
            </section>
        );
    }
}


const ContactWithRedux = connect(null, actions)(Contact);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <A11yMessageRedux/>
                    <Router>
                        <div>

                            <Header/>
                            <main className="container">
                                <Route exact={true} path="/" component={OverviewWithRedux}/>
                                <Route path="/orders" component={OrdersWithRedux}/>
                                <Route path="/contact" component={ContactWithRedux}/>
                            </main>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}


export default App;

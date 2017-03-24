import React  from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Overview from './Overview';
import Contact from './Contact';
import Orders from './Orders';
import A11yMessage from './A11yMessage';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

//The Redux store is created as usual, but we add extra configuration to enable the use of the Redux browser dev tools.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
    <Provider store={store}>
        <div>
            <A11yMessage/>
            <Router>
                <div>
                    <Header/>
                    <main className="container">
                        <Route exact={true} path="/" component={Overview}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/contact" component={Contact}/>
                    </main>
                </div>
            </Router>
        </div>
    </Provider>
);

export default App;

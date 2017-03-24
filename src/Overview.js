import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Overview extends Component {

    componentDidMount() {
        this.props.setA11yMessage('Navigated to overview page.')
    }

    render() {
        return (
            <section>
                <h1 className="page-header">Overview</h1>
            </section>
        );
    }
}

export default connect(null, actions)(Overview);
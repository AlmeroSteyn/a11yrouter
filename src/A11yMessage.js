import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getA11yMessage } from './reducers';
import * as actions from './actions';

class A11yMessage extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentA11yMessage: ''
        }
    }

    componentWillReceiveProps(nextProps){
        //We delay the setting and clearing of the accessible route transition
        //text to ensure that the screen readers don't miss it.
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
            <div className="sr-only"
                 role="status"
                 aria-live="polite"
                 aria-atomic="true">
                {currentA11yMessage ? <span>{currentA11yMessage}</span> : ''}
            </div>
        );
    }
}

const mapStateToA11yProps = (state) => ({
    a11yMessage: getA11yMessage(state)
});

export default connect(mapStateToA11yProps, actions)(A11yMessage);
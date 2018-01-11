import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setSwedishMessage} from '../actions/swedish-message';
import {Link} from 'react-router-dom';

class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setSwedishMessage(value));
    }

    render () {
        const {text} = 'hello';
        const {message} = this.props.messageReducer;
        return (
            <div>
                <InputPreview 
                    value={text}
                    onChange={this._onChange} />
                <p>{message}</p>
                <Link 
                    to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        )
    }
}

export default connect(state => state)(App);
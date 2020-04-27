import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../Components/Message';

class MessageContainer extends Component {
    render() {
        let {message} = this.props;
        return (
            <Message message = {message}/>
        );
    }
}

// check propstype
// MessageContainer.propTypes = {
//     messsage : PropTypes.string.isRequired
// }

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer);
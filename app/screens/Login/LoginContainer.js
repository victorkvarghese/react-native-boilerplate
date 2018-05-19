import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

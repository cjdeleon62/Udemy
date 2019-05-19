import React from 'react';
import { connect } from 'react-redux';
import secret from '../secrets';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: secret.clientId,
                scope: 'email',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                // create an event listener to change the status when a user signs in and out after visiting the app.
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // sets the login state of the user for the App
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStateToProps,
    { signIn, signOut}
)(GoogleAuth);

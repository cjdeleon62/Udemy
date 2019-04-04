import React from 'react';
import secret from '../secrets';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: secret.clientId,
                scope: 'email',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // create an event listener to change the status when a user signs in and out after visiting the app.
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    // sets the login state of the user for the App
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>;
        } else {
            return <div>I am not signed in</div>;
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
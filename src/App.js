import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2><a className="App-link" href="."
          onClick={Auth.signOut}>
          signout
        </a></h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
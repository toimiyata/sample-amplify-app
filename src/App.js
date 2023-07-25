import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <button className='btn btn-primary' onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

function onClick() {
  alert("クリックした！");
}

export default withAuthenticator(App);
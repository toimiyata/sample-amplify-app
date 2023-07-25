import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onClick = ()=> {
    setCount(count + 1);
  }

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <div className='alert alert-primary'>
        count: {count};
      </div>
      <button className='btn btn-primary' onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}

export default withAuthenticator(App);
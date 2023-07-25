import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';
import { useEffect } from 'react';

function Messaege(props) {
  return (
    <div className={"alert alert-" + props.type}>
      {props.children}
    </div>
  )
}

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <Messaege type = "dark">
        <h1>メッセージ</h1>
        <p>これはMessageコンポーネントの利用例です。</p>
      </Messaege>
      <Messaege type="info">
        <ul>
          <li>メッセージ１</li>
          <li>メッセージ２</li>
          <li>メッセージ３</li>
        </ul>
      </Messaege>
    </div>
  );
}

export default withAuthenticator(App);
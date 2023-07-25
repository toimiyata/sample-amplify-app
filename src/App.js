import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';
import { useEffect } from 'react';

function Messaege(props) {
  let first = null;
  let data = null;
  if (Array.isArray(props.children)) {
    first = props.children[0];
    data = props.children.slice(1, props.children.length);
  } else {
    first = props.children;
    data = [<p>no data</p>]
  }
  return (
    <div className={"alert alert-" + props.type}>
    <ul className='list-group'>
      <div className='text-center'>{first}</div>
      {data.map(value => (
        <li className='list-group-item'>
          {value}
        </li>
      ))}
    </ul>  
    </div>
  )
}

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <Messaege>
        <p>タイトル</p>
        <p>サンプルメッセージ１</p>
        <p>サンプルメッセージ２</p>
      </Messaege>
    </div>
  );
}

export default withAuthenticator(App);
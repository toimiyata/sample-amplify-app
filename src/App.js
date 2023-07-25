import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';
import { useEffect } from 'react';

function Hello(props){
  return (
    <div className={'alert alert-' + props.type}>
      {props.message}
    </div>
  )
}

function UseMessage(value) {
  const data = [
    ["おやすみ", "..."],
    ["おはよう", "!"],
    ["こんにちは", "さん"],
    ["こんばんは", "くん"]
  ]

  const [msg, setMsg] = useState(value);
  const setMsgs = (v) => {
    if (v == "") {
      setMsg("no message.")
    } else {
      const h = Math.floor(new Date().getHours() / 6)
      setMsg(data[h][0] + msg + data[h][1]);
    }
  }
  return [msg, setMsgs];
}

function App() {
  const [msg, setMsg] = useState("");
  const [message, setMessage] = UseMessage(msg);

  const onChange = (event)=> {
    setMsg(event.target.value);
  }
  useEffect (()=> {
    setMessage(msg);
  }, [msg]);

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <div className='mx-0 my-3 row'>
        <input type="text" className='form-control col'
          onChange={onChange}/>
      </div>
      <Hello message={message} type="primary" />
    </div>
  );
}

export default withAuthenticator(App);
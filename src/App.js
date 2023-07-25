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

function App() {
  const data = [
    ["おやすみ", "..."],
    ["おはよう", "!"],
    ["こんにちは", "さん"],
    ["こんばんは", "くん"]
  ]

  const [input, setInput] = useState("")  
  const [msg, setMsg] = useState(input);
  const [msgs, setMsgs] = useState(msg);
  
  const onChange = (event)=> {
    setInput(event.target.value);
  }
  const onClick = ()=> {
    setMsg(input)
  }
  useEffect(() => {
    if (msg == "") {
      setMsgs("no message.")
    } else {
      const h = Math.floor(new Date().getHours() / 6)
      setMsgs(data[h][0] + msg + data[h][1]);
    }
  }, [msg]);

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <div className='mx-0 my-3 row'>
        <input type="text" className='form-control col'
          onChange={onChange}/>
        <button className='btn btn-primary col-2'
          onClick={onClick}/>
      </div>
      <Hello message={msgs} type="primary" />
    </div>
  );
}

export default withAuthenticator(App);
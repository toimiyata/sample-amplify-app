import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';

function Hello(props){
  return (
    <div className={'alert alert-' + props.type}>
      {props.message}
    </div>
  )
}

function App() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);
  
  const onChange = (event)=> {
    setMsg(event.target.value);
  }

  const onClick = ()=> {
    setMsgs([
      "Hello, " + msg + "!",
      "こんにちは　" + msg + "!"
    ]);
  }

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
      <Hello message={msgs[0]} type="primary" />
      <Hello message={msgs[1]} type="dark" />
    </div>
  );
}

export default withAuthenticator(App);
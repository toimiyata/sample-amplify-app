import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';
import { useState } from 'react';
import { useEffect } from 'react';

function AlertMessage(props) {
  return (
    <div className='alert alert-primary'>
      <h3>{props.title}</h3>
      {props.msg}
    </div>
  )
}

function BoxMessage(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        {props.title}
      </div>
      <div className='card-body'>
        {props.msg}
      </div>
    </div>
  )
}

function App() {
  const [flg, setFlg] = useState(false);
 
  const onChange = (event)=> {
    setMsg(event.target.checked);
  }

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <div className='form-check'>
        <input type="checkbox" className='form-check-input' id="check1"
          onChange={onChange}/>
        <label className='form-check-label' htmlFor='check1'>
          表示の切り替えチェックボックス
        </label>
      </div>
      <hr />
      {flg ?
        <AlertMessage title="チェックはON!!" msg="チェックはONのメッセージ"/>
      :
        <BoxMessage title="チェックはOFF" msg="チェックはOFFのメッセージ"/>
      }   
    </div>
  );
}

export default withAuthenticator(App);
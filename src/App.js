import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import { Auth, DataStore } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header, BoardComponent } from './ui-components';
import { Board } from './models'

const content2 = <p>タブ2のコンテンツ</p>;
const content3 = <p>タブ3のコンテンツ</p>;
const content4 = <p>タブ4のコンテンツ</p>;

function App() {
  const [content1, setContent1] = useState();

  DataStore.query(Board).then(values => {
    const data = []
    for (let item of values) {
      data.push(
        <BoardComponent
          board={item}
          key={item.id}
        />
      )
    }
    setContent1(<ol className='my-3 list-group'>
      {data}
    </ol>)
  });

  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <a href='#tab1' className='nav-link active'
            data-bs-toggle="tab">List</a>
        </li>
        <li className='nav-item'>
          <a href='#tab2' className='nav-link'
            data-bs-toggle="tab">Create</a>
        </li>
        <li className='nav-item'>
          <a href='#tab3' className='nav-link'
            data-bs-toggle="tab">Update</a>
        </li>
        <li className='nav-item'>
          <a href='#tab4' className='nav-link'
            data-bs-toggle="tab">Delete</a>
        </li>
      </ul>
      <div className='tab-content'>
        <div id="tab1" className='my-2 tab-pane active'>
          { content1 }
        </div>
        <div id="tab2" className='my-2 tab-pane'>
          { content2 }
        </div>
        <div id="tab3" className='my-2 tab-pane'>
          { content3 }
        </div>
        <div id="tab4" className='my-2 tab-pane'>
          { content4 }
        </div>
      </div>
    <p className='my-2'>
      <a className='btn btn-primary' href="."
      onClick={Auth.sighOut}></a>
    </p>
   </div>
  );
}

export default withAuthenticator(App);
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from './ui-components';

function App() {
  return (
    <div className="py-4">
      <Header className="mb-4" />
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <Hello message="サンプルのメッセージです" type="primary"/>
      <Hello message="表示のタイプも変更できます" type="dark" />
    </div>
  );
}

function Hello(props) {
  return (
    <p className={"alert alert-" + props.type}>
      {props.message}
    </p>
  )
}

export default withAuthenticator(App);
import {useEffect, useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [uaClient, setUaClient] = useState();

  async function teste() {
    const ai = await window.UA;
    setUaClient(ai);
  }

  async function subscribe() {
    try {
      await uaClient.register();
      alert('Inscrito com sucesso')
    } catch (errorMsg) {
      console.log(errorMsg)
      alert(String(errorMsg))
      console.log(uaClient)
    } 
  }

  // setTimeout(() => {
  //   console.log('ihaaa')
  //   console.log((window as any).UA);
  //   teste()
  // }, 3000)

  useEffect(() => {
    // console.log('ihe')

    if (!window.UA) return;
    // console.log('iha')
    // console.log((window as any).UA);
    teste();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window?.UA]);

  useEffect(() => {
    console.log('uaClient', uaClient);
  }, [uaClient]);

  return (
    <div className="App">
      <h1>4.0</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={subscribe} type="button">Aceitar notificação</button> 

      </header>
    </div>
  );
}

export default App;

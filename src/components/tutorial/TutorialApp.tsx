import React from 'react';
import ShowName from './introducing_jsx';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import Page from './Page';
import { NumberList, NumberListEmbedded } from './Lists';
import logo from '../../logo.svg';
import '../../App.css';

const messages = ['React', 'Re: React', 'Re:Re: React'];

export default function App() {
  return (
    <div className="App">
      <ShowName name={{firstName:"Jinu", lastName:"Kim"}}/>
      <Clock />
      <Toggle />
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
      </header>
      <LoginControl />
      <Mailbox unreadMessages={messages}/>
      <Page />
      <NumberList numbers={[1,2,3,4]} />
      <NumberListEmbedded numbers={[1,2]} />
    </div>
  );
};

import React from 'react';
import './App.css';
import FullPageBackground from './components/FullPageBackground';
import OuroborosPage from './components/OuroborosPage';
import FirstTestPage from './components/FirstTestPage';

function App() {
  let children = ['DodgerBlue', 'red', '#99CC33', 'coral'].map((color) => {
    return <FullPageBackground backgroundColor={color} />
  });
  children.unshift(<FirstTestPage/>);
  return (
    <div className="App">
      <OuroborosPage >
        {children}
      </OuroborosPage>
    </div>
  );
}

export default App;

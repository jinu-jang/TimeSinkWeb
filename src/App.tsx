import React from 'react';
import './App.css';
import FullPageBackground from './components/FullPageBackground';
import OuroborosPage from './components/OuroborosPage';

function App() {
  const children = ['DodgerBlue', 'red', '#99CC33', 'coral'].map((color) => {
    return <FullPageBackground backgroundColor={color} />
  });
  return (
    <div className="App">
      <OuroborosPage >
        {children}
      </OuroborosPage>
    </div>
  );
}

export default App;

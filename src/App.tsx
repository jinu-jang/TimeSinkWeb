import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import FullPageBackground from './components/FullPageBackground';
import OuroborosPage from './components/OuroborosPage';
import FirstTestPage from './components/FirstTestPage';

function App() {
  // let children = ['DodgerBlue', 'red', '#99CC33', 'coral'].map((color) => {
  //   return <FullPageBackground backgroundColor={color} />
  // });
  let children = ['#1E4174', '#1E4174', '#1E4174', '#1E4174'].map((color) => {
    return <FullPageBackground backgroundColor={color} />
  });
  children.unshift(<FirstTestPage/>);
  return (
    <ParallaxProvider>
      <div className="App">
        <OuroborosPage >
          {children}
        </OuroborosPage>
      </div>
    </ParallaxProvider>
  );
}

export default App;

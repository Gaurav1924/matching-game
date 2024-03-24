import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import IntroScreen1 from './components/IntroScreen/IntroScreen1/IntroScreen1';
import IntroScreen2 from './components/IntroScreen/IntroScreen2/IntroScreen2';
import IntroScreen3 from './components/IntroScreen/IntroScreen3/IntroScreen3';
import './components/IntroScreen/IntroScreen.css';
import IntructionScreen from './components/InstructionScreen/InstructionScreen';
import ActivityScreen from './components/ActivityScreen/ActivityScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={IntroScreen1} />
              {/* <Route path="/about" component={About} /> */}
              {/* Add more routes as needed */}
            </Switch>
          </div>
        </Router>
        {/* <IntroScreen1/> */}
        {/* <IntroScreen2/> */}
        {/* <IntroScreen3 /> */}
        {/* <IntructionScreen /> */}
        <ActivityScreen />
      </header>
    </div>
  );
}

export default App;

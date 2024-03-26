import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
            <Routes>
              <Route path="/" element={<IntroScreen1 />} />
              <Route path="/IntroScreen1" element={<IntroScreen1 />} />
              <Route path="/IntroScreen2" element={<IntroScreen2 />} />
              <Route path="/IntroScreen3" element={<IntroScreen3 />} />
              <Route path="/IntructionScreen" element={<IntructionScreen />} />
              <Route path="/ActivityScreen" element={<ActivityScreen />} />
              {/* <Route path="/about" component={About} /> */}
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </Router>
        {/* <IntroScreen1/> */}
        {/* <IntroScreen2/> */}
        {/* <IntroScreen3 /> */}
        {/* <IntructionScreen /> */}
        {/* <ActivityScreen /> */}
      </header>
    </div>
  );
}

export default App;

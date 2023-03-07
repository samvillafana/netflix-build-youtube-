import './App.css';
import HomeScreen from './HomeScreen';
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/test">
            <h1>whats up sam</h1>
            <HomeScreen />
          </Route>
        </Routes>

      </Router>



    </div>
  );
}

export default App;

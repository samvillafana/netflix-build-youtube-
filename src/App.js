import './App.css';
import HomeScreen from "./screens/HomeScreen";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase"

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);

      } else {
        // Logged out
        
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Routes>

        )}

      </Router>



    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import About from './Component/About';
import React, { useState } from 'react';
// import { Routes, Route, Router } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#4d0a46";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");

    }
  }

  return (
    //   <Router>
    //   <>
    //     <Navbar mode={mode} toggleMode={toggleMode}/>
    //     <Alert alert={alert} />
    //     <div className="container my-3">
    //       <Route>
    //         <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter Text To analze" mode={mode} />} />
    //         <Route path="/about" element={<About />} />
    //       </Route>
    //     </div>
    //   </>
    // </Router>
    <Router>
      <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To analze" mode={mode} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
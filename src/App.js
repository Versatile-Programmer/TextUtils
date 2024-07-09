import './App.css';
import Alerty from './Components/Alerty';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // variable like above should be defined in same component in which it is used.
  //but for passing a variable from one component to other component we use props
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled!", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        {/* mode = {mode} means we are passing mode by help of variable and mode inside curly braces
      is defined in same component but mode is using bcz we have passed mode as props in navbar component. */}
        <Alerty alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element = { <About />}/> */}
            {/* always write exact as if we don't write then it do partial matching it will create a lot of confusion 
            for eg: /users -->component 1
                    /users/home --> component 2
                    in this case if we don't write exact then in both case we will reach to component 1*/}
            {/* <Route exact path="/" element = { <Textform heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />}/> */}
          {/* </Routes> */}
          <Textform heading="Try TextUtils - Word Counter , Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;

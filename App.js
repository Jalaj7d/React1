import './App.css';
import Navbar from './components/navbar';
import About from './components/about';
import { useState } from 'react';
import Textform from './components/textform';
import Alert from './components/alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(" ");

  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled", "success");
      // document.title = 'TextUli - Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      // document.title = 'TextUli - Light Mode';
    }
  }

  return (
    <>
    {/* <Navbar/> */}
    {/* <Navbar title="textuti" abouttext='About us'/> */}
    <Router>
    <Navbar title="Textuti" abouttext='About us' mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<Textform showalert={showalert} heading="Try TextUli - Word Counter | Character Counter | uppercase to lowercase | lowercase to uppercase" mode={mode} />} />
      </Routes>

    </div>
    </Router>

    </>
  );
}

export default App;

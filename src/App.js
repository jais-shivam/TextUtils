import "./App.css";
import { About } from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from 'react';
import { Alert } from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light'); // Controls Dark/Light mode.
  const [alert, setAlert]= useState(null);
 
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#112130';
      showAlert("Dark mode has been enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",'success');
    }
  }
  const toggleMode2= ()=>{
    if(mode==='light' ){
      setMode('sky');
      document.body.style.backgroundColor='#0de7fd';
      showAlert("Sky mode has been enabled",'success');
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",'success');
    }
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
      <Alert alert={alert} />
      {/* <About /> */}
      <Routes>
          <Route path="/about" exact element={<About />}/>
          <Route path="/" 
                  exact element={
                    <div className="container my-3">
                      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
                    </div>
                    }
            />
            
         
      </Routes>
      </Router>
    </>
  );
}

export default App;

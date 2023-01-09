// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About"
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor='#0A2647'
      showAlert('Dark mode has been Enabled','success')
    } else {
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been Enabled','success')
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
     <Alert alert={alert}/>
      {/* yha pe humne ek bhi prop nhi bheja isliye usne deafualt vale use krr liye */}

      {/* <Navbar /> */}

      {/* agr hum kam props bhejenge to to default props se values utha lega  */}

      {/* <Navbar title="TextUtils" /> */}

      <div className="container ">
        <TextForm  showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>

        {/* agrr darak mode dekhna hai to about vale ko active krr aur upar import ko bhi shi krr  */}
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

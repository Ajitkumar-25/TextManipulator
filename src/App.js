// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";
import About from "./Components/About"

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      {/* yha pe humne ek bhi prop nhi bheja isliye usne deafualt vale use krr liye */}

      {/* <Navbar /> */}

      {/* agr hum kam props bhejenge to to default props se values utha lega  */}

      {/* <Navbar title="TextUtils" /> */}

      <div className="container ">
        {/* <TextForm heading="Enter Your Text Here"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;

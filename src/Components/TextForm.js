import React, { useState } from "react";

export default function TextForm(props) {
    const handleuppercase=()=>{
        let newtext=text.toLocaleUpperCase();
        setText(newtext)
    }
    const handlelowercase=()=>{
        let newtext=text.toLocaleLowerCase();
        setText(newtext)
    }
    const clearText=()=>{
        let newtext="";
        setText(newtext)
    }
    const handleCopy=()=>{
        let text=document.getElementById("box");
        text.Select();
        navigator.clipboard.writeText(text.value);
    }
    const RemoveExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    // this function is only made so that we can add new text other wise not possible 
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
  const [text,setText] = useState("");
//   text="newtext"; //wrong way to change the state
//   setText("new text" ); //correct way 

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className="py-4"> {props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control border-4" id="myBox" rows="8" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#0A2647':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleuppercase}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowercase}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length} </b>charecters</p>
        <p><b>{0.008*text.split(" ").length}</b> Minutes to read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Something in the above text box to preview"}</p>
    </div>
    </>
  );
}

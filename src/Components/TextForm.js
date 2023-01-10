import React, { useState } from "react";

export default function TextForm(props) {
  const handleuppercase = () => {
    let newtext = text.toLocaleUpperCase();
    setText(newtext);
    props.showAlert(" Converted to Upper case", "success");
  };
  const handlelowercase = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert(" Converted to Lower case", "success");
  };
  const clearText = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert(" Text was Cleared", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text was Copied", "success");
  };
  const RemoveExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Extra spaces have been removed", "success");
  };

  // this function is only made so that we can add new text other wise not possible
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text="newtext"; //wrong way to change the state
  //   setText("new text" ); //correct way

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="py-3 mb-3"> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-4"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0A2647" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleuppercase}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handlelowercase}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={RemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length} </b>charecters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes to read
        </p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}

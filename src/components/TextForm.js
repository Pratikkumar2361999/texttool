import React, { useState } from "react";

let startTime,endTime ;
export default function TextForm(props) {
  const handleUpclick = () => {
    startTime = performance.now();
    setText(text.toUpperCase());
    endTime = performance.now();
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoclick = () => {
    startTime = performance.now();
    setText(text.toLowerCase());
    endTime = performance.now();
    props.showAlert("Converted to Lowercase", "success");
  };
  const ClearText = () => {
    startTime = performance.now();
    setText("");
    endTime = performance.now();
    props.showAlert("Text Cleared ", "success");
  };
  const handleCopy = () => {
    startTime = performance.now();
    navigator.clipboard.writeText(text);
    endTime = performance.now();
    props.showAlert("Text Copied  ", "success");
  };
  const handleExtraSpace = () => {
    startTime = performance.now();
    let newText = text.split(/[ ]+/);
    endTime = performance.now();
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mt-5"
        style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
          ></textarea>
        </div>
        <div>
          <button
            disabled={text.length===0}
            className="btn btn-primary rounded-pill"
            onClick={handleUpclick}
            style={{ marginRight: "5px", marginBottom:"3px"}}
          >
            Convert to Uppercase
          </button>
          <button
          disabled={text.length===0}
            className="btn btn-primary rounded-pill"
            onClick={handleLoclick}
            style={{ marginRight: "5px",marginBottom:"3px" }}
          >
            Convert to Lowercase
          </button>
          <button 
          disabled={text.length===0}
          className="btn btn-primary rounded-pill" onClick={ClearText} style ={{marginRight:"5px",marginBottom:"2px"}}>
            Clear Text
          </button>
          <button 
          disabled={text.length===0}
          className="btn btn-primary rounded-pill" onClick={handleCopy} style ={{marginRight:"5px",marginBottom:"2px"}}>
            Copy Text
          </button>
          <button
          disabled={text.length===0}
            className="btn btn-primary rounded-pill"
            onClick={handleExtraSpace}
          >
            Remove Extraspaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          You Typed {text === /\s+/ ? "0" : text.length - text.split(/\s+/).length + 1} Character And{" "}
          {text === "" ? "0" : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words.
        </p>
        <p>{endTime === undefined ? 0 :  endTime - startTime} seconds are taken to complete the operation.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something into the textbox to preview it here:-"}
        </p>
      </div>
    </>
  );
  
}
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success")
  };
  const ClearText = () => {
    setText("");
    props.showAlert("Text Cleared ","success")
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied  ","success")

  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are Removed","success")

  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container mt-5" style={{color:props.mode==="dark"?"white":"#343a40"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style = {{backgroundColor:props.mode==="light"?"white":"#343a40" ,color:props.mode==="dark"?"white":"#343a40"}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={ClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpace}>
          Remove Extraspaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"#343a40"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes are taken in read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something into the textbox to preview it here"}</p>
      </div>
    </>
  );
}

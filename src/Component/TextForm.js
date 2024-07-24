import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success");
    }
    const handlecClear = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#4d0a46' }}>
        <h1 className="text-uppercase" >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="5"></textarea>
        </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-primary" onClick={handlecClear} >Clear Prompt</button>
    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#4d0a46' }} >
        <h1>This is summary of Text</h1>
        <p>{text.split(" ").length} Words , {text.length} Character in this text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text to peview"}</p>
    </div>      
</>
  )
}

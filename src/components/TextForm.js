import React, { useState } from "react";
import PropTypes from 'prop-types'

const TextForm = (props) => {
    const [text,setText]=useState('');
    const handleLowerCase= ()=>{
        if(text !==''){
          setText(text.toLocaleLowerCase());
          props.showAlert("Change to Lower case",'success')
        }
    }
    const handleUpperCase= ()=>{
        if(text !==''){
        setText(text.toUpperCase());
        props.showAlert("Change to Upper case",'success')
        }
    }
    const handleCopyText= ()=>{
        if(text !==''){
        const copyText= document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied",'success')
        }
        
    };
    const handleExtraSpaces= ()=>{
        if(text !==''){
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed",'success')
        }
    };
    
  return (
    <>
        <div className={`container text-${props.mode==='light' || props.mode==='sky' ?'dark':'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea
            className={`form-control text-${props.mode==='light' || props.mode==='sky' ?'dark':'light'}`}
            id="myBox"
            rows="8"
            value={text}
            onChange={(event)=>setText(event.target.value)}
            placeholder="Enter text here"
            style={{backgroundColor:props.mode==='dark'?'grey':props.mode==='sky'?'#bafcfd':'white'}}
        ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-1"  onClick={handleUpperCase}>Convert to Upper case</button>
        <button className="btn btn-primary my-2 mx-1"  onClick={handleLowerCase}>Convert to Lower case</button>
        <button className="btn btn-primary my-2 mx-1"  onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-1"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container my-3 text-${props.mode==='light' || props.mode==='sky' ?'dark':'light'}`}>
            <h2>Your Text Summary</h2>
            <p>{text.length!==0?text.trim().split(' ').length:'0'} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter your text in input box to preview it."}</p>

        </div>
    </>
  );
};
TextForm.prototype={
    heading:PropTypes.string.isRequired,
}
export default TextForm;

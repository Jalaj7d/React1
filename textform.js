import React, {useState} from "react";

export default function Textform(props) { 
    const handleupclick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Converted to uppercase','success');
      }
      const handlelcclick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Converted to lowercase','success');
    }
    const cleartext = ()=>{
        console.log("Uppercase was clicked"+text);
        let newtext = "";
        setText(newtext);
    }
    const handleonchange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return (
        <>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value = {text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? '#469da7ff':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="7" ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>
        Convert to uppercase
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelcclick}>
        Convert to Lowercase
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={cleartext}>
        Clear Text
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes read</p>
        <p>Preview</p>
        <p>{text.length>0?text:"Nothing to preview here..."}</p>
    </div>
    </>
  );
}

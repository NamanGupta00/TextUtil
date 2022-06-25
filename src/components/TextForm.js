import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Up was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        //console.log("Up was clicked")
        let newText1 = text.toLowerCase();
        setText(newText1)
    }
    const handleClearClick = ()=>{
        //console.log("Up was clicked")
        let newText2 = "";
        setText(newText2)
    }
    const handleOnChange = (event)=>{
        //console.log("Up was clicked")
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        //console.log("Up was clicked")
        var text = document.getElementById('myBox');
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const[text, setText] = useState('Enter Text Here');
  return (
      <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
        <label htmlFor="myBox" class="form-label">{props.heading}</label>
        <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary ms-3" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary ms-3" onClick={handleClearClick}>All Clear</button>
    <button className="btn btn-primary ms-3" onClick={handleCopy}>Copy Text</button>
</div>
<div className="container mt-3">
<h1>Your Text Summary</h1>
<p> No of characters is {text.length} and No. of words are {text.split(" ").length}</p>
<p>{0.008 * text.split(" ").length} Minutes Read </p>
<h2>
    Preview
</h2>
<p>{text}</p>
</div>
</>
  )
}

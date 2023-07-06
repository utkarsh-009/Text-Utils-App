import React, { useState } from 'react'


export default function TextForm(props) {
    // updating state to set text using setText function
    const [text, setText] = useState('Enter Text Here');
    // text = "new text" // Wrong way to set text
    // setText("new text") // Correct way to set text

    const handleUpperClick = () => {
        console.log("Uppercase button clicked!");
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to Uppercase", "Success");
    };

    const handleLowerClick = () => {
        console.log("Uppercase button clicked!");
        let upperText = text.toLowerCase();
        setText(upperText);
        props.showAlert("Converted to Lowercase", "Success");
    };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Converted Text to Speech", "Success");
    }

    // event is the text change in textarea, on changing the state we will setText as the value in textarea
    const handleOnChange = (event) => {
        console.log("On changed!");
        setText(event.target.value);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "Success");
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "Success");
    }

    return (
        <>
            <div className="my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>{props.heading}</h3>
                {/* {{}} => object inside js */}
                <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={speak}>Text To Speech</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h4>Text Summary</h4>
                <p> {text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p> Read Time: {text.trim().split(/\s+/).length * 0.008} minutes </p>
            </div>
        </>
    );
}
import React from "react";


const Output = (props) => {

    const copyTOClipBoard = () =>{
        let target =  document.getElementById("popText");

        navigator.clipboard.writeText(props.items());
        target.classList.add("popup-clicked");
        target.innerHTML = "✓ Copied to clipboard";

        setTimeout(() =>{
            target.classList.remove("popup-clicked");
            target.innerHTML ="";
        },1000);
    }

    return(
        <div className = "paragraph-container">
            <div className="glass1" ></div>
            <div className="glass2" ></div>
            <p className="paragraph"> {props.items()} </p>
            <div id="popText" className="popup"></div>
            <i onClick={copyTOClipBoard} className="far fa-copy"></i>
        </div>
    );

    

}


export default Output;
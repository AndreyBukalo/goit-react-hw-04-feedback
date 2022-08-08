import React from "react";


const Buttons = ({ onGood, onNetural, onBad }) => (
    <div>
     <button type="button" onClick={onGood} >Good</button>
            <button type="button" onClick={onNetural} >Netural</button>
             <button type="button" onClick={onBad} >Bad</button></div>
);

export default Buttons;
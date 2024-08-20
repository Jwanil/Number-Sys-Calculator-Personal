import React, { useRef, useState } from 'react';
import './CSS/Octal.css'
const Octal = () => {
  
  const [value, setValue] = useState('');
  const inputRef = useRef(null);


  const handleRes = (e) =>{
    
    const inputString = value;


    const operator = inputString.match(/[+\-*/]/)[0];

    const [octal1, octal2] = inputString.split(operator);

    switch(operator) {
      case "+":
          
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1 + dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        
        break;
      case "-":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1 - dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      case "*":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1*dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      case "/":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1/dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      default:
        text = "Invalid Input...";
    }
    inputRef.current.focus();
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      //setValue(String(eval(value)));
      
      const inputString = e.target.value;


      const operator = inputString.match(/[+\-*/]/)[0];

      const [octal1, octal2] = inputString.split(operator);

      switch(operator) {
        case "+":
          
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1 + dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        
        break;
      case "-":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1 - dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      case "*":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1*dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      case "/":
          var dec1 = parseInt(octal1, 8);
          var dec2 = parseInt(octal2, 8);
          var res = dec1/dec2;
          var octRes = res.toString(8)
          setValue(octRes);
        break;
      default:
        text = "Invalid Input...";
      }

      inputRef.current.focus();

    }
    else {
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '+', '-', '*', '/', '.'];
      if (allowedKeys.includes(e.key)) {
        setValue(value + e.key);
      } else if (e.key === 'Backspace') {
        setValue(value.slice(0, -1));
      } else {
        e.preventDefault(); // Prevent invalid keys
      }
    }
  };
  
  const handleClick = (buttonValue) => {
    setValue((prevalue) => prevalue + buttonValue);
    inputRef.current.focus();
  };
  const handleDelete = (e) => {
    setValue(value.slice(0, -1)); 
    inputRef.current.focus();
  }
  const handleClear =(e) =>{
    setValue('');
    inputRef.current.focus();
  }
  return (

    <>
      <div className="octal-calculator">
      <div className="calculator-title">Octal Calculator</div>
      <input 
        autoFocus={true}
        ref={inputRef}
        className="octal-input"
        type="text" 
        value={value} 
        onKeyDown={handleKeyDown}
        
      />
      
      <div className="octal-grid">
        <button className="octal-button wide" onClick={handleClear}>AC</button>
        <button className="octal-button wide" onClick={handleDelete}>DEL</button>
        <button className="octal-button" onClick={() => handleClick('0')}>0</button>
        <button className="octal-button" onClick={() => handleClick('1')}>1</button>
        <button className="octal-button" onClick={() => handleClick('2')}>2</button>
        <button className="octal-button operator" onClick={() => handleClick('+')}>+</button>
        <button className="octal-button" onClick={() => handleClick('3')}>3</button>
        <button className="octal-button" onClick={() => handleClick('4')}>4</button>
        <button className="octal-button" onClick={() => handleClick('5')}>5</button>
        
        <button className="octal-button operator" onClick={() => handleClick('-')}>-</button>
        
        
        <button className="octal-button" onClick={() => handleClick('6')}>6</button>
        <button className="octal-button" onClick={() => handleClick('7')}>7</button>
        <button className="octal-button operator" onClick={() => handleClick('*')}>×</button>
        <button className="octal-button operator" onClick={() => handleClick('/')}>÷</button>
        
        <button className="octal-button wide" onClick={() => handleClick('.')}>.</button>
        
        <button className="octal-button wide" onClick={() => handleRes('=')}>=</button>
        
      </div>
    </div>
    </>
    
  )
}

export default Octal
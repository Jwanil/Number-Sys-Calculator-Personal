import React, { useRef, useState } from 'react';
import './CSS/Binary.css'
const Binary = () => {
  const [value, setValue] = useState('');

  const inputRef = useRef(null);
  const handleRes = (e) =>{
    
    const inputString = value;


    const operator = inputString.match(/[+\-*/]/)[0];

    const [binary1, binary2] = inputString.split(operator);

    switch(operator) {
      case "+":
          
          var dec1 = parseInt(binary1, 2);
          var dec2 = parseInt(binary2, 2);
          var res = dec1 + dec2;
          var binRes = res.toString(2)
          setValue(binRes);
        
        break;
      case "-":
          var dec1 = parseInt(binary1, 2);
          var dec2 = parseInt(binary2, 2);
          var res = dec1 - dec2;
          var binRes = res.toString(2)
          setValue(binRes);
        break;
      case "*":
          var dec1 = parseInt(binary1, 2);
          var dec2 = parseInt(binary2, 2);
          var res = dec1*dec2;
          var binRes = res.toString(2)
          setValue(binRes);
        break;
      case "/":
          var dec1 = parseInt(binary1, 2);
          var dec2 = parseInt(binary2, 2);
          var res = dec1/dec2;
          var binRes = res.toString(2)
          setValue(binRes);
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

      const [binary1, binary2] = inputString.split(operator);

      switch(operator) {
        case "+":
            
            var dec1 = parseInt(binary1, 2);
            var dec2 = parseInt(binary2, 2);
            var res = dec1 + dec2;
            var binRes = res.toString(2)
            setValue(binRes);

          
          break;
        case "-":
            var dec1 = parseInt(binary1, 2);
            var dec2 = parseInt(binary2, 2);
            var res = dec1 - dec2;
            var binRes = res.toString(2)
            setValue(binRes);
          break;
        case "*":
            var dec1 = parseInt(binary1, 2);
            var dec2 = parseInt(binary2, 2);
            var res = dec1*dec2;
            var binRes = res.toString(2)
            setValue(binRes);
          break;
        case "/":
            var dec1 = parseInt(binary1, 2);
            var dec2 = parseInt(binary2, 2);
            var res = dec1/dec2;
            var binRes = res.toString(2)
            setValue(binRes);
          break;
        default:
          text = "Invalid Input...";
      }

      inputRef.current.focus();

    }
    else {
      const allowedKeys = ['0', '1', '+', '-', '*', '/', '.'];
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
      <div className="calculator-container">
      <div className="calculator-title">Binary Calculator</div>
      <input 
        autoFocus={true}
        ref={inputRef}
        className="calculator-input"
        type="text" 
        value={value} 
        onKeyDown={handleKeyDown}
      />
      
      <div className="calculator-grid">  
        <button className="calculator-button two-block" onClick={handleClear}>AC</button>
        <button className="calculator-button" onClick={handleDelete}>DEL</button>
        
        <button className="calculator-button three-block" onClick={() => handleClick('0')}>0</button>
        <button className="calculator-button three-block" onClick={() => handleClick('1')}>1</button>
        <button className="calculator-button operator-button" onClick={() => handleClick('*')}>*</button>
        <button className="calculator-button operator-button" onClick={() => handleClick('-')}>-</button>
        <button className="calculator-button operator-button" onClick={() => handleClick('+')}>+</button>
        <button className="calculator-button operator-button" onClick={() => handleClick('/')}>/</button>
        <button className="calculator-button" onClick={() => handleClick('.')}>.</button>
        <button className="calculator-button equals-button" onClick={() => handleRes('=')}>=</button>
      </div>
    </div>
    </>
  );
};

export default Binary;

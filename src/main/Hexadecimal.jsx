import React, { useRef, useState } from 'react';
import './CSS/Hexadecimal.css'
const Hexadecimal = () => {
  
  const [value, setValue] = useState('');
  const inputRef = useRef(null);


  const handleRes = (e) =>{
    
    const inputString = value;


    const operator = inputString.match(/[+\-*/]/)[0];

    const [hexa1, hexa2] = inputString.split(operator);

    switch(operator) {
      case "+":
          
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1 + dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        
        break;
      case "-":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1 - dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        break;
      case "*":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1*dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        break;
      case "/":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1/dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
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

      const [hexa1, hexa2] = inputString.split(operator);

      switch(operator) {
        case "+":
          
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1 + dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        
        break;
      case "-":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1 - dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        break;
      case "*":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1*dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        break;
      case "/":
          var dec1 = parseInt(hexa1, 16);
          var dec2 = parseInt(hexa2, 16);
          var res = dec1/dec2;
          var hexaRes = res.toString(16)
          setValue(hexaRes);
        break;
      default:
        text = "Invalid Input...";
      }

      inputRef.current.focus();

    }
    else {
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7','8','9', 'A', 'B', 'C', 'D', 'E', 'F', '+', '-', '*', '/', '.'];
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
      <div className="hexa-calculator">
      <div className="calculator-title">Hexadecimal Calculator</div>
      <input 
        autoFocus={true}
        ref={inputRef}
        className="hexa-input"
        type="text" 
        value={value} 
        onKeyDown={handleKeyDown}
      />
      
      <div className="hexa-grid">
        <button className="hexa-button wide" onClick={handleClear}>AC</button>
        <button className="hexa-button wide" onClick={handleDelete}>DEL</button>
        <button className="hexa-button" onClick={() => handleClick('0')}>0</button>
        <button className="hexa-button" onClick={() => handleClick('1')}>1</button>
        <button className="hexa-button" onClick={() => handleClick('2')}>2</button>
        
        <button className="hexa-button operator" onClick={() => handleClick('+')}>+</button>
        <button className="hexa-button" onClick={() => handleClick('3')}>3</button>
        <button className="hexa-button" onClick={() => handleClick('4')}>4</button>
        <button className="hexa-button" onClick={() => handleClick('5')}>5</button>
        
        <button className="hexa-button operator" onClick={() => handleClick('-')}>-</button>
        <button className="hexa-button" onClick={() => handleClick('6')}>6</button>
        <button className="hexa-button" onClick={() => handleClick('7')}>7</button>
        <button className="hexa-button" onClick={() => handleClick('8')}>8</button>
        
        
        <button className="hexa-button operator" onClick={() => handleClick('*')}>×</button>
        
        <button className="hexa-button" onClick={() => handleClick('9')}>9</button>
       
        
        <button className="hexa-button" onClick={() => handleClick('A')}>A</button>
        <button className="hexa-button" onClick={() => handleClick('B')}>B</button>
        <button className="hexa-button operator" onClick={() => handleClick('/')}>÷</button>
        <button className="hexa-button" onClick={() => handleClick('C')}>C</button>
        <button className="hexa-button" onClick={() => handleClick('D')}>D</button>
        <button className="hexa-button" onClick={() => handleClick('E')}>E</button>
        <button className="hexa-button" onClick={() => handleClick('F')}>F</button>
        <button className="hexa-button wide" onClick={() => handleClick('.')}>.</button>
        <button className="hexa-button wide" onClick={() => handleRes('=')}>=</button>
      </div>
    </div>
    </>
    
  )
}

export default Hexadecimal
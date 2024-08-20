import React, { useRef, useState } from 'react';
import './CSS/Decimal.css'

const Decimal = () => {
  
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   const filteredValue = inputValue.replace(/[^0123456789+\-*/.]/g, ''); // Allow only 0, 1, +, -, *, /, and .
   

  // };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setValue(String(eval(value)));
    }
    else {
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
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
      <div className="decimal-calculator">
      <div className="calculator-title">Decimal Calculator</div>
      <input 
        autoFocus={true}
        ref={inputRef}
        className="decimal-input"
        type="text" 
        value={value} 
        onKeyDown={handleKeyDown}
      />
      
      <div className="decimal-grid">
        <button className="decimal-button wide" onClick={handleClear}>AC</button>
        <button className="decimal-button wide" onClick={handleDelete}>DEL</button>
        
        <button className="decimal-button" onClick={() => handleClick('1')}>1</button>
        <button className="decimal-button" onClick={() => handleClick('2')}>2</button>
        <button className="decimal-button" onClick={() => handleClick('3')}>3</button>
        <button className="decimal-button operator" onClick={() => handleClick('+')}>+</button>
        
        <button className="decimal-button" onClick={() => handleClick('4')}>4</button>
        <button className="decimal-button" onClick={() => handleClick('5')}>5</button>
        <button className="decimal-button" onClick={() => handleClick('6')}>6</button>
        <button className="decimal-button operator" onClick={() => handleClick('-')}>-</button>
       
        <button className="decimal-button" onClick={() => handleClick('7')}>7</button>
        <button className="decimal-button" onClick={() => handleClick('8')}>8</button>
        <button className="decimal-button" onClick={() => handleClick('9')}>9</button>
        <button className="decimal-button operator" onClick={() => handleClick('*')}>×</button>
        
        
        <button className="decimal-button" onClick={() => handleClick('0')}>0</button>
        <button className="decimal-button wide" onClick={() => handleClick('.')}>.</button>
        <button className="decimal-button operator" onClick={() => handleClick('/')}>÷</button>
        
        <button className="decimal-button wide" onClick={(e) => setValue(String(eval(value)))}>=</button>
      </div>
    </div> </>
  )
}

export default Decimal
import React, { useRef, useState } from 'react';

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
      <div>Binary</div>
      <input 
        autoFocus={true}
        ref={inputRef}
        className='db'
        type="text" 
        value={value} 
        onKeyDown={handleKeyDown}

      />
      
      <div className='calculator-grid'>  
        <div className='output'>
          <div className='previous-inp'></div>
          <div className='current-inp'></div>
        </div>
        <button className='two-block' onClick={handleClear}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button className='three-block' onClick={() => handleClick('0')}>0</button>
        <button className='three-block' onClick={() => handleClick('1')}>1</button>
        <button className='two-block' onClick={() => handleClick('/')}>/</button>
        <button className='two-block' onClick={() => handleClick('*')}>*</button>
        <button className='two-block' onClick={() => handleClick('-')}>-</button>
        <button className='two-block' onClick={() => handleClick('+')}>+</button>
        <button className='two-block' onClick={() => handleClick('.')}>.</button>
        <button className='two-block' onClick={() => handleRes('=')}>=</button>
      </div>
    </>
  );
};

export default Binary;

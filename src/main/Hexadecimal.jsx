import React, { useRef, useState } from 'react';

const Hexadecimal = () => {
  
  const [value, setValue] = useState('');

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setValue(String(eval(value)));
    }
    else {
      const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F', '+', '-', '*', '/', '.'];
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
  return (
    <>
      <div>Hexadecimal</div>
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
        <button className='two-block' onClick={() => setValue('')}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button className='one-block' onClick={() => handleClick('/')}>/</button>
        <button className='one-block' onClick={() => handleClick('0')}>0</button>
        <button className='one-block' onClick={() => handleClick('1')}>1</button>
        <button className='one-block' onClick={() => handleClick('2')}>2</button>
        <button className='one-block' onClick={() => handleClick('3')}>3</button>
        <button className='one-block' onClick={() => handleClick('*')}>*</button>
        <button className='one-block' onClick={() => handleClick('4')}>4</button>
        <button className='one-block' onClick={() => handleClick('5')}>5</button>
        <button className='one-block' onClick={() => handleClick('6')}>6</button>
        <button className='one-block' onClick={() => handleClick('7')}>7</button>
        <button className='one-block' onClick={() => handleClick('-')}>-</button>
        <button className='one-block' onClick={() => handleClick('8')}>8</button>
        <button className='one-block' onClick={() => handleClick('9')}>9</button>
        <button className='one-block' onClick={() => handleClick('A')}>A</button>
        <button className='one-block' onClick={() => handleClick('B')}>B</button>
        <button className='one-block' onClick={() => handleClick('+')}>+</button>
        <button className='one-block' onClick={() => handleClick('C')}>C</button>
        <button className='one-block' onClick={() => handleClick('D')}>D</button>
        <button className='one-block' onClick={() => handleClick('E')}>E</button>
        <button className='one-block' onClick={() => handleClick('F')}>F</button>
        <button className='one-block' onClick={() => handleClick('.')}>.</button>
        
        <button className='two-block' onClick={() => alert('Compute logic not implemented yet!')}>=</button>
      </div>  
      
      
    </>
    
  )
}

export default Hexadecimal
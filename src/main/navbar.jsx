import React from 'react'
import {Link} from 'react-router-dom';
import './CSS/nav.css';

const Navbar = () => {
    
  return (
    <div>
        <header>
        <h1 className="main-heading">Calculator</h1>
        <h2 className="sub-heading">Choose your calculator</h2>
        </header>
        <nav className='nav'>
            <Link to="/Binary"><li className='binaryButton'>Binary</li></Link >
            <Link to="/Decimal"><li className='decimalButton'>Decimal</li></Link >
            <Link  to="/Octal"><li className='octalButton'>Octal</li></Link>
            <Link  to="/Hexadecimal"><li className='hexaButton'>Hexadecimal</li></Link >
            
        </nav>
    </div>

  )
}

export default Navbar
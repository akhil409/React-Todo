import React, { useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';

const Navbar = () => {

 const { push,replace } = useHistory();

  // useEffect(() => {
  //   console.log(history)
   

  // }, []);

  // const handleClick = (route) => {
  //   history.push(route)
  // }
  

  return (
        <nav >
          <img className='img' src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/000000/external-bike-e-commerce-fauzidea-outline-color-fauzidea.png"/>
          <ul className='row justify-content-center ml-5' >
              <li> <button className='mr-5' onClick={() => push('/')} > Home </button></li>
              <li> <button className='mr-5' onClick={() => push('/aboutus')} > About Us </button></li>
              <li> <button className='mr-5' onClick={() => push('/contactus')} > Contact Us </button> </li>      
          </ul>
        </nav>
  )
}

export default Navbar;
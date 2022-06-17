import React, { useContext } from 'react';
import {UserData} from './Context1';


const Context4 = () => {
    const Data = useContext(UserData);

  return (
    <div>
        <h1>This is from Context4 using Provider & useContext</h1>
          <center className="mt-5 h2" >
                I am a {Data.category} and also {Data.category1} 
          </center>
    </div>
  )
}

export default Context4
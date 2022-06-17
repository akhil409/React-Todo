import React from 'react';
import { UserContext } from '../../App';

const Context3 = () => {

  return (
    <div>
        <center>
        <h1>This is from Context3 using Provider & Consumer</h1>
              <UserContext.Consumer>
                        {value=> <div className='mt-5 h2'>I am a {value.category} and aslo {value.category1}</div>}
              </UserContext.Consumer>
               
        </center>
    </div>
  )
}

export default Context3
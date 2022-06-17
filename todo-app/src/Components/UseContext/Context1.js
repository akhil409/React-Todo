import React from 'react';
import Context2 from './Context2';
import Context4 from './Context4';

export const UserData = React.createContext();

const Context1 = () => {
  return (
    <div>
        
        <UserData.Provider value={ {category:"Front-End Developer",
              category1:"Backend Developer" } }>
                    <Context2 />
        </UserData.Provider>

    </div>
  )
}

export default Context1
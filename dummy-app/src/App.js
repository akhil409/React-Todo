import { useState } from 'react';
import './App.css';
import Data from './Components/Data/Data';
import Todo from './Components/Todo/Todo';

function App() {
  const [todos, settodos] = useState([]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Todo todos={todos} settodos={settodos} />
        </div>
      </div>
      
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Data todos={todos} settodos={settodos} />
        </div>
      </div>
    </div>
  );
}

export default App;

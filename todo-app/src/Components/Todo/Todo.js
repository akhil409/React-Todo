import React, { useState } from "react";

const Todo = (props) => {
    const [myText,setMyText] = useState('');

    const handleEvent=()=>{
         let updatedTodos = [...props.todos];
         updatedTodos.push(myText);
         props.setTodos(updatedTodos);
    }

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <p className="text-center h2">Todo</p>
        </div>
        <hr />

        <div className="row mt-5 mb-5 mr-5 ml-5">
           <div className="col-sm-6">
            <input type="text" value={myText} onChange={(event)=>{
                setMyText(event.target.value)
            }} className="form-control"/>
           </div>

           <div className="col-sm-6 text-center">
            <button className="btn btn-primary" onClick={handleEvent} >
                Add Todo</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Todo;

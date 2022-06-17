import React, { useState } from 'react'

const Todo = (props) => {
  const [myText, setmyText] = useState('');

  const handleTodo = () => {
    let updatedTodos = [...props.todos];
    updatedTodos.push(myText)
    props.settodos(updatedTodos)
  } 

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <p className="text-center h2">Todo</p>
        </div>
        <hr />
        <div className="row mt-5 mb-5 mr-3 ml-3">
          <div className="col-sm-6">
            <input type="text" value={myText} onChange={(event) => {
              setmyText(event.target.value)
            }} className="form-control" />
          </div>
          <div className="col-sm-6 text-center">
            <button className="btn btn-primary" type='button' 
            onClick={handleTodo}
            >Add Todo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
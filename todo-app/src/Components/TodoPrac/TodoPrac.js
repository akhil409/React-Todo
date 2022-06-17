import React, { useState,useEffect,useRef } from 'react';

const TodoPrac = (props) => {
      const [text,setText] = useState('');

    const handleText = (e)=>{
        if(text!==''){
            let updatedTodo = [...props.todos];
            let index = updatedTodo.length ? updatedTodo.length : 0
            updatedTodo.push({
                text : text,
                status : false,
                index : index
            });
            props.setTodos(updatedTodo)
        }
    }

    return ( 
       <div className='card'>
           <div className="card-body">
               <div className="card-title">
                   <p className='text-center h2'>Add Some Todos</p>
                </div>

                <div className="row justify-content-center">
                   <div className='col-lg-6 col-md-6 col-sm-12'>
                   <input value={text} className='form-control' type="text" placeholder="Enter your Todo" onChange={(e)=> setText(e.target.value)} />
                   </div>
                </div>

                <br />

                 <div className='ml-5 mr-5 text-center'>
                      <button className='btn btn-primary' onClick={handleText}>Add Todo</button>
                 </div>
            
           </div>
       </div>
     );
}
 
export default TodoPrac;
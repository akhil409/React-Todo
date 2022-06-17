import React, { useState,useEffect,useRef } from 'react';

const DataPrac = ({filter, todos, setTodos } ) => {

    const handleAction = (index) =>{
        const updatedTodos = [...todos];
        updatedTodos[index].status = !updatedTodos[index].status;
        setTodos(updatedTodos)
    }   

    return ( 
        
    <div className="card">
       {todos.length ? <table className='card-text text-center'>
            <thead className='table table-dark'>
                <tr>
                   <th>Data</th>
                   <th>Completed</th>
                   <th>In-Complete</th>
                </tr>
            </thead>
            <tbody>
                {todos.filter((todo) => {
                    if(filter === 'All') return true;

                    if(filter === 'completed') {
                        if(todo.status) return true
                    }
                    if(filter === 'incomplete') {
                        if(!todo.status) return true
                    }
                    return false
                }).map((todo, index) => {
                    return (
                        <tr key={index} id={index}>
                            <td>{todo.text}</td>
                            <td> <button className='btn btn-success m-1' disabled={todo.status} onClick={() => handleAction(todo.index)}>
                                Completed</button> </td>
                            <td> <button className='btn btn-danger m-1'disabled={!todo.status}  onClick={() => handleAction(todo.index)}>
                                In-Complete</button> </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table> : <div>
                   <p className="text-center mt-2 h3">Please add Todos</p>
                  </div>
            }
    </div>
        
      );
}
 
export default DataPrac;
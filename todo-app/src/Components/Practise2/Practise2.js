 import React, { useState } from 'react';

// const Practise2 = (props) => {
//     return(
//         <div className="card">
//             <div className="card-body">
//                 <div className="card-title">
//                     <p className='text-center h2'>My Todo Data</p>
//                 </div>
//                <hr/>

//                <div className='card-text'>
//                 <table className='table table-dark'>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Completed</th>
//                             <th>Incomplete</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {props.myTodos.length ? (
//                              <>
//                            {props.myTodos.map((todo1,index)=>{
//                                 return (
//                                     <tr key={index}>
//                                        <td>{todo1}</td>
//                                        <td>
//                                            <button className="btn btn-success">Complete</button>
//                                        </td>
//                                        <td>
//                                            <button className="btn btn-danger">Incomplete</button>
//                                            </td>  
//                                    </tr>
//                                 );
//                             })} </>
//                          ) : (<></>)}
//                     </tbody>
//                 </table>
//                 </div> 
//             </div>
//         </div>
//     )
// }

// export default Practise2;

// const Practise2 = ({filter,todos,setTodos}) => {
// //    const [data,setData] = useState('')

//  const handleAction =(index)=>{
//      let updatedTodoo = [...todos];
//      updatedTodoo[index].status = !updatedTodoo[index].status;
//      setTodos(updatedTodoo);
//  }

//   return (
//        <div className="card">
//            {todos.length ? <table className='card-text text-center'>
//              <thead className='table table-dark'>
//                  <tr>
//                      <th>Data</th>
//                      <th>Completed</th>
//                      <th>In-Complted</th>
//                  </tr>
//              </thead>
//              <tbody>
//                  {todos.filter((todo)=>{
//                      if(filter === "All") return true;
//                      if(filter === "completed") {
//                          if(todo.status) return true
//                      }
//                      if(filter === 'incomplete'){
//                          if(!todo.status) return true
//                      }

//                      return false;
                       
//                  }).map((todo,index)=>{
//                       return (
//                          <tr key={index} id={index}>
//                          <td >{todo.text}</td>
//                          <td>
//                              <button className='btn btn-success' disabled={todo.status} onClick={()=> handleAction(todo.index)}>Completed</button>
//                          </td>
//                          <td>
//                              <button className='btn btn-danger' disabled={!todo.status} onClick={()=> handleAction(todo.index)}>In-Complted</button>
//                          </td>
//                      </tr>
//                       )
//                  })}
//              </tbody>
//          </table> : <div> <p className='text-center h2 mt-2'>Add Some Todos</p> </div>}
//    </div>  
    
//   )
// }

// export default Practise2

//Practise
const Practise3 = ({filter,todos,setTodos}) => {
   
    const handleUpdatedTodo =(index)=>{
        let updatedTodo2 = [...todos];
        updatedTodo2[index].status = !updatedTodo2[index].status;
        setTodos(updatedTodo2);
    }

    return (
      <div className="card" id='card2'>
          {todos.length ? <table className="card-text text-center" >
                      <thead className="table table-dark">
                          <tr>
                              <th>All</th>
                              <th>Completed</th>
                              <th>In-Complete</th>
                          </tr>
                      </thead>
                      <tbody>
                          {todos.filter((todo)=>{
                              if(filter === "All") return true;
                              if(filter === "completed"){
                                  if(todo.status) return true;
                              }
                              if(filter === "incomplete"){
                                  if(!todo.status) return true;
                              }
                              return false;
                          }).map((todo,index)=>{
                                return (
                                    <tr key={index} id={index}>
                                    <td> {todo.text} </td>
                                    <td>
                                        <button className="btn btn-success" disabled={todo.status} onClick={()=> handleUpdatedTodo(todo.index)}>Completed</button>
                                    </td>
                                    <td>
                                       <button className="btn btn-danger" disabled={!todo.status} onClick={()=> handleUpdatedTodo(todo.index)}>In-Complete</button>
                                    </td>
                                </tr>
                                )
                          })}

                          
                      </tbody>
                  </table>
           : <div className='text-center h3'> <p className='mt-2'>Add Some Todos</p> </div>}
          
      </div>
    )
  }
  
  export default Practise3;
import React from 'react'

const Data = (props) => {
  return (
    <div className="card">
        <div className="card-body">
            <div className="card-title">
                <p className='text-center h2'>My Todos Data</p>
            </div>
            <hr />
            
            <div className="card-text">
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Complete</th>
                            <th>Incomplete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.todos.length ? (
                            <>
                           {props.todos.map((todo,index)=>{
                               return (
                                 <tr key={index}>
                                  <td>{todo}</td>
                                  <td>
                                        <button className="btn btn-success">Complete</button>
                                  </td>
                                  <td>
                                        <button className="btn btn-danger">Incomplete</button>
                                  </td>  
                                </tr>
                              );
                            })} </>    
                        ) : (<></>)}  
                    </tbody>

                </table>
            </div>

        </div>
    </div>
  );
};

export default Data;
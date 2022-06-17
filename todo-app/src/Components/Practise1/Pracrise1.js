 import React, {useState} from 'react';

// const Practise1 = (props) => {
//      const [myText,setMyText] = useState('');

//      const handleEvent=()=>{
//          let updatedTodos = [...props.myTodos];
//          updatedTodos.push(myText);
//          props.setMyTodos(updatedTodos);
//      }

//     return(
//         <div className="card">
//             <div className="card-body">
//                 <div className="card-title">
//                     <p className='text-center h2'>Todo</p>
//                 </div>
//                 <hr />

//                 <div className="row mt-5 mb-5 ml-5 mr-5">
//                     <div className="col-lg-6">
//                          <input type="text" value={myText} onChange={(event)=>{
//                            setMyText(event.target.value)
//                          }}  className='form-control'/>
//                    </div>

//                     <div className="col-lg-6 text-center">
//                          <button onClick={handleEvent} className='btn btn-primary'>Add Todo</button>
//                     </div>
//                 </div>
                
                
//             </div>
//         </div>
//     )
// }

// // export default Practise1;

// import React, { Component } from 'react';

// const pract = (props)=>{
//     return(
//         <div>
//             <h2>{props.value} Child Component.....! </h2>
//         </div>
//     )
// }

// export default pract;

// const Pracrise1 = (props) => {
//     const [text,setText] = useState('');

//     const handleTodo = (e) =>{
//       if(text!==''){
//         let updatedTodo = [...props.todos];
//         let index = updatedTodo.length ? updatedTodo.length : 0;
//         updatedTodo.push({
//             text:text,
//             index:index,
//             status: false
//         });
//         props.setTodos(updatedTodo);
//       }
//     }

//   return (
//     <div className="card">
//         <div className="card-body">
//             <div className='card-title'>
//                 <p className='text-center h2 mt-4'>Add Todos</p>
//             </div>
        
//             <div className='text-center mt-4'>
//                 <input type="text" className='form-control' value={text} onChange={(e)=> setText(e.target.value)}/>
//             </div>

//             <div className='text-center mt-3 mb-3'>
//                 <button className='btn btn-primary' onClick={handleTodo}>Add Todo</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Pracrise1

//Practise
const Pracrise1 = (props) => {
   const [text,setText] = useState('');

   
    const handleTodo = (index) =>{
        if(text!==''){
        const updatedTodo1 = [...props.todos];
        index = updatedTodo1.length ? updatedTodo1.length : 0;
        updatedTodo1.push({
            text:text,
            index:index,
            status:false
        });
        props.setTodos(updatedTodo1);
    }
   }
   

  return (
    <div className='card' id="card1">
        <div className="card-body">
            <div className="card-title">
                <p className='text-center h2'>Add Some Todos</p>
            </div>

            <div className='row justify-content-center'>
                  <input type="text"  className='form-control' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter your Todos....'/>
            </div>

            <div className='text-center mt-3'>
                <button className='btn btn-primary' onClick={handleTodo}>Add Todos</button>
            </div>
        </div>
    </div>
  )
}

export default Pracrise1;
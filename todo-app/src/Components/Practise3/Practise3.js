// import React from 'react'

// const Practise3 = ({setFilter}) => {

//     const displayAll = () =>{
//         setFilter('All')
//     }

//     const completed = () =>{
//         setFilter('completed')
//     }

//     const InCompleted = () =>{
//         setFilter('incomplete')
//     }

//   return (
//     <div className='row md-3'>
        
//             <div className='col-sm-4 text-center'>
//                 <button className='btn btn-dark' onClick={displayAll}>All</button>
//             </div>

//             <div className='col-sm-4 text-center'>
//             <button className='btn btn-dark' onClick={completed}>Completed</button>
//             </div>

//             <div className='col-sm-4 text-center'>
//             <button className='btn btn-dark' onClick={InCompleted}>In-Completed</button>
//             </div>
        
//     </div>
//   )
// }

// export default Practise3

//Practise
const Practise2 = ({setFilter}) => {
    
    const displayAll = ()=>{
        setFilter('All')
    }

    const displayCompleted = ()=>{
        setFilter('completed')
    }

    const displayInCompleted = ()=>{
        setFilter('incomplete')
    }

    return (
      <div className="row justify-content-center">
          <div className="col-sm-4">
              <button className="btn btn-dark ml-1" onClick={displayAll}>All</button>
          </div>

          <div className="col-sm-4">
              <button className="btn btn-dark ml-2" onClick={displayCompleted}>Completed</button>
          </div>

          <div className="col-sm-4">
              <button className="btn btn-dark ml-4" onClick={displayInCompleted}>In-Completed</button>
          </div>
      </div>
    )
  }
  
  export default Practise2;
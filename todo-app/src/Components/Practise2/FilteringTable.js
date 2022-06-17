import React from 'react'

const FilteringTable = ({setFilter}) => {
    const displayAll = () =>{
        setFilter("All")
  }

  const displayCompleted = () =>{
      setFilter("completed")

  }

  const displayInCompleted = () =>{
      setFilter("incomplete")  
  }
  return (
    <div className="row mb-3">
            <div className="col-sm-4 text-center">
                <button className='btn btn-dark' onClick={displayAll}>All</button >
            </div>

           <div className="col-sm-4 text-center">
               <button className='btn btn-dark' onClick={displayCompleted}>Completed</button> 
            </div>

           <div className="col-sm-4 text-center">
               <button className='btn btn-dark' onClick={displayInCompleted}>In-Complete</button>
          </div>
    </div>
  )
}

export default FilteringTable;
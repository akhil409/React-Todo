import React,{useEffect, useRef} from 'react'

const UseRef = () => {
    
    const data = useRef(null);
    const submitHandler= (e) =>{
          e.preventDefault();
        console.log(data.current.value)
    }

    //Auto Focussing
    useEffect(()=>{
        data.current.focus();
    })

  return (
   <>
     <form onSubmit={submitHandler}>
         <input ref={data} type="text" placeholder='Enter your Name'/> <br />
         <input type="submit" />         
     </form>    
   </>
  )
}

export default UseRef;
import React, { useState,useEffect } from 'react';

// const UseeffectExample = () => {
   
//     const [resourceType,setResourceType] = useState('posts');
//     const [items,setItems] = useState([]);

//     useEffect( () => {
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then(response => response.json())
//         .then(json => setItems(json))
//         console.log('Resource Changed');

//         return () =>{
//             console.log('Return from resource change')
//         }
//     },[resourceType]);

//     return ( 
//       <>
//         <div>
//             <button onClick={()=> setResourceType('posts')}>Posts</button>
//             <button onClick={()=> setResourceType('users')}>Users</button>
//             <button onClick={()=> setResourceType('comments')}>Comments</button>
//         </div>
//         <h1>{resourceType}</h1>
//        {items.map((item,index) => 
//             {
//                 return <pre key={index}>{JSON.stringify(item)} </pre>
//             })}
//       </> 
//      );
//  }
 
// export default UseeffectExample;


// // //Window Resize Example of useEffect
// const WindowResize =() => {
//         //Window Resize Example of useEffect
//         const [windowWidth,SetWindowWidth] = useState(window.innerWidth)
//     const resizeHandler = () =>{
//         SetWindowWidth(window.innerWidth)
//        }
    
//        useEffect(()=>{
//            window.addEventListener('resize', resizeHandler);
    
//            //For deleting the previous value
//            return () =>{
//             window.removeEventListener('resize',resizeHandler);
//            }
//        },[])
    
//       return (
//         <div>
//         {windowWidth}
//        </div>
//       )
// }

// export default WindowResize;


// //Timer as an example using useEffect
// Only run the effect on the initial render:
// //Reference : https://www.w3schools.com/react/react_useeffect.asp

// const Timer = ()=>{
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count) =>count+1)
//         },1000)
//     },[])
    
//     return (
//         <h2>I have rendered {count} times....!</h2>
//     )
// }


// // // Count with Calaculation
// // //Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
// const TimerCalculation = () => {
//    const [count,setCount] = useState(0);
//    const [calculation,setCalculation] = useState(0);

//    useEffect(()=>{
//        setCalculation(()=> count * 2)
//    },[count])

//     return ( 
//      <>
//      <p>Count: {count}</p>
//      <button onClick={()=> setCount((c)=> c+1) }>+</button>
//      <p>Calculation: {calculation}</p></>
//      );
// }
 
// export default TimerCalculation;


// //Clean up the timer at the end of the useEffect Hook:
// const CleanUp = () => {
//     const [count,SetCount] = useState(0);

//     useEffect( ()=>{
//         let timer = setTimeout(()=>{
//             SetCount((count)=> count+1)
//         },1000)

//         return ()=> clearTimeout(timer)
//     },[]);

//     return ( 
//         <h1>I have renders {count} times</h1>
//      );
// }
 
// // export default CleanUp;
const StringEffect = () => {
    const [message,SetMessage] = useState('Hi there how you doing?');

    useEffect(()=>{
        setTimeout(()=>{
            SetMessage('Hi i am good here...!')
        },2000)
     }
        
    )
    
    return ( 
        <h1>{message}</h1>
     );
}
 
export default StringEffect;

//Use this function in App Component - so component will hide if the button pressed
// const HideComponent = () => {
//     const [showComponent,SetShowComponent] = useState(true)

//     return ( 
//         <>
//            <button onClick={()=> SetShowComponent(false) }>Hide Component</button>
//            {showComponent && <UseEffect />}

//         </>
//      );
// }
 
// export default HideComponent;
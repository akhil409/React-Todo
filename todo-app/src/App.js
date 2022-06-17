import React from 'react';
import "./App.css";
import { useState } from "react";
import Todo from "./Components/Todo/Todo";
import Data from "./Components/Data/Data";
import Practise1 from "./Components/Practise1/Pracrise1";
import Practise2 from "./Components/Practise2/Practise2";
import Practise3 from "./Components/Practise3/Practise3";
import UseEffect from "./Components/UseEffect/UseEffect"
import UseRef from "./Components/UseRef/UseRef";
import TodoPrac from "./Components/TodoPrac/TodoPrac";
import DataPrac from "./Components/DataPrac/DataPrac";
import FilteringTable from "./Components/Practise2/FilteringTable";
import Navbar from "./Components/Router/Navbar";
import { BrowserRouter,Route,Switch,Routes } from "react-router-dom";
import ContactUs from "./Components/Router/ContactUs";
import AboutUs from "./Components/Router/AboutUs";
import Home from "./Components/Router/Home";
import NewForm from "./Components/Router/NewForm";
import Password from "./Components/Router/Password";
import Context3 from './Components/UseContext/Context3';
import Context1 from './Components/UseContext/Context1';
import { DummyContextProvider } from './Components/UseContext/ContextN';
// import UseContextPrac2 from './Components/UseContextPrac';

// function App() {
//    const [todos,setTodos] = useState([]);

//   return (
//     <div className="container">

//       <div className="row justify-content-center mt-5">
//         <div className="col-lg-6 col-md-6 col-sm-12">
//           <Todo  todos = {todos}  setTodos = {setTodos}/>
//         </div>
//       </div>

//       <div className="row justify-content-center mt-5">
//           <div className="col-lg-6 col-md-6 col-sm-12">
//             <Data  todos = {todos}  setTodos = {setTodos}/>
//           </div>
//       </div>      
//     </div>
//   );
// }

// export default App;

//Use State Hook Example
// function App() {
//   const [myTodos,setMyTodos] = useState([]);


//   return(
//     <div className="container">
//          <div className="row justify-content-center mt-5">
//              <div className="col-lg-6 col-md-6 col-sm-12">
//                  <Practise1 myTodos = {myTodos} setMyTodos = {setMyTodos}/>
//              </div>
//          </div>

//          <div className="row justify-content-center mt-5">
//             <div className="col-lg-6 col-md-6 col-sm-12">
//                  <Practise2 myTodos = {myTodos} setMyTodos = {setMyTodos}/>
//             </div>
//          </div>
//     </div>
//   );

// }

//Use State Basic Hook Example
// function App() {
//     const [myValue,setMyValue] = useState('This is from') 

//    return (
//      <div>
//        <center>
//        <h2>{myValue} Parent Component</h2>
//        <Practise1 value={myValue}/>
//        </center>
//      </div>
//    )

// }

// const App = () => {
//   return ( 
//      <div>
//          <center className="h1 mt-5">
//          <UseEffect /> <br />
//          <UseRef />
//          </center>
//     </div>
//    );
// }
 

// export default App;

// // Todos Data with filtering method
// function App (){
//    const [todos,setTodos] = useState([]);
//    const [filter, setFilter] = useState('All')

//   return(
//     <div className="container">
//         <div className="row justify-content-center mt-4">
//           <div className="col-lg-6 col-md-6 col-sm-12">
//                 <TodoPrac todos={todos} setTodos={setTodos}/>
//           </div>
//         </div>

//         <div className="row justify-content-center mt-4">
//           <div className="col-lg-6 col-md-6 col-sm-12">
//                 <FilteringTable setFilter={setFilter} />              
//           </div>
//         </div>
        
//         <div className="row justify-content-center mt-4">
//           <div className="col-lg-6 col-md-6 col-sm-12">
//               <DataPrac filter={filter} todos={todos} setTodos={setTodos}/>
              
//           </div>
//         </div>

//     </div>
//   )
// }

// export default App;

//// React Router DOM
// function App() {
//   return (
//     <div> 
//       <BrowserRouter>
//               <Navbar />
//           <Switch>
//               <Route path='/' exact component={Home} />
//               <Route path='/todo' exact component={Todo} />
//               <Route path='/password' exact component={Password} />
//               <Route path='/newform' exact component={NewForm} />              
//               <Route path='/aboutus' exact component={AboutUs} />
//               <Route path="/contactus" exact component={ContactUs} />    
//           </Switch>      
//       </BrowserRouter>

//   {/* <BrowserRouter>
//               <Navbar/>
//           <Routes>
//               <Route exact path='/' element={ <Home /> }> </Route> 
//               <Route exact path='/todo' element={ <Todo /> }> </Route>
//               <Route exact path='/password' element={ <Password /> }> </Route>
//               <Route exact path='/newform' element={ <NewForm />}> </Route>             
//               <Route exact path='/aboutus' element={ <AboutUs />  }> </Route>
//               <Route exact path="/contactus" element={ <ContactUs /> }> </Route>             
//           </Routes>      
//   </BrowserRouter> */}

//     </div>
//   )
// }

// export default App;

// //Use Context
export const UserContext=React.createContext();

function App(){

  return(
 <>
     <DummyContextProvider>
     <BrowserRouter>
     <Routes>
          
     </Routes>
     </BrowserRouter>
     </DummyContextProvider>
     
       <div className='mt-5'>
          <div className="card">
               <div className="card-body">
               <div className='context'>

                   <UserContext.Provider value={ {category:"React Developer",
                      category1:"Angular Developer" } } >
                                <Context3 />
                  </UserContext.Provider> 

               </div>
               </div>
               
          </div>
            <br />
          <div className="card">
               <div className="card-body">
                   
                   <div className='context1'>
                           <Context1 />
                  </div>
               </div>
               
          </div>
          {/* <br />
          <div className="card">
               <div className="card-body">
                   
                   <div className='context1'>
                        <UseContextPrac2 />
                  </div>
               </div>
               
          </div> */}

       </div>
       </>
  )
}

export default App;
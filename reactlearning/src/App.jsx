// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="min-h-screen bg-stone-50">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// hook => predefined functions in React
// useState => allows us to add state to functional components
// useEffect => allows us to perform side effects in functional components
// useRef => allows us to create a reference to a DOM element or a value that persists across renders
// useContext => allows us to access the context value in a functional component
// useReducer => allows us to manage complex state logic in a functional component
// useMemo => allows us to memoize a value so that it is only recalculated when its dependencies change
// useCallback => allows us to memoize a function so that it is only recreated when its dependencies change
// useLayoutEffect => similar to useEffect, but it fires synchronously after all DOM mutations
// useDebugValue => allows us to display a label for custom hooks in React DevTools
// useImperativeHandle => allows us to customize the instance value that is exposed when using ref in a parent component
// useTransition => allows us to manage concurrent rendering in React
// useDeferredValue => allows us to defer a value until the next render
// useId => allows us to generate a unique ID that is stable across server and client renders
// useSyncExternalStore => allows us to subscribe to an external store and re-render when the store changes
// useInsertionEffect => allows us to insert styles into the DOM before the browser paints

import { useState, useEffect } from "react";
import ExpenseFrom from "./Components/ExpenseFrom";


function App() {
  const [expenses, setExpense] = useState([])

  const addexpense = (expense) => {

    setExpense([...expenses, expense])
  }

  return (
    <>
      <h1 className="font-bold text-3xl text-center">Expense Tracker</h1>
      {/* <button className="border-s-gray-300 p-2 ml-80  hover:bg-amber-500 bg-amber-800 " onClick={addexpense}>Add Expense</button> */}
      <p className="text-center font-bold text-3xl">{expenses.length}</p>

      <ExpenseFrom Onexpense={addexpense} />
    </>
  )
}

export default App;



//add expense 
// delete 
// search
// filter by category
//total expense
//dark light theme
//form
//local storage
//optimization by usememo and usecallback
// usecontext
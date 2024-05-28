import { useState } from 'react'



function App() {

  // Now here in the function before the"return" , we can actually declae the variables .
  const userName = "I AM SHANTANU"
  // After declaring the variable in the function we can actually mention those variable references in {}.
  //  Now below the {userName} is called as the evaluated expression.
  // evaluated expressions within JSX is used to dynamically render content based on variables or expressions.
  // Note that any embedded Javascript is not allowed to be written in the evaluated expression , they should be in the function. 
  // and in evaluation expression we can only pass the variables not the lopp function or forloop etc...because at last it in in obeject{}and we  cannot use withing the object

  // Note but if we are declaring anything globally then we can only mention the element's name in an evaluated expression.
  // // example of declaring a variable globally to see its execution. (in main.jsx)
  

  return (
    <>
    <h5>Hello everyone , i am {userName}</h5>
    
    </>
  )
}

export default App
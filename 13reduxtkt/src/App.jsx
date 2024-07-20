/*The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

    "Configuring a Redux store is too complicated"
    "I have to add a lot of packages to get Redux to do anything useful"
    "Redux requires too much boilerplate code"
    
    Redux Toolkit also includes a powerful data fetching and caching capability that we've dubbed "RTK Query". It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself.*/

import AddTodo from "./components/Addtodo"
import Todos from "./components/Todos"

function App() {


  return (
  <>
  <h1> Learn About Redux</h1>

  <AddTodo/>
 <Todos/>     
                   


  </>
  )
}

export default App

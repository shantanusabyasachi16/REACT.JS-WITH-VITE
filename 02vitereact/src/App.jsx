import React, { useState } from 'react';
import User from './user';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>learning React | shantanu</h2>
      <p>hi</p>
    <User/>
    </div>
  
  )
}

export default App

//in line number10 jsx elemnt must be wrraped in aneclosing tagand only one elemt can be export
//to make it correct we will insert aal other element in one div


/*<> <h2>learning React | shantanu</h2>
<p>hi</p>
<User/> </>
 we can also use fragmant */

import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
  // Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login


import './App.css'
import Login from './componemts/Login'
import Profile from './componemts/Profile'
import UserContextProvider from './context/Usercontextprovider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>API CONTEXT</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
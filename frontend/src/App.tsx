import { Dashboard, HomePage } from "./pages"


interface User {
  loggedIn : boolean
}

let user : User = { //this is a dummy user for now until we implement state management for logged in user
    loggedIn: true,
}

function App() {
  return (
      <div>
        {!user.loggedIn ?  
        <HomePage/>
        : 
        <Dashboard />
        } 
    
      </div>
  )
}

export default App
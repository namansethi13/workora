import { MainLayout, Dashboard } from "./components"
import AdminPage from "./pages/AdminPage"

// interface User {
//   loggedIn : boolean
// }

// let user : User = { //this is a dummy user for now until we implement state management for logged in user
//     loggedIn: false,
// }

function App() {
  return (
      <div>
        {/* Main layout is the home page TODO: condintionally render this based on the user's logged in state*/}
        {/* {!user.loggedIn ?  */}
        {/* <MainLayout /> */}
        {/* : */}
        {/* <Dashboard />  */}
        {/* } */}
        {/* for now I am calling the logged in screen as dashboard let's see what we are going to name it in future */}


        <AdminPage />
        {/* <Dashboard /> */}

      </div>
  )
}

export default App
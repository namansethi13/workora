import { CreateTask, SideBar } from "./components"

function App() {
  return (
    // gradient just for testing
    <div className="flex min-h-svh from-blue-900 to-blue-950 bg-gradient-to-l p-4"> 
      <SideBar/>
      <div className="flex w-full h-full justify-center items-center">
        <CreateTask />
      </div>
    </div>
  )
}

export default App
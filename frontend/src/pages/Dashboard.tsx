import { Sidebar, SidebarToggler, Toggler } from '../components'
import { useState } from 'react'

function Dashboard() {

    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='flex min-h-screen bg-white dark:bg-custom-blue relative overflow-hidden'>
        <aside className={`relative flex flex-row transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '100px' }}>
                <Sidebar/>
                <div className='flex items-center'>
                    <SidebarToggler isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
        </aside>

        <main className={`flex-1 transtion-all duration-300 ease-in-out ${isOpen ? 'ml-[90px]' : 'ml-0'}`}>
            <div className="absolute top-10 right-15 z-50">
                <Toggler />
            </div>
            <h1>Dashboard page</h1>
        </main>
    </div>
  )
}

export default Dashboard

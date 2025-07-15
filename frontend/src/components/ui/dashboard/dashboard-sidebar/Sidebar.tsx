import { House, Layers2, Settings, LogOut, SearchIcon } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

interface SidebarOption {
    name : string
    icon: LucideIcon
    key : string
}

let sidebarTopOptions : SidebarOption[] = [
    {
        name: "Home",
        icon: House,
        key: "home"
    },
    {
        name: "Templates",
        icon: Layers2,
        key: "templates"
    },
    {
        name: "Ai search",
        icon: SearchIcon,
        key: "ai-search"
    },
    {
        name: "Settings",
        icon: Settings,
        key: "settings"
    },
   
]
let sidebarBottomOptions : SidebarOption[] = [
    {
        name: "Logout",
        icon: LogOut,
        key: "logout"
    },
    
   
]


export default function Sidebar() {
  return (
    <div className='fixed md:sticky bottom-0 md:top-0 md:left-0 w-full md:w-auto h-auto md:h-[95vh] bg-white/10 rounded-full flex md:flex-col px-6 py-4 cursor-pointer'>
      
      <div className="flex flex-row md:flex-col gap-4 w-full h-full justify-between">
        {/*top section */}
        <div className="flex flex-col gap-2">
            {sidebarTopOptions.map(option => (
              <button key={option.key} className="flex justify-center items-center bg-custom-gray p-4 rounded-full cursor-pointer hover:bg-custom-gray-400 transition-all">
                <option.icon color='black' />
              </button>
            ))}
        </div>


        {/* bottom section */}
        <div className="flex flex-col gap-2">
            {sidebarBottomOptions.map(option => (
              <button key={option.key} className="flex justify-center items-center bg-custom-gray p-4 rounded-full cursor-pointer hover:bg-custom-gray-400 transition-all">
                <option.icon color='black' />
              </button>
            ))}
        </div>
      </div>

    </div>
  )
}

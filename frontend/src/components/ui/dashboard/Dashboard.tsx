import Toggler from "../common/Toggler"
import Sidebar from "./dashboard-sidebar/Sidebar"


export default function Dashboard(){


    return (
        <div className="w-[100svw] flex min-h-svh bg-custom-white dark:bg-custom-blue">
            <aside className="h-svh w-fit p-4">
                <Sidebar />
            </aside>
            <div className="absolute top-10 right-15 z-50">
                <Toggler />
            </div>
        </div>
    )

}
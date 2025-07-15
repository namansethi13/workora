import CreateTask from "./CreateTask"
import SideBar from "./SideBar"
import Toggler from "./Toggler"

function MainLayout() {

    return (
        <div className="w-[100svw] flex min-h-svh bg-custom-white dark:bg-custom-blue">

            <aside className="h-svh w-fit p-4">
                <SideBar />
            </aside>

            {/* Header */}
            <div className="flex-1">
                <header className="w-full ml-[-80px] py-10 px-25">
                    <h1 className="text-9xl font-[jost] text-custom-blue dark:text-custom-white">Workora</h1>
                </header>

            <main className="p-6 mt-15 flex justify-center">
                <CreateTask />
            </main>

            <div className="absolute top-10 right-15 z-50">
                <Toggler />
            </div>

            </div>
        </div>
    )
}

export default MainLayout
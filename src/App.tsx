import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-white h-screen w-screen overflow-x-hidden">
      <div
        id="navbar"
        className="bg-blue-700 p-4 flex items-center h-14 fixed w-full z-10"
      >
        <p className="text-2xl font-medium ">Learning React JS</p>
      </div>
      <div className="flex mt-[56px]">
        <aside
          id="sidebar"
          className="bg-zinc-800 w-[320px] border-r-2 h-full fixed border-r-zinc-700"
        >
          <nav>sidebar</nav>
        </aside>
        <div id="content" className="flex-1 ml-80">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;

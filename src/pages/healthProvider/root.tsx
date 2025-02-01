import { Sidebar, Navbar } from "@/components/dashboard";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex h-[100vh] w-[100%] relative   ">
      {/* Sidebar component for navigation */}
      <Sidebar />
      <main className=" pb-20 custom-scrollbar overflow-y-scroll min-h-screen h-full  flex-1 transition  ">
        {/* Navbar component for the top navigation bar */}
        <Navbar />
        <div className="  p-3 md:p-6 custom-scrollbar  max-w-[1680px]  mx-auto  ">
          {/* Outlet renders the component based on the active route */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Root;

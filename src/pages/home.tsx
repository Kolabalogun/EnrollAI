import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "../components/common/scrollToTop";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      {/* <Hero />
      <ServiceCards />
      <Services />
      <Pricing />
      <Footer /> */}

      <ScrollToTopButton />
    </div>
    // <div className="flex inter flex-col justify-center inter space-y-6 items-center h-screen bg-gray-50">
    //   <div className="flex gap-4 items-center">
    //     <h1 className="text-lg font-bold  ">Home</h1>
    //     <div className="h-full w-[1px] bg-fade"></div>
    //     <h2 className="text-lg font-semibold  ">Oops!</h2>
    //   </div>
    //   <p className="text-xs mt-2 text-dark-200 font-medium text-center max-w-lg">
    //     Hey there, awesome visitor! 🌟 We know you were probably expecting to
    //     see an epic landing page right now, but... surprise! 🚧 It's still under
    //     construction. Stay tuned, because something amazing is coming your way
    //     soon!
    //   </p>
    //   <p className="text-xs mt-4 text-gray-800">
    //     But do you wanna see something beautiful?.
    //   </p>
    //   <a
    //     href="/login"
    //     className="mt-6 px-4 py-2 bg-blue text-white   text-xs font-medium rounded hover:bg-blue-600 transition duration-300"
    //   >
    //     Go to Login
    //   </a>
    // </div>
  );
};

export default Home;

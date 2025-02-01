import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex inter flex-col justify-center inter space-y-6 items-center h-screen bg-primary">
      <div className="flex gap-4  items-center">
        <h1 className="text-lg font-semibold plus-jakarta ">Home 🏡</h1>
      </div>
      <div className="h-[1.5px] w-[24px] bg-fade"></div>
      <h2 className="text-basw font-semibold plus-jakarta  ">
        Something exciting is on the Way!
      </h2>
      <p className="text-xs mt-2 p-5 font-semibold text-dark-200  text-center max-w-lg">
        {/* Hey there, awesome visitor! 🌟 npm run dev bvbsd  We know you were probably expecting to
        see an epic landing page right now, but... surprise! 🚧 It's still under
        construction. Stay tuned, because something amazing is coming your way
        soon! */}
        Our landing page is under construction, but in the meantime, why not
        check out our Login page?
      </p>
      {/* <p className="text-xs font-medium mt-4 text-gray-800">
        But do you wanna see something beautiful?.
      </p> */}
      <a
        href="/login"
        className="mt-6 px-4 py-2 bg-secondary text-white   text-xs font-medium rounded hover:bg-blue-600 transition duration-300"
      >
        Go to Login
      </a>
    </div>
  );
};

export default Home;

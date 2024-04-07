import { NavLink } from "react-router-dom";
import { GitHub, LinkedIn, X } from "@mui/icons-material";
import Transition from "./Transition";
import gsap, { Power4 } from "gsap";
import { useEffect, useRef } from "react";
function Home() {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);
  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewY: -100,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );
    home.to(
      homeimg.current,
      {
        duration: 1,
        y: -20,
        opacity: 1,
        ease: Power4.easeOut,
      },
      "--3.0"
    );
  });
  return (
    <div className="main-background !overflow-hidden">
      <title>Cherish Shed</title>
      <Transition timeline={home} />
      <div className="overlay"></div>
      <div className="min-h-full min-w-full !overflow-hidden">
        <div
          className="absolute top-[30%] h-full left-36 text-white flex flex-col gap-3  !overflow-hidden"
          ref={homeh1}
        >
          <p className="text-6xl font-bold">cherish shed</p>
          <p className="text-2xl text-gray-300">
            i'm a passionate{" "}
            <span className="border-b-2 border-orange-500 text-white">
              software engineer
            </span>{" "}
            from Nigeria
          </p>
          <nav className="flex gap-4 text-base mt-6 text-gray-300">
            <NavLink to="/" className="border-grow">
              home
            </NavLink>
            <NavLink to="/me/about" className="border-grow">
              about
            </NavLink>
            <NavLink to="/me/resume" className="border-grow">
              resume
            </NavLink>
            <NavLink to="/me/portfolio" className="border-grow">
              portfolio
            </NavLink>
            <NavLink to="/me/contact" className="border-grow">
              contact
            </NavLink>
          </nav>

          <div className="text-white flex gap-4">
            <a href="https://github.com/CherishShed">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/cherish-shed">
              <LinkedIn />
            </a>
            <a href="https://twitter.com/that_shedi">
              <X />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { Link, NavLink, Outlet } from "react-router-dom";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import Transition from "../pages/Transition";
function Nav() {
  const nav = gsap.timeline({ delay: 0 });
  const navh1 = useRef(null);
  const navimg = useRef(null);
  useEffect(() => {
    nav.from(
      navh1.current,
      {
        duration: 0.6,
        y: -200,
        opacity: 0,
        delay: 0,
      },
      "-=3.5"
    );
    nav.from(
      navimg.current,
      {
        duration: 0.5,
        y: 200,
        opacity: 0,
        delay: 0,
      },
      "-=3.5"
    );
  });
  return (
    <>
      <Transition timeline={nav} />
      <nav
        className={`flex justify-between px-[150px] py-5 items-center bg-[rgba(11,7,5)] text-gray-300 backdrop-blur-lg w-full relative z-50`}
      >
        <Link
          to={"/"}
          className="text-white text-2xl font-bold hover:text-amber-600"
          ref={navimg}
        >
          Cherish Shed
        </Link>
        <nav
          className="flex gap-4 text-base text-white items-center"
          ref={navh1}
        >
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
      </nav>
      <Outlet context={{ nameRef: navimg }}></Outlet>
    </>
  );
}

export default Nav;

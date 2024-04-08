import gsap from "gsap";
import { useEffect, useRef } from "react";

function Portfolio() {
  const about = gsap.timeline();
  const aboutsection = useRef(null);
  const aboutimg = useRef(null);
  useEffect(() => {
    about.from(
      aboutsection.current,
      {
        duration: 0.3,
        y: 20,
        opacity: 0,
        delay: 0.5,
      },
      "-=0"
    );
    about.from(
      aboutimg.current,
      {
        duration: 0.5,
        scale: 0.7,
        opacity: 0,
      },
      "-=1"
    );
  });
  return (
    <div>
      <title>Cherish Shed | portfolio</title>
      <div className="overlay p-10">
        <section className="w-[70%] mx-auto bg-[rgba(61,56,42,0.9)] p-4 text-white">
          <div className="flex gap-2 items-center !w-[80%]" ref={aboutsection}>
            <p className="text-3xl font-bold mb-3 flex items-center">
              <span className="text-7xl font-thin">{"{"}</span>
              <span>
                my <span className="border-b-4 border-amber-600">works</span>
              </span>
              <span className="text-7xl font-thin">{"}"}</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;

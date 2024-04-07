import { useEffect, useRef } from "react";
import "./transition.css";
import { Power4 } from "gsap";
function Transition({ timeline }: { timeline: gsap.core.Timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 4,
      x: 2500,
      ease: Power4.easeOut,
    });
  });
  return <div className="transition-effect" ref={trans}></div>;
}

export default Transition;

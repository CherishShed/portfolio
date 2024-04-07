import { Mail } from "@mui/icons-material";
// import Transition from "./Transition";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function About() {
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
        skewY: -100,
        x: -100,
        opacity: 0,
      },
      "-=3"
    );
  });
  return (
    <div>
      <title>Cherish Shed | about</title>
      <div className="overlay p-10">
        <section className="w-[70%] mx-auto bg-[rgba(61,56,42,0.9)] p-4 text-white">
          <div className="flex gap-2 items-center !w-[80%]" ref={aboutsection}>
            <p className="text-3xl font-bold mb-3">learn about me</p>
            <hr className="w-[150px] border-[rgb(249,115,22)] border-2 " />
          </div>

          <div className="w-[80%] mx-auto">
            <p className="text-justify leading-loose text-lg">
              hi there i'm cherish, a graduate of software engineering from
              babcock university. i have high passion for building software
              solutions especially when i build with other developers. I am a
              web deevloper but i have a serious interest in mobile development
              (watch out, i'll soon update this profile with mobile development
              tools).
              <br />
              when i'm not engrossed in codingor reading someone else's code,
              i'll most likely be listening to a podcast or music. i'm really a
              sucker for violin and saxophone covers even though i have no idea
              how to play any of them. i plan to learn the piano though so
              there's that.
              <br />
              i am particularly excited about:
              <br /> - discussing about society and hearing people's views on
              certain topics.
              <br />
              - working on really fun software with friends
              <br />
              - recommending music and getting recommendations
              <br />
              - learning new words and their meanings
              <br />- i really love the colour beige expecially when it's
              combined with brown (should be pretty obvious)
              <br />
              overall, i'm a regular person who just enjoys coding and building.
              if you think you'll like to have me as part of your project then
              by all means hit the button{" "}
              <a
                href="mailto:c.shed2000@gmail.com"
                className="text-[rgb(224,188,164)] hover:text-[rgb(249,115,22)] transition-all"
              >
                <Mail fontSize="large" />
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

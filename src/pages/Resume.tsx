// import Transition from "./Transition";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  Article,
  ChevronRight,
  Circle,
  DataObject,
  GitHub,
  Laptop,
  LinkedIn,
  Quiz,
  X,
} from "@mui/icons-material";
import MyTimeline from "../components/Timeline";
import { TimelineItemProps } from "antd";
import { TeamOutlined } from "@ant-design/icons";

function Resume() {
  const resume = gsap.timeline();
  const resumesection = useRef(null);
  const resumeimg = useRef(null);
  const resumeDets = useRef(null);
  const resumeheader = useRef(null);
  const resumeexperience = useRef(null);
  const resumeeducations = useRef(null);
  const resumeTools = useRef(null);
  const resumeSkills = useRef(null);
  const resumeMainHeader = useRef(null);
  const educationItems: TimelineItemProps[] = [
    {
      dot: <Circle className="justify-center self-center" fontSize="medium" />,
      color: "rgb(67, 29, 2)",
      children: (
        <>
          <p className="text-lg text-[rgb(206,150,111)] font-bold">
            Bachelor of Software Engineering
          </p>
          <p className="p-2 rounded-xl bg-[rgb(67,29,2)] text-white w-fit min-w-[100px] text-center">
            2020-2024
          </p>
          <div className="text-white">
            <p className="italic text-lg font-bold text-[rgb(197,195,194)]">
              Babcock University
            </p>
            <p className="font-bold text-[rgb(158,156,155)]">
              relevant course-work
            </p>
            <p className="text-justify !text-sm">
              • Artificial Intelligence • Operating Systems. • Linux Systems •
              Database Management • Human-system Interaction • Data Structures
              and Algorithms
            </p>
          </div>
        </>
      ),
    },
    {
      dot: <Circle className="justify-center self-center" fontSize="medium" />,
      color: "rgb(67, 29, 2)",
      children: <></>,
    },
  ];

  const experienceItems: TimelineItemProps[] = [
    {
      dot: <Circle className="justify-center self-center" fontSize="medium" />,
      color: "rgb(67, 29, 2)",
      children: (
        <>
          <p className="text-lg text-[rgb(206,150,111)] font-bold">
            Software Engineer Intern
          </p>
          <p className="p-2 rounded-xl bg-[rgb(67,29,2)] text-white w-fit min-w-[100px] text-center">
            January 2023 - June 2023
          </p>
          <div className="text-white">
            <p className="italic text-lg font-semibold text-[rgb(218,216,215)]">
              Sidmach Technologies
            </p>
            <ul className="text-justify !text-sm">
              <li>
                Developed efficient APIs using backend technologies such as Node
                JS, postgreSQL, mongoDB etc
              </li>
              <li>Engaged in requirements elicitation and documentation.</li>
              <li> Documented system testing processes and results</li>
              <li>
                Collaborated with team members to deliver efficient systems to
                clients
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      dot: <Circle className="justify-center self-center" fontSize="medium" />,
      color: "rgb(67, 29, 2)",
      children: <></>,
    },
  ];
  useEffect(() => {
    resume.from(
      resumesection.current,
      {
        duration: 0.3,
        y: 20,
        opacity: 0,
        delay: 0.2,
      },
      "-=0"
    );
    resume.from(
      resumeimg.current,
      {
        duration: 0.4,
        scale: 0.5,
        opacity: 0,
        delay: 0.1,
      },
      "-=0"
    );
    resume.from(
      resumeMainHeader.current,
      {
        duration: 0.4,
        y: 300,
        opacity: 0,
        delay: 0.1,
      },
      "-=0"
    );
    resume.from(
      resumeheader.current,
      {
        duration: 0.4,
        y: 300,
        opacity: 0,
        delay: 0.1,
      },
      "-=0"
    );
    resume.from(
      resumeDets.current,
      {
        duration: 0.4,
        opacity: 0,
        delay: 0,
      },
      "-=0"
    );
    resume.from(
      resumeexperience.current,
      {
        duration: 0.4,
        x: -300,
        opacity: 0,
        delay: 0,
      },
      "-=1"
    );
    resume.from(
      resumeeducations.current,
      {
        duration: 0.4,
        x: 300,
        opacity: 0,
        delay: 0,
      },
      "-=0.5"
    );
    resume.from(
      resumeTools.current,
      {
        duration: 0.4,
        opacity: 0,
        delay: 0,
      },
      "-=1"
    );
    resume.from(
      resumeSkills.current,
      {
        duration: 0.4,
        scale: 0.5,
        opacity: 0,
        delay: 0,
      },
      "-=1"
    );
  });
  return (
    <div className="!overflow-hidden">
      <title>Cherish Shed | Resume</title>
      <div className="p-10 overlay">
        <section
          className="w-[80%] mx-auto bg-[rgba(61,56,42,0.9)] p-4  text-white"
          ref={resumesection}
        >
          <div className="flex gap-2 items-center" ref={resumeMainHeader}>
            <p className="text-3xl font-bold mb-3">check out my resume</p>
            <hr className="w-[150px] border-[rgb(249,115,22)] border-2 " />
          </div>
          <div className="flex gap-3 items-center !leading-loose text-lg">
            <div className="flex gap-3 items-center !leading-loose text-lg">
              <div
                className="head-shot w-[300px] h-[300px] rounded-full"
                ref={resumeimg}
              ></div>
              <div
                className="h-[400px] w-[70%] flex flex-col gap-2"
                ref={resumeDets}
              >
                <p className="text-3xl text-[rgb(249,115,22)] font-semibold">
                  software engineer/developer
                </p>
                <p>
                  full stack engineer dedicated to building products tailored to
                  people's needs
                </p>
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
                <div className="flex gap-10">
                  <div className="flex flex-col gap-3">
                    <p>
                      <ChevronRight className="text-[rgb(249,115,22)]" />
                      <span className="font-bold">degree:</span> bachelors
                    </p>
                    <p>
                      <ChevronRight className="text-[rgb(249,115,22)]" />
                      <span className="font-bold">email:</span>{" "}
                      <a href="mailto:c.shed2000@gmail.com">
                        c.shed2000@gmail.com
                      </a>
                    </p>
                    <p>
                      <ChevronRight className="text-[rgb(249,115,22)]" />
                      <span className="font-bold">telephone:</span>{" "}
                      <a href="tel:+2349029465346">+2349029465346</a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>
                      <ChevronRight className="text-[rgb(249,115,22)]" />
                      <span className="font-bold">location: </span>Lagos,
                      Nigeria
                    </p>
                    <p>
                      <ChevronRight className="text-[rgb(249,115,22)]" />
                      <span className="font-bold">freelance:</span> available
                    </p>
                  </div>
                </div>
                <p className="text">
                  as a committed full-stack engineer, i am driven by a passion
                  for developing technology that enhances people's lives. i
                  consistently find motivation in the chance to innovate,
                  create, and offer valuable solutions.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-auto w-[90%]">
            <div ref={resumeeducations}>
              <h2 className="font-bold text-4xl mb-4 text-gray-200">
                education
              </h2>
              <MyTimeline items={educationItems} />
            </div>
            <div ref={resumeexperience}>
              <h2 className="font-bold text-4xl mb-4 text-gray-200">
                professional experience
              </h2>
              <MyTimeline items={experienceItems} />
            </div>
          </div>
          <div className="skills flex flex-col gap-4 mb-4">
            <div className="flex gap-2 items-center " ref={resumeheader}>
              <p className="text-xl font-bold mb-3 text-gray-300">skills</p>
              <hr className="w-[150px] border-[rgb(249,115,22)] border-2 self-center" />
            </div>

            <div className="flex gap-6 flex-wrap" ref={resumeSkills}>
              <div className="transition-all relative w-[200px] h-[100px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)]">
                <Laptop
                  className="absolute -top-5 left-1/2 -translate-x-1/2"
                  fontSize="large"
                />
                <p className="w-full relative top-1/2 -translate-y-1/2">
                  full Stack development
                </p>
              </div>
              <div className="transition-all relative w-[200px] h-[100px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)]">
                <Article
                  className="absolute -top-5 left-1/2 -translate-x-1/2"
                  fontSize="large"
                />
                <p className="w-full relative top-1/2 -translate-y-1/2">
                  software documentation
                </p>
              </div>
              <div className="transition-all relative w-[200px] h-[100px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)]">
                <Quiz
                  className="absolute -top-5 left-1/2 -translate-x-1/2"
                  fontSize="large"
                />
                <p className="w-full relative top-1/2 -translate-y-1/2">
                  software testing
                </p>
              </div>
              <div className="transition-all relative w-[200px] h-[100px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)]">
                <TeamOutlined
                  className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl"
                  sizes="large"
                />
                <p className="w-full relative top-1/2 -translate-y-1/2">
                  team collaboration
                </p>
              </div>
              <div className="transition-all relative w-[200px] h-[100px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)]">
                <DataObject
                  className="absolute -top-5 left-1/2 -translate-x-1/2"
                  fontSize="large"
                />
                <p className="w-full relative top-1/2 -translate-y-1/2">
                  object oriented programming
                </p>
              </div>
            </div>
          </div>
          <div className="tools flex flex-col gap-4">
            <div
              className="flex gap-2 items-center align-middle"
              ref={resumeheader}
            >
              <p className="text-xl font-bold mb-3 text-gray-300">tools</p>
              <hr className="w-[150px] border-[rgb(249,115,22)] border-2 self-center" />
            </div>
            <div
              className="flex gap-4 items-center flex-wrap"
              ref={resumeTools}
            >
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">ReactJS</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">typescript</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968342.png"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">postgreSQL</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDSJ7bq__Gl9aiCju897Jl6JPt61mV2flGpx2Ye2tqg&s"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">prisma</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCjMfhG8ETwgXQMgUE8fjQi_e5TFOkEFP_APpQXUPWA&s"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">mongoDB</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTa6eTkICtTadK1Jceb5FWANCvhbwYyXFLjkE5RP4YA&s"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">expressJS</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bMQt9M5mLRYeQF6JMZyzEEzpM0bjeWWGFelI8Rrpcw&s"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">tailwind CSS</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQP_3ynAZYQkyJeCFcUpNVJXNf2kVms7SjmKeg4cBy4Q&s"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">redux</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://jobkaehenry.gallerycdn.vsassets.io/extensions/jobkaehenry/zustand-snippet/1.0.1/1682180336770/Microsoft.VisualStudio.Services.Icons.Default"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">zustand</p>
              </div>
              <div className="transition-all relative min-w-[200px] w-fit min-h-[70px] text-center rounded-md bg-[rgb(255,255,255,0.08)] p-2 hover:bg-[rgb(255,255,255,0.2)] flex gap-2 items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
                  alt="me"
                  className="w-[40px] h-[40px]"
                />
                <p className="w-full relative text-left">docker</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <img
              src="http://ghchart.rshah.org/CherishShed"
              className="w-full"
              alt="commit graph"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;

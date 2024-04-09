import { useEffect, useRef, useState } from "react";
import { Link } from "@mui/icons-material";
import gsap from "gsap";

function ProjectCard({
  title,
  info,
  image,
  tools,
  link,
}: {
  title: string;
  info: string;
  image: string;
  tools: string[];
  link: string;
}) {
  const portfolio = gsap.timeline();
  const portfolioProject = useRef(null);
  const notHover = useRef(null);
  const [ref, setRef] = useState(notHover);

  useEffect(() => {
    portfolio.from(
      portfolioProject.current,
      {
        duration: 0.1,
        opacity: 0,
      },
      "-=0"
    );
    portfolio.to(
      portfolioProject.current,
      {
        duration: 0.3,
        opacity: 1,
      },
      "-=0"
    );
    portfolio.to(
      notHover.current,
      {
        duration: 0.2,
        scale: 1,
        opacity: 0,
      },
      "-=0"
    );
  }, [ref]);

  return (
    <div
      className="project-card"
      onMouseOver={() => {
        setRef(portfolioProject);
      }}
      onMouseLeave={() => {
        setRef(notHover);
      }}
    >
      <div className="h-fit w-full">
        <img src={image} alt="project" className="w-full h-fit" />
        <p className="relative p-2 text-sm text-amber-200 font-semibold italic">
          {title}
        </p>
        <p className="text-xs p-2">{info}</p>
      </div>
      <div className="h-1/4 w-full text-xs relative p-2">
        <div className="flex gap-2 flex-wrap text-xs">
          {tools.map((tool) => (
            <p className="chip">{tool}</p>
          ))}
        </div>
      </div>
      <div
        className="opacity-0 absolute w-full h-full bg-[rgb(0,0,0,0.6)] top-0"
        ref={ref}
      >
        <a href={link} target="_blank">
          <Link
            className={`relative top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2`}
            fontSize="large"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "IT Ninja - An AI Chatbot using vercel app",
      description:
        `An open source chatbot template built with Next.js and the AI SDK by Vercel. It uses the streamText function in the server and the useChat hook on the client to create a seamless chat experience.`,
      tags: ["Vercel SDK", "Open AI", "Nextjs"],
      link: "https://it-ninja.vercel.app/",
    },
    {
      title: "Event Booking System - App that will help you book and event",
      description:
        "This is where I put my discription. ",
      tags: ["Nextjs", "Typescript", "Sonner"],
      link: "#",
    },
    {
      title: "Plaisirs",
      description:
        "Pastry Shop Website. ",
      tags: ["html" , "javascript"],
      link: "https://plaisirs.vercel.app/",
    },
    {
      title: "Fitness Gym Landing Page - A Jiujitsu Promotional Website",
      description:
        "A landing page for a local Jiujitsu gym. ",
      tags: ["html" , "tailwindcss"],
      link: "https://fitness-gym-ruddy.vercel.app/",
    },
    {
      title: "Lolahh Coffee - Your Neighborhood Coffee",
      description:
        "A simple coffee shop website I made for my family's micro business. ",
      tags: ["Javascript" ,"html" , "tailwindcss"],
      link: "https://lolahh-coffee.vercel.app/",
    },
   
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27; Each
            piece represents a journey of passion, problem-solving, and
            continuous learning.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;

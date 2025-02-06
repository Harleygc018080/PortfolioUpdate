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
      title: "GiftGenie- App that will help you find the perfect gift",
      description:
        "This is where I put my discription. ",
      tags: ["Nextjs", "Typescript", "Shadcn Ui"],
      link: "#",
    },
    {
      title: "project soon- summary",
      description:
        "This is where I put my discription. ",
      tags: ["Nextjs"],
      link: "#",
    },
    {
      title: "project soon- summary",
      description:
        "This is where I put my discription. ",
      tags: ["Nextjs"],
      link: "#",
    },
    {
      title: "project soon- summary",
      description:
        "This is where I put my discription. ",
      tags: ["Nextjs"],
      link: "#",
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
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
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

import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { cn } from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaGithub, FaGithubAlt, FaPython } from "react-icons/fa6";
import { RiNetflixLine } from "react-icons/ri";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

export function Skills() {
  const features = [
    {
      title: "Java",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <FaJava className="size-6" />,
    },
    {
      title: "JavaScript",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IoLogoJavascript className="size-6" />,
    },
    {
      title: "HTML",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <FaHtml5 className="size-6" />,
    },
    {
      title: "CSS",
      description: "We just cannot be taken down by anyone.",
      icon: <FaCss3Alt className="size-6" />,
    },
    {
      title: "ReactJS",
      description: "You can simply share passwords instead of buying new seats",
      icon: <FaReact className="size-6"/>,
    },
    {
      title: "NextJS",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <RiNetflixLine className="size-6" />,
    },
    {
      title: "NodeJS",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <DiNodejs className="size-10" />,
    },
    {
      title: "MongoDB",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <DiMongodb className="size-8" />,
    },
    {
        title: "Python ",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <FaPython className="size-6" />,
    },
    {
        title: "Solidity",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <SiSolidity className="size-6" />,
    },
    {
        title: "SQL",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <AiOutlineConsoleSql className="size-6" />,
    },
    {
        title: "GitHub",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <FaGithub className="size-6" />,
    },
  ];
  return (
    <div id="techstack" className=" pt-5 mt-10 pb-5 mb-10">
        <h1 className="mb-4 relative text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">Tech Stack</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      {/* <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p> */}
    </div>
  );
};

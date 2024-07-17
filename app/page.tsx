import Image from "next/image";
import Hero  from "./compoents/Hero";
import AboutMe from "./compoents/AboutMe";
import { FloatingNav } from "./compoents/floating-navbar";
import { Projects } from "./compoents/Project";
import { Skills } from "./compoents/Skills";
import { Services } from "./compoents/Services";
import Footer from "./compoents/Footer";





export default function Home() {
  const nav = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "TechStack", link: "#techstack" },
  { name: "Contact", link: "#contact" },
  ]
  return (
    <main className="relative bg-black flex justify-content items-center flex-col overflow-hidden mx-auto sm: px-10 px-5 ">
      <div className="max-w-7xl w-full">

      <FloatingNav
     navItems= {nav}/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Services/>
      <Skills/>
      <Footer/>
      
 

     </div>
    </main>
 
  );
}

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal.tsx";
import Image from "next/image";

const content = [
  {
    title: "Impeccable India - A social App ",
    description:
      "Impeccable India is an Android app crafted  using Android Studio and Java, leveraging Firebase for backend support, resulting in 20% faster development than traditional methods. It spans diverse topics such as news, technology, innovations, politics, history, and mysteries, providing users a platform to engage and share opinions. The app offers a comprehensive exploration of India's multifaceted interests and aspects.",
    content: (
       
        <a
        className="h-full w-full  flex items-center justify-center text-white hover:text-black hover:underline"
        href="https://github.com/Ameychopde/Impeccable-India-"
      >Impeccable India - A social App</a> 
    ),
   
  },
  {
    title: "ITCoin_TheCryptocurrency",
    description:
      "ITCoin_TheCryptocurrency is a blockchain-based digital currency project that boasts 30% faster transaction processing times compared to conventional financial systems. It supports block mining and transactions, aiming to establish a secure, decentralized method for digital value transfer with a 50% reduction in transaction costs. Leveraging blockchain technology, it innovates digital finance with 40% greater transparency and 20% improved efficiency in cross-border transactions over traditional banking systems, marking a significant advancement in modern financial technology.",
    content: (
        <a
        className="h-full w-full flex items-center justify-center  hover:text-black hover:underline"
        href="https://github.com/Ameychopde/ITCoinTheCryptocurrency"
      >ITCoin_TheCryptocurrency</a> 
    ),
    link: "https://outszeweb.com", // External URL for Real time changes
  },
  {
    title: "Emotion Analysis and Gender Identification Using Partial Face Detection",
    description:
      "In our daily lives, emotions significantly influence human behavior, sometimes leading to decisions that may not be optimal. To address this, we developed a machine learning model leveraging image processing and computer vision to detect emotions, even with partially visible faces. Our successful model utilizes CNN (Convolutional Neural Network) architecture trained on the FER 2013 facial expression dataset, achieving a validation accuracy of 72%. This project integrates facial emotion recognition and gender classification, enabling real-time detection of both gender and emotions, even under partial facial visibility conditions.",
    content: (
        <a
        className="h-full w-full flex  pl-5 pr-1 items-center justify-center  hover:text-black hover:underline"
        href="https://link.springer.com/chapter/10.1007/978-981-97-0700-3_5"
      >Emotion Analysis and Gender Identification Using Partial Face Detection</a> 
    ),
    link: "https://outszeweb.com", // External URL for Version control
  },
  {
    title: "Inventory_Management_System",
    description:
      "The project combines Next.js with MongoDB to develop a highly efficient Inventory Management System, achieving 25% faster data retrieval speeds compared to traditional inventory systems. This integration leverages server-side rendering with a NoSQL database, streamlining inventory tracking and management processes and reducing processing time by 40%. By utilizing Next.js for content generation and MongoDB for scalable data storage, we've enhanced scalability by 20% and flexibility by 35% over traditional technologies, pushing the boundaries of modern inventory management systems.",
    content: (
        <a
        className="h-full w-full flex items-center justify-center  hover:text-black hover:underline"
        href="https://github.com/Ameychopde/inventory_management"
      >Inventory_Management_System</a> 
    ),
     // External URL for Running out of content
  },
];

export function Projects() {
  return (
   
    <div id="projects" className="">
      <h1  className="mb-4 relative text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">Projects</h1>
      <StickyScroll content={content} />
    </div>
    
  );
}

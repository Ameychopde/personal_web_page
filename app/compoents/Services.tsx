"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../compoents/ui/layout-grid";

export function Services() {
  return (
    <div id="services" className="pt-[5rem]">
      <h1 className="relative text-2xl  md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        Services
      </h1>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Front-End Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Crafting engaging and intuitive user interfaces for seamless
        interactions.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">UI/UX Design</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Designing user-centric interfaces that offer exceptional experiences and
        usability.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Back-End Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building robust server-side solutions for scalable and secure
        applications.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Full-Stack Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Delivering end-to-end solutions with expertise in both front-end and back-end technologies.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?t=st=1721229858~exp=1721233458~hmac=2c37803351a7116de6833f7144b1c1117a741dfd5078da4524ae90d1611b545b&w=996",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-11697.jpg?t=st=1721230200~exp=1721233800~hmac=b7930850f651febafde9469fcbabb7cc2728f9fdd1017c2cb61d3ea0bb82786c&w=996",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-vector/application-programming-interface-concept-illustration_114360-9145.jpg?t=st=1721230329~exp=1721233929~hmac=24d0f8872138b6c6f3ccd228645c57ef03eacbb79c949adf7f73a207cd1e371b&w=996",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8114.jpg?t=st=1721230614~exp=1721234214~hmac=e8a7fc4fe3f3f86967378b88f96c1eb5dd3e1569a947b2615ce8e3a88b751143&w=996",
  },
];

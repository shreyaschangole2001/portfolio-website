import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import github from "../assets/github.png"
import graphql from "../assets/graphql.png"
import java from "../assets/java.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import springboot from "../assets/springboot.png"
import tailwind from "../assets/tailwind.png"


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: node,
      title: "Node Js",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQl",
      style: "shadow-pink-800",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-orange-800",
    },
    {
      id: 10,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="technologies"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='mt-16'>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            {/* Experience */}
            Technologies  
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

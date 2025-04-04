import Atropos from 'atropos/react';
import html from '../assets/html.png.png'
import '../styles/perfil.css'
import css from '../assets/css.png.png'
import js from '../assets/javascript.png.png'
import react from '../assets/react.png.png'
import node from '../assets/nodejs.png.png'
import redux from '../assets/redux.png.png'
import mongo from '../assets/mongodb.png.png'
import git from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import zustand from '../assets/zustand.png'
import mysql from '../assets/mysql.png'
import 'animate.css'

const Skills = () => {

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
            src: js,
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
            id: 6,
            src: node,
            title: "Node",
            style: "shadow-green-500",
        },
        {
            id: 7,
            src: mongo,
            title: "Mongo DB",
            style: "shadow-sky-300",
        },
        {
            id: 2,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-500",
            width: 100,
            height: 100
        },
        {
            id: 8,
            src: git,
            title: "Github",
            style: "shadow-gray-400",
            width: 110,
            height: 100
        },
        {
            id: 9,
            src: redux,
            title: "Redux",
            style: "shadow-violet-500",
        },
        {
            id: 10,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500",
            width: 100,
            height: 100
        },
        {
            id: 11,
            src: zustand,
            title: "Zustand",
            style: "shadow-orange-500",
            width: 150,
            height: 100
        },

    ];
    return (
        <div name="experience" className="w-full flex flex-col justify-center items-center animate__animated animate__fadeIn animate__delay-0.5s animate__duration-1s">
            <div className="mx-auto p-4 flex flex-col justify-center items-center w-4/5">

                <div className="py-20 flex-none">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-100 text-sky-500">
                        Experiencia:
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 justify-items-center sm:grid-cols-4 gap-8 text-center sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className='w-full'>
                            <Atropos className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg w-full ${style}`}>
                                <img src={src} alt={title} className="w-40 h-40 mx-auto" />
                                <p className="mt-4 text-sky-500 font-bold">{title}</p>
                            </Atropos>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
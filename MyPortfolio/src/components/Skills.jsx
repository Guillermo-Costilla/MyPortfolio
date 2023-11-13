import html from '../assets/html.png.png'
import css from '../assets/css.png.png'
import js from '../assets/javascript.png.png'
import react from '../assets/react.png.png'
import node from '../assets/nodejs.png.png'
import redux from '../assets/redux.png.png'
import mongo from '../assets/mongodb.png.png'
import git from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import sql from '../assets/sql.png'
import mysql from '../assets/mysql.png'
import sqlserver from '../assets/sqlserver.png'
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
            id: 8,
            src: git,
            title: "Github",
            style: "shadow-gray-400",
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
            width: 130,
            height: 100
        },
        {
            id: 11,
            src: sql,
            title: "SQL(in progress)",
            style: "shadow-blue-500",
            width: 130,
            height: 100
        },
        {
            id: 12,
            src: mysql,
            title: "My SQL(in progress)",
            style: "shadow-orange-500",
            width: 130,
            height: 100
        },
        {
            id: 13,
            src: sqlserver,
            title: "SQL Server(in progress)",
            style: "shadow-white",
            width: 120,
            height: 100
        },
    ];
    return (
        <div name="experience" className="w-full flex flex-col justify-center items-center animate__animated animate__fadeIn animate__delay-0.5s animate__duration-1s">
            <div className="mx-auto p-4 flex flex-col justify-center items-center w-4/5">

                <div className="py-20 flex-none">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-100 text-sky-500">
                        Experience:
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 justify-items-center sm:grid-cols-4 gap-8 text-center sm:px-0">
                    {techs.map(({ id, src, title, style, width, height }) => (
                        <div key={id} className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg w-full ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" style={{ width, height }} />
                            <p className="mt-4 text-sky-500 font-bold">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills





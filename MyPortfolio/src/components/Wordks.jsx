import mytinerary from '../assets/Mitinerary.png'
import store from '../assets/store.png'
import 'animate.css';
import 'atropos/css'
import '../styles/wordks.css'
import Atropos from 'atropos/react';

const Wordks = () => {

    let works = [
        {
            id: 1,
            title: "My Tinerary",
            src: mytinerary,
            link1: "https://my-tinerary-ivory.vercel.app/",
            link2: "https://github.com/Guillermo-Costilla/app-mern.git"
        },
        {
            id: 2,
            title: "Store Market",
            src: store,
            link1: "https://store-mk.vercel.app/",
            link2: "https://github.com/Guillermo-Costilla/front-store"
        }
    ]

    return (
        <div className='w-full mt-20 mx-auto flex flex-col items-center'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-sky-500 hover:text-white font-bold text-3xl text-center border-b-4 border-gray-100 hover:border-sky-500 transition duration-300 animate__animated animate__fadeIn'>Mis Proyectos:</h2>
            </div>
            <div className='w-full mt-20 flex flex-wrap justify-center items-center rounded-lg'>
                {works.map(({ id, src, title, link1, link2 }) => (

                    <div className='flex flex-col justify-center rounded-lg shadow-md m-4 p-4 w-full sm:w-[300px]' key={id}>
                        <Atropos className="my-atropos" key={id}>
                            <h1 className='text-center text-white hover:text-sky-500 transition duration-300 text-2xl mb-4'>{title}</h1>
                            <div className='hover:scale-110 duration-300 py-4 rounded-lg animate__animated animate__fadeIn'>
                                <img src={src} alt={title} className="w-full h-[300px] object-cover rounded-lg" />
                            </div>
                        </Atropos>
                        <div className='flex justify-between mt-4 gap-2'>
                            <a href={link1} className='button' target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href={link2} className='button' target="_blank" rel="noopener noreferrer">Repositorio</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wordks
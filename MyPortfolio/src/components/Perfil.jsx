import '../styles/perfil.css'
import perfil from '../assets/perfil.png.png'
import Qualities from './Qualities.jsx'

const Perfil = () => {
    return (
        <div className='w-full md:flex flex-1 justify-center items-center mt-10'>
            <div className='w-full md:w-4/12 md:mx-10 flex justify-center md:justify-end mb-10 md:mb-0'>
                <img className='w-52 h-52 md:w-[300px] md:h-[300px] mt-5 rounded-full' src={perfil} alt="GC" />
            </div>
            <div className='w-full px-5 md:px-0 md:w-4/6 flex flex-col flex-1'>
                <div className='w-full flex justify-start items-start mb-5'>
                    <h1 className='text-left text-blue-600 text-3xl font-bold font-serif cursor-pointer max-w-[600px]'>Hi, I'm Guillermo Costilla,<span className='text-amber-500 font-permanent-marker'> Full Stack </span> developer, some of my qualities are:</h1>
                </div>
                <div className='w-full min-h-[50px] mr-20 md:mr-0 flex justify-start items-start '>
                    <Qualities />
                </div>
            </div>
        </div>
    )
}

export default Perfil
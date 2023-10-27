import mytinerary from '../assets/Mitinerary.png'
import portfolio from '../assets/portfolio.webp'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import 'animate.css';

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
            title: "Portfolio",
            src: portfolio,
            link1: "#",
            link2: "https://github.com/Guillermo-Costilla/MyPortfolio.git"
        }
    ]

    return (
        <div className='w-3/4 md:w-1/2 mt-20 mx-auto '>
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-sky-500 font-bold text-3xl text-center border-b-4 border-gray-100 animate__animated animate__fadeIn'>My Works:</h2>
            </div>
            <div className='w-full mt-20 md:flex flex-1 justify-center'>
                {works.map(({ id, src, title, link1, link2 }) => (
                    <div className='w-full flex flex1-1 justify-center shadow-md hover:scale-110 duration-300 py-4 animate__animated animate__fadeIn' key={id}>
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                        >
                            <Image
                                alt="mytinerary"
                                className="w-[300px] h-[300px] bg-cover objet-cover"
                                src={src}
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80 text-sky-500 font-bold">{title}</p>
                                <Button className="text-tiny text-sky-500 bg-black/20 shadow-md hover:scale-110 duration-300" variant="flat" color="default" radius="lg" size="sm">
                                    <a href={link1} target='_blank'>Demo</a>
                                </Button>
                                <Button className="text-tiny text-sky-500 bg-black/20 shadow-md hover:scale-110 duration-300" variant="flat" color="default" radius="lg" size="sm">
                                    <a href={link2} target='_blank'>Code</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>))}
            </div>
        </div>
    )
}

export default Wordks
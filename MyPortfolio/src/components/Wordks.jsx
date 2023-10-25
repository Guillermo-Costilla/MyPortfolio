import mytinerary from '../assets/Mitinerary.png'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Wordks = () => {

    let works = [
        {
            id: 1,
            src: mytinerary,
            link1: "https://my-tinerary-ivory.vercel.app/",
            link2: "https://github.com/Guillermo-Costilla/app-mern.git"
        }
    ]

    return (
        <div className='w-3/4 md:w-1/2 mt-20 mx-auto'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h2 className='text-blue-600 font-bold text-3xl text-center border-b-4 border-amber-500'>My Works:</h2>
            </div>
            <div className='w-full md:w-72 mt-20 shadow-md hover:scale-110 duration-300'>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                >
                    <Image
                        alt="mytinerary"
                        className="w-[300px] h-[300px] bg-cover objet-cover"
                        src={mytinerary}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">My Tinerary</p>
                        <Button className="text-tiny text-white bg-black/20 shadow-md hover:scale-110 duration-300" variant="flat" color="default" radius="lg" size="sm">
                            <a href="https://my-tinerary-ivory.vercel.app/" target='_blank'>Demo</a>
                        </Button>
                        <Button className="text-tiny text-white bg-black/20 shadow-md hover:scale-110 duration-300" variant="flat" color="default" radius="lg" size="sm">
                            <a href="https://github.com/Guillermo-Costilla/app-mern.git" target='_blank'>Code</a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Wordks
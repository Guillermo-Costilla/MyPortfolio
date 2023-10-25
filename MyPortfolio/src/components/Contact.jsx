const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="py-8 w-full text-center">
                    <p className="text-4xl mx-auto font-bold inline text-blue-600 border-b-4 border-amber-500 w-full text-center">Contact me:</p>
                    <p className="py-6 text-blue-600 text-xl">Submit the form below to get in touch with me </p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://formspree.io/f/xeqbnrqj" method="POST" className=" flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 border-amber-500 rounded-md text-blue-600 focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your mail"
                            className=" my-4 p-2 bg-transparent border-2 border-amber-500 rounded-md text-blue-600 focus:outline-none"
                        />
                        <textarea name="message" rows="10" className="p-2 bg-transparent border-2 border-amber-500 rounded-md text-blue-600 focus:outline-none " placeholder="Enter your message"></textarea>
                        <button className="text-white bg-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
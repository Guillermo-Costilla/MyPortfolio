const About = () => {
    return (
        <div
            name="about"
            className="w-full mt-20 text-blue-600 flex flex-col justify-center"
        >
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-2 w-full text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-amber-500 text-center w-full">
                        About me:
                    </p>
                </div>

                <p className="text-2xl mt-20">
                    Worked on a wide variety of projects, from small tasks to highly complex challenges, either collaborating in teams or taking individual responsibility. Throughout my journey, I have honed my ability to communicate clearly and effectively, manage project time efficiently, and share creative ideas. I am used to making quick and analytical decisions, which allows me to approach challenging situations with confidence and determination.
                </p>
            </div>
        </div>
    );
};

export default About;
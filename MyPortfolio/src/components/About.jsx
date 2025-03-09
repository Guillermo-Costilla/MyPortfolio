import 'animate.css';

const About = () => {
    return (
        <div
            name="about"
            className="w-full mt-20 text-sky-500 flex flex-col justify-center"
        >
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-2 w-full text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-100 text-center w-full animate_animated animate__backInUp">
                        Sobre mi:
                    </p>
                </div>

                <p className="text-2xl mt-20 px-1">
                    Trabaje en una amplia variedad de proyectos, desde pequeñas tareas hasta desafíos muy complejos, tanto en equipo como de manera individual. A lo largo de mi trayectoria, perfeccione mis habilidades de comunicación clara y eficaz, gestión eficiente del tiempo y generación de ideas creativas. Estoy acostumbrado a tomar decisiones rápidas y analíticas, lo que me permite enfrentar situaciones desafiantes con confianza y determinación.
                </p>
            </div>
        </div>
    );
};

export default About;
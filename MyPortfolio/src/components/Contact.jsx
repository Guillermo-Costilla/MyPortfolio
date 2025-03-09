import { useState, useEffect } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envía el formulario utilizando Axios
            const response = await axios.post("https://formspree.io/f/xeqbnrqj", formData);

            if (response.status === 200) {
                // Marca el formulario como enviado
                setFormSubmitted(true);
            } else {
                swal.fire({
                    icon: 'error',
                    title: 'Error sending the form',
                    text: 'Please try again later.',
                });
            }
        } catch (error) {
            console.error(error);
            swal.fire({
                icon: 'error',
                title: 'Error sending the form',
                text: 'Please try again later.',
            });
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            // Muestra la alerta después de enviar el formulario
            swal.fire({
                icon: 'success',
                title: 'Form Submitted',
                text: 'Thank you for contacting me.',
            });

            // Limpia los campos del formulario
            setFormData({ name: '', email: '', message: '' });

            // Restablece el estado del formulario enviado
            setFormSubmitted(false);
        }
    }, [formSubmitted]);

    return (
        <div name="contact" className="w-full h-screen p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="py-8 w-full ">
                    <div className="text-center">
                        <h2 className="text-4xl mx-auto font-bold inline text-sky-500 border-b-4 border-gray-100 w-full text-center">Contactame:</h2>
                    </div>
                    <p className="py-6 text-sky-500 text-xl">Completa el siguiente formulario para que podamos ponernos en contacto:</p>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} className=" flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            className="p-2 bg-transparent border-2 border-sky-500 rounded-md text-blue-600 focus:outline-none"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Tu mail"
                            className=" my-4 p-2 bg-transparent border-2 border-sky-500 rounded-md text-blue-600 focus:outline-none"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <textarea
                            name="message"
                            rows="10"
                            className="p-2 bg-transparent border-2 border-sky-500 rounded-md text-blue-600 focus:outline-none"
                            required
                            placeholder="Mensaje..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                        <button type="submit" className="text-white bg-sky-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 animate__animated animate__pulse animate__infinite">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

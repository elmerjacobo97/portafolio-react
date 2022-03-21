import './contact.css'
import {BsWhatsapp, MdOutlineMail, RiMessengerLine} from "react-icons/all";

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_02kjexs', 'template_26a5u0w', form.current, 'user_lFih09jh4b8HGlnyPq1Vu')

            e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icons"/>
                        <h4>Email</h4>
                        <h5>correo@correo.com</h5>
                        <a href="mailto:ejacobotiniano@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icons"/>
                        <h4>Messenger</h4>
                        <h5>Elmer Jacobo</h5>
                        <a href="https://m.me/elmer.jacobo.5832" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icons"/>
                        <h4>WhatsApp</h4>
                        <h5>+51 927347691</h5>
                        <a href="https://api.whatsapp.com/send?phone=+51927347691" target="_blank" >Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" placeholder="Your Message" rows="7" required> </textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xlqxdyk',
            'template_k5v2fpo',
            form.current,
            '5bKebpQSy6U7teLyf')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='form' style={{
            backgroundImage:
                "url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/N13e7awhgiljgescq/videoblocks-bouncing-arrow-pointing-down-symbol-of-attention-with-copy-space_r59tly9fu_thumbnail-1080_01.png')",

        }}>
            <div className='app__contact-form'>

                <div className='app__form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Name' className='form__inputs' />
                        <input type="email" name="user_email" placeholder='Email_Id' className='form__inputs' />
                        <textarea name="message" rows="5" cols="20" placeholder='Message' className='form__inputs' />
                        <div className='send'>
                            <input type="submit" value="Send the message !" className='custom__button' style={{ letterSpacing: 1 }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs
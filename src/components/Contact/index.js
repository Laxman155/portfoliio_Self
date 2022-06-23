import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_YeJhZkgb',
                form.current,
                'your-token'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Contactme
                    I am interested in freelance opportunities - especially ambitious or large projects.
                    However, if you have other request or question, don't hesitate to contact me using
                    below form either.</p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type='text' name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type='email' name="email" placeholder="Email" required />
                                </li>
                                <li >
                                    <input type='text' name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea type="text" name="textarea" placeholder="Message" required />
                                </li>
                                <li >
                                    <input type='submit' className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Lala Sharma,
                <br />
                India,
                <br />
                Mathura Vrindawan india 2022,
                <br />
                Bharna kalan Mathura<br />
                    <span style={{color:"yellow", fontSize:'16px'}}>pandeylaxman15@gmail.com</span>
                </div>
                <div className="map-wrap">
                    {/*<MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[44.96366, 19.61045]}>
                  <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                </Marker>
                </MapContainer>*/}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Profle.jpg'
import LogoSubtitle from '../../assets/images/pandey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img src={LogoSubtitle} alt="sublogo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href=''>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Laxman155/portfoliio_Self'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href=''>
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href=''>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;


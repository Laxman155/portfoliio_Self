import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoName from '../../assets/images/Logo_L.jpg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'l', 'a', '', 'S', 'h', 'a', 'r', 'm', 'a']
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]


    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return(
        <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12` }>i,</span>
            <br />
            <span className={`${letterClass} _13` }>I</span>
            <span className={`${letterClass} _14` }>'m</span>
            <img src={LogoName } alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={24} />
            </h1>
            <h2>Frontend Developer. / JavaScript Expert</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman" />
    </>
    )
}
export default Home;
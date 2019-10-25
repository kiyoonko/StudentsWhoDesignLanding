import React, { Component } from 'react'
//import Header from './Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.svg'
import background from '../images/background.svg'
import applyButton from '../images/ApplyButton.svg'
import requestButton from '../images/requestButton.svg'
import './landing.css'

export default class Landing extends Component {
    render() {

        const landingStyle = {
            paddingTop: '12.5vh'
        }
        
        const landingBackground = {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            height: '100vh'
        }

        const logoStyle = {
            position: 'relative',
            marginTop: '5vh',
            marginLeft: '8vw',
            height: '75px',
            width: '75px'
        }

        const navStyle = {
            marginRight: '8vw',
            marginTop: '5.5vh',
        }

        const buttonStyle = {
            marginRight: '8vw',
            marginTop: '13vh'
        }

        const buttons = {
            marginLeft: '8vw'
        }

        const secondButton = {
            marginLeft: '2.5vw'
        }

        const portfolioStyle = {
            marginTop: '2.5vh',
        }

        return (
            <div style = {landingBackground}>
                <Navbar>
                    <Navbar.Brand href="#home" style = {logoStyle}>
                    <img
                        alt=""
                        src={logo}
                        width="75"
                        height="75"
                    />
                    </Navbar.Brand>

                    <Nav className="ml-auto" style = {navStyle}>
                        <Nav.Link className="navList" href="#apply">APPLY</Nav.Link>
                        <Nav.Link className="navList" href="#podcast">PODCAST</Nav.Link>
                        <Nav.Link className="navList" href="#blog">BLOG</Nav.Link>
                        <Nav.Link className="navList" href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar>
                <div id = "home" style = {landingStyle}>
                    <h1 className="h1">A product design program</h1>
                    <h1 className="h1">that's free until you're hired.</h1>
                    <text className="subSlogan">You're guaranteed your dream job.</text>
                </div>
                <div style = {buttonStyle}>
                    <div style = {buttons}>
                        <a href="">
                            <img src={applyButton} alt = "apply now"/>
                        </a>
                        <a style = {secondButton} href="">
                            <img src={requestButton} alt = "request syllabus"/>
                        </a>
                    </div>
                </div>
                <div style = {portfolioStyle}>
                    <a href="">
                        <text className="subSlogan">Sign up for a 15 minute portfolio review → </text>
                    </a>
                </div>
            </div>
        )
    }
}

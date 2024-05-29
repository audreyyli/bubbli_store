import React, {useState} from 'react'
import '../styles/SideBarStyles.css'
import igLogo from '../Pictures/igLogo.png'
import igLogoHover from '../Pictures/igLogoHover.png'

import { Link } from 'react-router-dom'

const SideBar = ({isOpen, top}) => {
    const [isHovering, setIsHovering] = useState(false)

    if (!isOpen) return null;
    return (
        <div className = {`sideBar ${isOpen ? 'open' : ''}`} style = {{ left: isOpen ? '0' : '-250px'}}>
            <p><b>PRODUCTS</b></p>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><Link to = "/products" className = 'sideBar-link'>ALL</Link></div>
            <div><Link to = "/products/bracelets" className = 'sideBar-link'>BRACELETS</Link></div>
            <div><Link to = "/products/clips" className = 'sideBar-link'>CLIPS</Link></div>
            <div><Link to = "/products/earrings" className = 'sideBar-link'>EARRINGS</Link></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><Link to = "/about" className = 'sideBar-link'><b>ABOUT ME!</b></Link></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><Link to = "/contact" className = 'sideBar-link'><b>CONTACT</b></Link></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div>
                <a href = "https://www.instagram.com/shopbubbli/" className = "image-button" onMouseEnter = {() => setIsHovering(true)} onMouseLeave = {() => setIsHovering(false)}><img src = {isHovering ? igLogoHover : igLogo} alt = "Logo" /></a>
                </div>
        </div>
    )
}

export default SideBar
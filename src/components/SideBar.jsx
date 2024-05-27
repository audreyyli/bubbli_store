import React, {useState} from 'react'
import '../styles/SideBarStyles.css'
import igLogo from '../Pictures/igLogo.png'
import igLogoHover from '../Pictures/igLogoHover.png'

const SideBar = ({isOpen, top}) => {
    const [isHovering, setIsHovering] = useState(false)

    if (!isOpen) return null;
    return (
        <div style = {{
            left: 0,
            top: top,
            width: '250px',
            height: 'calc(100% -' + top + ')',
            backgroundColor: '#FFF',
            padding: '10px 15px 0 30px',
            boxSizing: 'border-box',
            zIndex: 1000
        }}>
            <p><b>PRODUCTS</b></p>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><a href = "../Pages/all.js" className = 'sideBar-link'>ALL</a></div>
            <div><a href = "../Pages/bracelets.js" className = 'sideBar-link'>BRACELETS</a></div>
            <div><a href = "../Pages/clips.js" className = 'sideBar-link'>CLIPS</a></div>
            <div><a href = "../Pages/earrings.js" className = 'sideBar-link'>EARRINGS</a></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><a href = "../Pages/about.js" className = 'sideBar-link'><b>ABOUT ME!</b></a></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div><a href = "../Pages/contact.js" className = 'sideBar-link'><b>CONTACT</b></a></div>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <div>
                <a href = "https://www.instagram.com/shopbubbli/" className = "image-button" onMouseEnter = {() => setIsHovering(true)} onMouseLeave = {() => setIsHovering(false)}><img src = {isHovering ? igLogoHover : igLogo} alt = "Logo" /></a>
                </div>
        </div>
    )
}

export default SideBar
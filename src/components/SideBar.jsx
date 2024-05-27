import React from 'react'

const SideBar = ({isOpen, top}) => {
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
            <p>ALL</p>
            <p>BRACELETS</p>
            <p>CLIPS</p>
            <p>EARRINGS</p>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <p><b>ABOUT ME!</b></p>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            <p><b>CONTACT</b></p>
            <div style = {{width: '100%', height: '3px', backgroundColor: 'black', margin: '10px 0'}}></div>
            
        </div>
    )
}

export default SideBar
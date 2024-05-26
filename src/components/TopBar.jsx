import React from 'react'
import {TfiMenu} from 'react-icons/tfi'
import {IoMdCart} from 'react-icons/io'

const TopBar = () => {
    return (
        <div>
            <div style = {{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                <TfiMenu />
                <img src = "./Pictures/logo.jpg" alt = "Logo" style = {{width: '40px', height: '40px', borderRadius: '50%', marginLeft: '10px'}}/>
            </div>
        </div>
    )
}

export default TopBar
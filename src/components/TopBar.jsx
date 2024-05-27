import React from 'react'
import {TfiMenu} from 'react-icons/tfi'
import {IoMdCart} from 'react-icons/io'
import logo from '../Pictures/logo.png'

const TopBar = ({cartCount, cartTotal}) => {
    return (
        <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', fontSize: '24px', position: 'relative', paddingBottom: '20px'}}>
            <div style = {{display: 'flex', alignItems: 'center'}}>
                <TfiMenu />
                <img src = {logo} alt = "Logo" style = {{width: '40px', height: '40px', borderRadius: '50%', marginLeft: '25px'}}/>
            </div>

            <div style = {{display: 'flex', alignItems: 'center'}}>
                <IoMdCart />
                <div style = {{marginLeft: '10px'}}>
                    <div>{cartCount} | ${cartTotal.toFixed(2)} USD</div>
                </div>
            </div>
            <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '6px', backgroundColor: 'black', bottom: '0', left: '30px'}}></div>
        </div>
    )
}

export default TopBar
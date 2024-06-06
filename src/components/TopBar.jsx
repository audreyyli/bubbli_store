import React, { useState, useRef, useEffect } from 'react';
import SideBar from './SideBar';
import { TfiMenu } from 'react-icons/tfi';
import { IoMdCart } from 'react-icons/io';
import { useCart } from '../contexts/CartContext'
import logo from '../Pictures/logo.png';

import { Link } from 'react-router-dom'

const TopBar = ({ isSideBarOpen, setSideBarOpen }) => {
    const [hover, setHover] = useState(false)
    const [cartHover, setCartHover] = useState(false)
    const {cartCount, cartTotal} = useCart();

    const topBarRef = useRef(null);
    const [topBarHeight, setTopBarHeight] = useState(0);

    useEffect(() => {
        if (topBarRef.current) {
            setTopBarHeight(topBarRef.current.offsetHeight);
        }
    }, [])

    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
    }

    return (
        <div>
            <div ref = {topBarRef} style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 30px', fontSize: '25px', position: 'relative', height: '100px'}}>
                <div style = {{display: 'flex', alignItems: 'center'}}>
                    <button onClick = {toggleSideBar} onMouseEnter = {() => setHover(true)} onMouseLeave = {() => setHover(false)} style = {{background: 'none', border: 'none', cursor: 'pointer', color: hover ? '#BDE6FF' : 'initial'}}>
                        <TfiMenu />
                    </button>
                    <Link to = '/'>
                        <img src = {logo} alt = "Logo" style = {{width: '70px', height: '70px', borderRadius: '50%', marginLeft: '15px'}} />
                    </Link>
                </div>

                <button onMouseEnter = {() => setCartHover(true)} onMouseLeave = {() => setCartHover(false)} 
                style = {{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
                }}>
                    <Link to = "/cart" style = {{background: 'none', border: 'none', cursor: 'pointer', color: cartHover ? '#BDE6FF' : 'initial', textDecoration: cartHover ? 'underline' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <IoMdCart style = {{fontSize: '1.5em'}} />
                        <div style = {{marginLeft: '10px'}}>
                            {cartCount} | ${cartTotal.toFixed(2)} USD
                        </div>
                    </Link>
                </button>
                <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '6.5px', backgroundColor: 'black', bottom: '0', left: '30px'}}></div>
            </div>
            <SideBar isOpen = {isSideBarOpen} onClose = {() => setSideBarOpen(false)} top = {`${topBarHeight}px`} />
        </div>
    )
}

export default TopBar;

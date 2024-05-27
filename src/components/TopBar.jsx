import React, { useState, useRef, useEffect } from 'react';
import SideBar from './SideBar';
import {TfiMenu} from 'react-icons/tfi';
import {IoMdCart} from 'react-icons/io';
import logo from '../Pictures/logo.png';

const TopBar = ({ cartCount, cartTotal }) => {
    const [hover, setHover] = useState(false)
    const [cartHover, setCartHover] = useState(false)

    const [isSideBarOpen, setSideBarOpen] = useState(false);
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
                    <img src = {logo} alt="Logo" style = {{width: '70px', height: '70px', borderRadius: '50%', marginLeft: '15px'}}/>
                </div>

                <div style = {{display: 'flex', alignItems: 'center'}}>
                    <button onMouseEnter = {() => setCartHover(true)} onMouseLeave = {() => setCartHover(false)} style = {{background: 'none', border: 'none', cursor: 'pointer', color: cartHover ? '#BDE6FF' : 'initial', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <IoMdCart />
                        <div style = {{marginLeft: '10px'}}>
                            <div>{cartCount} | ${cartTotal.toFixed(2)} USD</div>
                        </div>
                    </button>
                </div>
                <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '6.5px', backgroundColor: 'black', bottom: '0', left: '30px'}}></div>
            </div>
            <SideBar isOpen = {isSideBarOpen} onClose = {() => setSideBarOpen(false)} top = {`${topBarHeight}px`} />
        </div>
    )
}

export default TopBar;

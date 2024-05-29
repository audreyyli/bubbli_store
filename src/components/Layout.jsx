import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

const Layout = ({ children, cartCount, cartTotal, isSideBarOpen, setSideBarOpen }) => {
    return (
        <div>
            <TopBar cartCount = {cartCount} cartTotal = {cartTotal} isSideBarOpen = {isSideBarOpen} setSideBarOpen = {setSideBarOpen} />
            <div style = {{marginLeft: isSideBarOpen ? '220px' : '0', marginTop: isSideBarOpen ? '-305px' : '0'}}>
                {children}
            </div>
        </div>
    )
}

export default Layout
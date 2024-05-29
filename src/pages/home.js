import React from 'react'

import startImg from '../Pictures/start.jpg'

const Home = ( {isSideBarOpen} ) => {
    return (
        <div style = {{marginLeft: isSideBarOpen ? '220px' : '0', marginTop: isSideBarOpen ? '-305px' : '0'}}>
            <img src = {startImg} alt = "Beginning Image" style = {{padding : '10px 30px 0 30px'}} />
            <div style = {{position: 'relative', marginTop: '10px', marginBottom: '10px'}}>
                <div style = {{position: 'absolute', width: 'calc(100% - 60px)', height: '3px', backgroundColor: 'black', left: '30px'}}></div>
            </div>
        </div>
    )
}

export default Home
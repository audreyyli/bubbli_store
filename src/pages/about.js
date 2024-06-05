import React from 'react'


const About = () => {
    return (
        <div>
            <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '30px', marginBottom: '10px', marginTop: '10px'}}>
                <h1 style = {{ fontSize: '28px' }}><b>ABOUT ME!</b></h1>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px'}}>
                <div style = {{position: 'absolute', width: 'calc(100% - 30px)', height: '2px', backgroundColor: 'black'}}></div>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px', marginTop: '30px'}}>
                <p>bubbli, a small business based in Ontario, Canada, was created to produce high-quality accessories for people all around the world! ✿ With well-sourced materials, I work hard to create adorable, trendy, and fashionable items just for YOU! ★</p>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px', marginTop: '30px'}}>
                <p>Hi there! I'm so glad you found my little corner of the internet! My name is Audrey and I'm the owner and founder of bubbli! bubbli was created because of my love for creating and making cute accessories! The name comes from my bubbly personality and my last name, Li (bubbly + Li = bubbli)!</p>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px', marginTop: '30px'}}>
                <p>I love spending my time hanging out with my friends and finding different outlets to express my creativity. Whether it be through my outfits, my art pieces, or my work, I always try to challenge myself by taking a step out of my comfort zone!</p>
            </div>
            <div style = {{position: 'relative', marginLeft: '30px', marginTop: '30px'}}>
                <p>Thank you for reading this small blurb about who I am! ♥ I really love making new friends and talking so feel free to drop by and say "Hi!". I hope you enjoy your stay :)</p>
            </div>
        </div>
    )
}

export default About
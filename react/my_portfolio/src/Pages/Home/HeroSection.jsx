import React from 'react'

const HeroSection = () => {
  return (
    <section id='heroSection' className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section-content'>
                <p className='section--title'>Hey, I'm John</p>
                <h1 className='hero--section--title'>
                    <span className='hero--section--title--color'>Full Stack</span>{" "}
                    <br />
                    Developer
                    
                </h1>
                <p className='hero--section-description'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nobis a inventore nostrum? Temporibus explicabo, quasi illum corporis, eligendi tempora quod labore nesciunt amet perferendis ad, animi ut magni non.
                    <br />Dolorm quas Amet solute assumenda cum?
                </p>
            </div>
            <button className='btn btn-pimary'>Get In Touch</button>
        </div>
        <div className='hero--section--img'>
            <img src='./img/hero_img.png' alt='Hero Section'/>
        </div>
    </section>
  )
}

export default HeroSection

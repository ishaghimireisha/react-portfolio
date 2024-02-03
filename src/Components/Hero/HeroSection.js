import React from 'react'
import "./Hero.css"
const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <p className="section--title">Hey, I'm Harry Styles</p>
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Harry Styles</span>{" "}
          <br />
          
        </h1>
        <p className="hero--section-description">
        English-born singer Harry Styles rose to fame as one of the five members of the boy band One Direction. He launched his solo career in 2016 and made his acting debut from the 2017 film 'Dunkirk.'
        </p>
      </div>
      <button className="btn btn-primary">Get In Touch</button>
    </div>
    <div className="hero--section--img">
      <img src="./haaaarrrrii.jpg" style={{"width":"500px", "height":"800px" ,"margin-left":"auto"}} alt="Harry Style" />
    </div>
  </section>
  )
}

export default HeroSection

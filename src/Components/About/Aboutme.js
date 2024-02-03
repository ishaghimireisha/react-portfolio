import React from 'react'
import "./About.css"

const Aboutme = () => {
  return (
    <>
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./Harry3.png" alt="About Harry Styles" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Harry Styles</h1>
          <p className="hero--section-description">
          Harry Styles, born on February 1, 1994, is an English musician, songwriter, and actor.
           He began his career as a contestant on “The X Factor,” a British Music show.
            He later joined One Direction, a British all-male band. 
            His solo album debuted at the top of the U.K. and U.S. charts in 2017. His second album also met with immense success, debuting at the top of the U.S. Billboard 200 chart.
             Styles has won a Grammy award and two Brit Awards. The handsome singer is also very fashionable. Styles was one of the first men to appear solo on the cover of “Vogue” magazine.
              
          </p>
          <p className="hero--section-description">
          Harry Styles has come a long way from his humble beginnings in Worcestershire, England.
           In the decade since he and the rest of the One Direction lads made their debut on the international music scene, he’s gone from boy band member to one-man show, 
           holding court at Madison Square Garden and rocking out alongside the likes of Stevie Nicks and Bruce Springsteen.
            Styles has also gotten into the A-list pastime of building up an impressive real estate portfolio, growing the number of places that he can call home at any given point during his world tours.
             As for his latest album, Harry’s House, the title was both inspired by Haruomi Hosono’s 1973 album Hosono House and the sensation of actually, well, being at his house.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Aboutme

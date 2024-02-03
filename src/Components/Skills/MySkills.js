import React from 'react'
import { FaAward, FaCode, FaGuitar, FaHeadphones, FaLaptopCode, FaMusic, FaPaintBrush, FaSearch } from 'react-icons/fa';
import "./Skills.css"
    
    const MySkills = () => {
      return (
        <section className="skills--section" id="Edwards Styles">
          <div className="portfolio--container">
            <p className="section--title" style={{"font-size":"60px"}}>My Skills</p>
            <h2 className="skills--section--heading" style={{"font-size":"20px"}} >My Expertise</h2>
          </div>
          <div className="skills--section--container">
            <div className="skills--section--card">
              <div className="skills--section--img">
                <FaHeadphones size={48} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title"></h3>
                <p className="skills--section--description" style={{"font-size":"20px"}}> Singer Harry</p>
                <p>
                In 2010, when he was 16 years old, Harry competed in the seventh season of the television show The X Factor,
                 singing Stevie Wonder's "Isn't She Lovely" as his audition song and Oasis' "Stop Crying Your Heart Out" in a later round.
                  He was cut before the finals, but in a surprise move, judges Nicole Scherzinger and Simon Cowell put him together with fellow competitors Niall Horan,
                   Liam Payne, Louis Tomlinson and Zayn Malik to form a new group act for the remainder of the competition.
                </p>
              </div>
            </div>
    
            <div className="skills--section--card">
              <div className="skills--section--img">
                <FaAward size={48} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title"> Awards</h3>
                <p className="skills--section--description">Description for 1d</p>
                <p>
                Performing as One Direction (a name reportedly suggested by Styles), 
                the five boys became one of the most popular contenders in the X Factor finals that season. 
                Although they finished the competition in third place, 
                they were immediately signed to Cowell's Syco music label.
                </p>
              </div>
            </div>
    
            <div className="skills--section--card">
              <div className="skills--section--img">
                <FaMusic size={48} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">Music</h3>
                <p className="skills--section--description">Description for Harry Styles</p>
                <p>
                In 2010 Harry Styles auditioned for the UK television show The X Factor, 
                where the judges combined him with four other young male singers to form One Direction. 
                The boy band became a pop music sensation, delivering hits like "Best Song Ever" and "Story of My Life" through five immensely successful studio albums. 
                Styles then made a solo splash in 2017 with his debut single, "Sign of the Times," and a self-titled album.
                   </p>
              </div>
            </div>
    
            <div className="skills--section--card">
              <div className="skills--section--img">
                <FaSearch size={48} />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">SEO</h3>
                <p className="skills--section--description">Description for SEO skills</p>
                <p>
                Harry Edward Styles was born on February 1, 1994, in Bromsgrove,
                 Worcestershire, in the West Midlands region of England. 
                 His parents, Des and Anne, divorced when he was 7 years old. 
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
  
export default MySkills 

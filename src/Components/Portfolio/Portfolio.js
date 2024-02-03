import React from "react";
import { FaGithub } from "react-icons/fa";
import './Portfolio.css'

const data = {
  portfolio: [
    {
      title: "Up All Night",
      description: "Harry Styles",
      link: "https://example.com/project1",
      src: "https://upload.wikimedia.org/wikipedia/en/9/96/One_direction_up_all_night_albumcover.jpg", //
    },
    {
      title: "Fine Line",
      description: "HarryStyles" ,
      link: "https://example.com/project2",
      src: "https://th.bing.com/th/id/R.1af2b05f9a90003df502122f97ea5d9f?rik=iaai%2bGMnH55I0g&pid=ImgRaw&r=0", 
    },
    {
        title: "Watermelon Sugar",
        description: "Harry Styles",
        link: "https://example.com/project2",
        src: "https://upload.wikimedia.org/wikipedia/en/b/bf/Watermelon_Sugar_-_Harry_Styles.png", 
        
      },
      {
        title: "Harry's House",
        description: "Harry Styles",
        link: "https://example.com/project2",
        src: "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png", 
      },
      {
        title: "Marvel Eternals",
        description: "Harry Styles",
        link: "https://example.com/project2",
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Eternals_%28film%29_poster.jpeg/220px-Eternals_%28film%29_poster.jpeg", 
      }
  ],
};

const Portfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn-btn-github">
            <FaGithub />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="PlaceHolder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
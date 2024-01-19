

import React from 'react';
import './HomePage.css';

interface HomePageProps {
  name: string;
  tagline: string;
}

const HomePage: React.FC<HomePageProps> = ({ name, tagline }) => {

	const parts = tagline.split("CS major @ Boston College")
  return (
    <div className="homepage">
		  <div className="profile-section">
			<img src={process.env.PUBLIC_URL + '/about_updated.jpg'} alt={name} className="profile-image" />
		  </div>

	  <div className="intro-section">
	  <h2>Hello! <span className="wave-emoji">👋</span></h2>
		<p>
		  {parts[0]}
          <a href="https://github.com/choiqz/resume/blob/master/Jeong-Wan_Choi_Resume.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="cs-major-link">
            CS major @ Boston College
          </a>
		  {parts[1]}
        </p>
		<div className="social-icons">
          <a href="https://github.com/choiqz" target="_blank" rel="noopener noreferrer">
			<img src={process.env.PUBLIC_URL + '/github.svg'} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://linkedin.com/in/jeongwan-choi" target="_blank" rel="noopener noreferrer">
			<img src={process.env.PUBLIC_URL + '/linkedin.svg'} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

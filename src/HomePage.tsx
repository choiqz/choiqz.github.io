
import React from 'react';
import './HomePage.css';

interface HomePageProps {
  name: string;
  tagline: string;
}

const HomePage: React.FC<HomePageProps> = ({ name, tagline }) => {
  return (
    <div className="homepage">
      <div className="profile-section">
        <img src={process.env.PUBLIC_URL + '/about_updated.jpg'} alt={name} className="profile-image" />
      </div>
      <div className="intro-section">
        <h2>Hello! 👋</h2>
        <p>{tagline}</p>
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


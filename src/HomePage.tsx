
import React from 'react';
import './HomePageStyling.css';

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
      </div>
    </div>
  );
};

export default HomePage;


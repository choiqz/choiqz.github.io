
import React from 'react';
import HomePage from './HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Removed imagePath prop since it's no longer needed */}
      <HomePage name="Jeong-Wan Choi" tagline="I'm Jeong-Wan, an aspiring software engineer" />
      {/* Other components like Navbar, Footer, etc. */}
    </div>
  );
};

export default App;


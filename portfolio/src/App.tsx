// import { useState } from 'react';
import './App.css';
import logo from './assets/kishan.png';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <nav className='navbar'>
        <a>Home</a>
        <a>Education</a>
        <a>Certifications</a>
        <a>Experiences</a>
        <a>Projects</a>
        
      </nav>
      <div className="content-row">
        <img src={logo}
        className='logo'
        alt='Kishan'/>
        <div className="text-content">
        <h1 className='namehead'>Rajendra Kishan</h1>
        <p className='intro'>A person who is eager to learn new things as possible and to try every challenges I face. A student who is dying to do hard-work and acquire my degree with dedication which I love to have all the time. A man who is expecting to continue my career in Artificial Intelligence and Machine Learning path, without having any experience so far. A professional, who is bounded by the ethics and guided through punctuality.
        As this was the short summary of me, who is willing to survive in the Industry in future. My dream is not big, but cannot be explainable. In simple, "I have to be the best of best". I am living according to my own principles and listening to my intuition. Although, I don't have achievements until now, I won't hesitate to make at least one before the end of my career. <></>Thanks and Cheers </p>
    </div>
    </div>
    <div className='Education'>
      <h1 className='eduHeader'>Education</h1>
      <div className="education-cards">
      <div className="edu-card">
            <h2>Bachelor of Technology in Computer Science</h2>
            <div className="edu-details">
              <span className="edu-institution">University Name</span>
              <span className="edu-duration">2020 - 2024</span>
            </div>
            <p className="edu-description">
              Relevant coursework: Data Structures, Algorithms, Machine Learning, 
              Artificial Intelligence, Database Systems
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default App;

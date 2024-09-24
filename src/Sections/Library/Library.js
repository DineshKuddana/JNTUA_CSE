import React from 'react';
import './Library.css'; 


const Header = () => {
  return (
    <div className="heading">
      <div className="heading-content">CSE DEPARTMENT LIBRARY</div>
    </div>
  );
};



const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src="./images/library/library.jpg" alt="Library" />
      </div>
      <div className="about-content">
        <div className="about-heading">About Our Library</div>
        <p>
          The Department Library of the Computer Science and Engineering (CSE)
          department offers a comprehensive array of software and digital
          resources to support academic and research needs. Key software
          includes KOHA, a robust library management system, along with access
          to e-resources like Knimbus and DELNET. These resources are readily
          accessible both on-site and remotely for all registered users within
          the campus network. Students and faculty can utilize their designated
          login credentials to seamlessly explore and utilize the available
          resources, fostering a conducive environment for learning and research
          within the department.
        </p>
      </div>
    </div>
  );
};



const Software = () => {
  return (
    <div className="softwares">
      <div className="description-heading">
        <h1>Library's Free Resource Access</h1>
      </div>
      <div className="description">
        {/* Cards */}

        <div className="cards">
          <img src="./images/library/delnet.png" alt="DELNET" />
          <h1 className="cards-heading">DELNET</h1>
          <p className="login-credentials">
            Username: apjntuacea
            <br />
            Password: jntu5251
            <br />
            Access Now
            <br />
           </p>
            <a
              href="http://delnet.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Click me</button>
            </a>
        </div>

        <div className="cards">
          <img src="./images/library/knimbus.png" alt="KNIMBUS" />
          <h1 className="cards-heading">KNIMBUS</h1>
          <p className="login-credentials">
            Username: principal.cea@jntua.ac.in
            <br />
            Password: centrallibrary
            <br />
            Access Now
            <br />
            </p>
            <a href="https://www.knimbus.com/#/" target="_blank" rel="noopener noreferrer">
            <button>Click me</button>
            </a>

        </div>

        <div className="cards">
          <img src="./images/library/koha.jpeg" alt="KOHA" />
          <h1 className="cards-heading">KOHA</h1>
          <p className="login-credentials">
            A User can search the entire books available in the library.
            <br />
            Access Now
          </p>
          <a href="http://10.66.19.240/" target="_blank" rel='noreferrer'>
            <button>Click me</button>
          </a>
        </div>

        <div className="cards">
          <img src="./images/library/nptel.png" alt="NPTEL VIDEOS" />
          <h1 className="cards-heading">NPTEL VIDEOS</h1>
          <p className="login-credentials">
            In the library's digital collection, Explore NPTEL's educational
            videos.
            <br />
            Access Now
          </p>
          <a href="https://nptel.ac.in/" target="_blank" rel='noreferrer'>
            <button>Click me</button>
          </a>
        </div>

        <div className="cards">
          <img src="./images/library/IEL.jpg" alt="IEL" />
          <h1 className="cards-heading">IEL</h1>
          <p className="login-credentials">
            Username: L11003070
            <br />
            Password: L11003070
            <br />
            Access Now
          </p>
          <a href="https://www.ieindia.org" target="_blank" rel='noreferrer'>
            <button>Click me</button>
          </a>
        </div>

        <div className="cards">
          <img src="./images/library/ndl.png" alt="NDL" rel='noreferrer' />
          <h1 className="cards-heading">NDL</h1>
          <p className="login-credentials">
            Free Access
            <br />
            link: https://ndl.iitkgp.ac.in/
            <br />
            Access Now
          </p>
          <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel='noreferrer'>
            <button>Click me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <div className="footer">
      <p className="copyright">
        &copy; 2024 JNTUACEA,Dept Of CSE. All rights reserved.
      </p>
    </div>
  );
};


// Main App component
const Library = () => {
  return (
    <div>
      <Header />
      <About />
      <Software />
      <Footer />
    </div>
  );
};

export default Library;
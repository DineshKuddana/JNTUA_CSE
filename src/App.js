import React from "react";
import Home from './Home';
import NavBar from './Components/NavBar/NavBar.js';
import Header from './Components/Header/Header.js';
import Contact from './Components/Contact/Contact.js'
import Banner from './Components/Banner/Banner.js';
import Footer from './Components/Footer/Footer.js';
import Highlights from './Components/Highlights/Highlights.js';
import Notification from './Components/Notification/Notification.js';
import Glimpse from './Components/Glimpse/Glimpse.js';
import Marquee from './Components/Marquee/Marquee.js';
import VisionMission from './Components/VisionMission/VisionMission.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Faculty from './Sections/Faculty/Faculty.js';
import Students from "./Sections/Students/Students.js";
import About from './Sections/About/AboutDept.js';
import Achievements from "./Sections/Achievements/Achievements.js";
import Gallery from "./Sections/Gallery/Gallery.js";
import Library from "./Sections/Library/Library.js";
import Academics from "./Sections/Academics/Academics.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
          <Route element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="library" element={<Library />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="students" element={<Students />}/>
          <Route path="achievements" element={<Achievements />}/>
          <Route path="gallery" element={<Gallery />} />
          <Route path="academics" element={<Academics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <Marquee />
      <Banner />
      <VisionMission />
      <Notification />
      <Highlights />
      <Glimpse />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
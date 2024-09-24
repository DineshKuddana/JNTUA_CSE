import './Achievements.css';
import charan from './Geethacharan.jpeg';
import mahanth from './Mahanth.jpg';
import prabhas from './Prabhas.jpg';
import roopesh from './Roopesh.jpg';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import placements1 from './placement1.jpg';
import placements2 from './placement2.jpg';
import high1 from './high1.jpg';
import high2 from './high2.jpg';
import high3 from './high3.jpg';


const data=[
    {
        imgurl:charan,
        title:'AIR 15 GATE CS 2022',
        name:'Geetha Charan',
      },
    {
      imgurl:mahanth,
      title:'AIR 24 GATE CS 2024',
      name: 'Yalla Mahanth',
    },
    {
      imgurl:prabhas,
      title:'AIR 135 GATE CS 2023',
      name:'Prabhas Onteru'
    },
    {
        imgurl:roopesh,
        title:'AIR 323 GATE CS 2022',
        name:'Roopesh Reddy',
    },
];




const Achievements=() => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1400
      };
    return(
        <>
        <div className="Gate-container">
            <h1>All India Gate Rankers </h1>
        <div className="main-container">
            <div className="main-container1">
            <Slider {...settings}>
                {data.map ((d) =>{
                    return(
                 <div className="Gate">

                    <div className='Gate-img'>
                        <img src={d.imgurl} alt=""  />
                    </div>
                    <div id='name'>
                        <p>{d.name} </p>
                    </div>
                    <div className='Gate-p'>
                        <p>{d.title} </p>
                    </div>

                 </div>    );           
                })}
            </Slider>
            </div>
        </div>
        </div>
        <div className="placements">
            <h1>Placements</h1>
            <div className="place-img">
                <section>
                    <img src={placements1} alt="" />
                </section>
                <section>
                    <img src={placements2} alt="" />
                </section>
            </div>

            <p>FactSet provides data and analytical applications to global buy and sell-side professionals, including portfolio managers, market research and performance analysts, risk managers, sell-side equity researchers, investment bankers, and fixed income professionals. FactSet's Workstation includes real-time news and quotes, company and portfolio analysis, multi-company comparisons, industry analysis, company screening, portfolio optimization and simulation, predictive risk measurements, alpha testing and tools to value and analyze fixed income securities and portfolios.In November 2020, FactSet furnished over 400 affinity databases and sought to restructure its foundation with inside the cloud to Amazon Web Services (AWS) .
            <p>FACTSET had offered 10 LPA for 6 members of JNTUA students and offered internships for 3 members in offline placements. We hope that FACTSET will continue to support JNTUA students for long time .</p>
            </p>
        </div>

        <h2>Highest Packages</h2>
        <div className="high-packages">
            
            <div className="package1">
                <section>
                    <img src={high1} alt="" />
                </section>
                <section>
                    <img src={high2} alt="" />
                </section>
            </div>
            <div className="package2">
                <section>
                    <img src={high3} alt="" />
                </section>
                
            </div>
        </div>
        </>
    );
}

export default Achievements;

import React from 'react';
import './Marquee.css';

class Marquee extends React.Component {
    render() {
        return (
            <div className="breaking-news-section">
                <span id="btext">Latest News</span>
                <div className="marquee-container">
                    <div className="marquee-content">
                        <i className="fa-solid fa-fire"></i>&nbsp;&nbsp;&nbsp;
                        <span className="text">Accredited with NAAC A Grade</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-fire"></i>&nbsp;&nbsp;&nbsp;
                        <span className="text">AIR 24 GATE 2024</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-fire"></i>&nbsp;&nbsp;&nbsp;
                        <span className="text">Highest Package 10LPA</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Marquee;

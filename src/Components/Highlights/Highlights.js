import React from 'react';
import './Highlights.css'; // Assuming you have your CSS in a separate file

const Highlights = () => {
    return (
        <section id="key-highlights" className="key-highlights-section">
            <h2 className="section-title">Key Highlights</h2>
            <div className="container">

                <div className="highlights-container">

                    <div className="highlight">
                        <h3>Faculty Expertise</h3>
                        <p>Highlight the expertise of your faculty members.</p>
                    </div>

                    <div className="highlight">
                        <h3>Research Excellence</h3>
                        <p>Showcase your department's research accomplishments.</p>
                    </div>

                    <div className="highlight">
                        <h3>Student Achievements</h3>
                        <p>Highlight some notable achievements of your students.</p>
                    </div>

                    <div className="highlight">
                        <h3>Student Clubs</h3>
                        <p>Where creativity meets technology, igniting student-led projects and breakthroughs.</p>
                    </div>
                    <div className="highlight">
                        <h3>Facilities</h3>
                        <p>Display information about your department facilities.</p>
                    </div>
                    <div className="highlight">
                        <h3>EngageTech Initiatives</h3>
                        <p>Students leveraging technology to benefit and engage local communities.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Highlights;

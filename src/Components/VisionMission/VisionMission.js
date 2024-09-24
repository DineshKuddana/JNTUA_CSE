import React, { useState } from 'react';
import './VisionMission.css';
import vission from './abc.png';

const VisionMission = () => {
    const [activeTab, setActiveTab] = useState('vision');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="vision-mission-container">
            <div className="image-container">
                <figure>
                    <img className="hod-image" src={vission} alt="Vice Chancellor" />
                    {/* <figcaption>Head of the Department</figcaption> */}
                </figure>
            </div>
            <div className="vision-mission-text">
                <div className="tabs-container">
                    <p className={`tab-links ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => openTab('vision')}>VISION</p>
                    <p className={`tab-links ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => openTab('mission')}>MISSION</p>
                </div>
                <div className={`vision tab-content ${activeTab === 'vision' ? 'active' : ''}`}>
                    <p>To become a center of excellence in computer science education and research by imparting students with latest technical skills through high quality teaching methodologies supplemented with practical orientation to face the challenges in the field of computer science and engineering for the benefit of the society.</p>
                </div>
                <div className={`mission tab-content ${activeTab === 'mission' ? 'active' : ''}`}>
                    <p>To educate and train next generation computer professionals with strong theoretical and practical foundations in computer science discipline.To amplify the hidden technical skills in the graduates by cultivating research and apply attitude in the field of computer science and engineering.
                        To instill value-based professional behavior and strong ethical morals in the graduates and motivate them to apply their knowledge to the benefit of the society.</p>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;

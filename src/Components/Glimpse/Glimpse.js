import React from 'react';
import './Glimpse.css';
import facultyImage from '../images/faculty.jpg';
import studentImage from '../images/student.jpg';
import researchImage from '../images/book.jpg';
import techFestImage from '../images/pixel.jpg';
import communityImage from '../images/community.jpg';
import virtualTourImage from '../images/virtual.jpg';

function Glimpse() {
  return (
    <section id="glimpse" className="glimpse-section">
        <h2 className="section-title">Glimpse of CSE Department</h2>
        <div className="container">

            <div className="content">
                <div className="content-item">
                    <img src={facultyImage} alt="Faculty Achievements" className="content-image" />
                    <h3>Faculty Achievements</h3>
                    <p>Our esteemed faculty members are leaders in their respective fields, with numerous accolades, publications, and research contributions. They have received prestigious awards and honors.</p>
                    <p>Their research spans diverse areas such as artificial intelligence, cybersecurity, data science, and more.</p>
                </div>
                <div className="content-item">
                    <img src={studentImage} alt="Student Success Stories" className="content-image" />
                    <h3>Student Success Stories</h3>
                    <p>Our students are the driving force behind our department's success, excelling in academics, research, and extracurricular activities. They have won national and international awards for their innovative projects, research papers, and contributions to the tech community.</p>
                    <p>Alumni from our department have pursued successful careers in top tech companies, academia, research institutions, and entrepreneurship ventures.</p>
                </div>
                <div className="content-item">
                    <img src={researchImage} alt="Research and Publications" className="content-image" />
                    <h3>Research and Publications</h3>
                    <p>The CSE department is at the forefront of cutting-edge research, with groundbreaking discoveries and impactful publications. Our faculty and students collaborate on interdisciplinary research projects, addressing real-world challenges and pushing the boundaries of knowledge.</p>
                    <p>Explore our research publications in leading journals, conferences, and academic publications, covering a wide range of topics and domains.</p>
                </div>
                <div className="content-item">
                    <img src={techFestImage} alt="Tech Fests and Programs" className="content-image" />
                    <h3>Tech Fests and Programs</h3>
                    <p>Experience the excitement of our annual tech fests, hackathons, and innovation challenges, where students showcase their creativity and problem-solving skills. Engage in hands-on workshops, seminars, and guest lectures conducted by industry experts, thought leaders, and distinguished alumni.</p>
                    <p>Participate in student-led clubs, organizations, and initiatives focused on coding, robotics, artificial intelligence, and more.</p>
                </div>
                <div className="content-item">
                    <img src={communityImage} alt="Community Engagement" className="content-image" />
                    <h3>Community Engagement</h3>
                    <p>We believe in giving back to the community and making a positive impact through technology. Join our community outreach programs, volunteer opportunities, and social initiatives aimed at leveraging technology for social good.</p>
                    <p>Collaborate with local organizations, schools, and nonprofits to address societal challenges and foster digital inclusion and empowerment.</p>
                </div>
                <div className="content-item">
                    <img src={virtualTourImage} alt="Virtual Tour" className="content-image" />
                    <h3>Virtual Tour</h3>
                    <p>Take a virtual tour of our state-of-the-art labs, classrooms, and facilities, equipped with the latest technology and resources. Explore our campus environment, research centers, and innovation hubs, where ideas come to life and dreams are realized.</p>
                    <p>Immerse yourself in our virtual experience and discover the possibilities awaiting you at the CSE department of JNTUACEA.</p>
                </div>
            </div>
        </div>
    </section>
);
}

export default Glimpse;

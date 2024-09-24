import React from 'react';
import './AboutDept.css';
import Footer from '../../Components/Footer/Footer';
const AboutDept = () => {
  return (
    <>
    <div className="about-department-container">
      <h2>About Department</h2>
      <p>
        The department of Computer Science Engineering has started offering
        B.Tech programme since 1989 with an intake of 15 students...
      </p>
      <div className="image-container">
        <img
          src="https://www.jntuacea.ac.in/images/csedept.jpg"
          alt="Department"
        />
      </div>
      <div className="section">
        <h3>Programme Educational Objectives (PEOs):</h3>
        <ul>
          <li>
          <b></b>PEO 1. Graduates of the program are adequately prepared to be employed in IT industries and Public Sector companies by forecasting a logical and practical approach to problem solving that would prepare them to function effectively as skilled computer engineers.
          </li>
          <li>
          <b></b>PEO 2. To impart students with solid foundation in mathematics, computing and core engineering fundamentals so as to help them to excel in their professional career or higher education.
          </li>
          <li>
          <b></b>PEO 3. To promote lifelong learning by encouraging research and an attitude to apply the basic theories learnt during their graduation, leading to the creativity and productivity in their respective fields.
          </li>
          <li>
          <b></b>PEO 4. To inculcate students with leadership qualities, communication skills and ethical behavior as IT professionals that can lead to positive impact of technology on society          
          </li>
        </ul>
      </div>
      <div className="section">
        <h3>Programme Outcomes:</h3>
        <ul>
          <li>
          <b>PO 1.</b>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
          </li>
          <li>
          <b>PO 2.</b> Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences. 
          </li>
          <li>
          <b>PO 3.</b> Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
          </li>
          <li>
          <b>PO 4.</b> Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
          </li>
          <li>
          <b>PO 5.</b> Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
          </li>
          <li>
          <b>PO 6.</b>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
          </li>
          <li>
          <b>PO 7.</b> Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
          </li>
          <li>
          <b>PO 8. </b>Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
          </li>
          <li>
          <b>PO 9.</b> Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
          </li>
          <li>
          <b>PO 10.</b> Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
          </li>
          <li>
          <b>PO 11.</b> Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
          </li>
          <li>
          <b>PO 12.</b> Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
          </li>

        </ul>
      </div>
      <div className="section">
        <h3>Program Specific Outcomes:</h3>
        <ul>
          <li>
          <b>PSO 1.</b> Ability to understand and apply the concepts of mathematics, basic sciences, basic computing, in analyzing the real world problems and solving them.
          </li>
          <li>
          <b>PSO 2.</b> Ability to design and develop computer programs/ computer-based systems in the areas related to algorithms, networking, web design, and data analytics using Software engineering principles and practices.
          </li>
          <li>
          <b>PSO 3.</b> Ability to imbibe ethical and professional skills required to work in teams and lead the team.
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutDept;
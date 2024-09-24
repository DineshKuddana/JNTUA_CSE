import React from 'react';
import './Faculty.css';
import data from './Data.js';
import Footer from '../../Components/Footer/Footer.js';


const Faculty = () => {
  return (
    <>
      
      <section className='top'>
        <Head />
      </section>
      <section className="posts-container">
        {data.map((eachObj) => {
          const { cardId, id, title, url, details, about } = eachObj;
          return <Card key={id} cardId={cardId} id={id} url={url} title={title} details={details} about={about} />;
        })}


      </section>


<Footer/>

    </>
  );
};


const Head = () => {
  return (
    <>


      <section className='top'>
        <h1 className='top-heading'>Our Faculty</h1>
      </section>



    </>
  )
}
const Card = (props) => {
  const { title, url, details, about } = props;
  return (
    <>

      <div className="card">
        <img className="card-image" src={url} alt="mage" />
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{about}</p>
        <a href={details} className="button" target="_blank" rel="noopener noreferrer"  >
          More Details
        </a>
      </div>

    </>
  );

};

export default Faculty;

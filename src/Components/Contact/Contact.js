import React, { useRef } from 'react';
import './Contact.css'


const Contact = () => {
    const contactInfo = {
        name: 'Head of the Department',
        phone1: '☎ +91 7382720313(O)',
        phone2: '✆ +91 9441377789(P)',
        email: '📧 hod.cse.cea@jntua.ac.in',
    };

    const address = {
        street: 'Department of CSE, JNTUACEA',
        city: 'Ananthapuramu',
        state: 'Andhra Pradesh',
        zip: '515002',
    };

    const contactHeaderRef = useRef(null);
    const addressHeaderRef = useRef(null);
    const mapHeaderRef = useRef(null);

    const handleHeaderHover = (ref) => {
        const header = ref.current;
        header.classList.add('header-anim');
        setTimeout(() => {
            header.classList.remove('header-anim');
        }, 500);
    };

    return (
        <div className="dept-info">
            <div className="contact-us">
                <h3 ref={contactHeaderRef} onMouseEnter={() => handleHeaderHover(contactHeaderRef)}>Contact Us</h3>
                <p>
                    <strong>{contactInfo.name}</strong>
                    <br />
                    {contactInfo.phone1}
                    <br />
                    {contactInfo.phone2}
                    <br />
                    {contactInfo.email}
                </p>

                <a className='icons'>   
                    <a href="https://www.linkedin.com/in/jntuacea-cse/" target="_blank" class="fa fa-linkedin"></a>
                    <a href="https://www.instagram.com/jntuacea_cse/" target="_blank" class="fa fa-instagram"></a>
                    <a href="https://www.facebook.com/profile.php?id=61557938032175" target="_blank"class="fa fa-facebook"></a>
                </a>
            </div>
            <div className="address">
                <h3 ref={addressHeaderRef} onMouseEnter={() => handleHeaderHover(addressHeaderRef)}>Address</h3>
                <p>
                    {address.street}
                    <br />
                    {address.city}, {address.state} {address.zip}
                </p>
            </div>
            <div className="map">
                <h3 ref={mapHeaderRef} onMouseEnter={() => handleHeaderHover(mapHeaderRef)}>Map</h3>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.0823243534003!2d77.6065445786292!3d14.652669249155657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b206e735531%3A0x7c0393a330eab183!2sNew%20Computer%20Science%20Department!5e0!3m2!1sen!2sin!4v1709723969539!5m2!1sen!2sin"
                        width="350"
                        height="200"
                        style={{ border: 0, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}
                        title='map'
                    ></iframe>

                </div>
            </div>

        </div>
    );
};

export default Contact;
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Gallery.css"
// import { useSpring, animated } from "react-spring";
// import RotatingImage from "./rotae";

import Footer from '../../Components/Footer/Footer';
function Gallery() {
  const [isHovered, setIsHovered] = useState(false);
  const springProps = useSpring({
    transform: `rotate(${isHovered ? 30 : 0}deg)`, // Rotate the image 360 degrees when hovered
  });
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);
  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title === itemData);
    setData(filterData);
  };
  return (
    <>
    <div className="App">
      <h1>Computer Science and Engineering Gallery</h1>
      <div className="galleryWrapper">
        <div className="filterItem">
          <nav className="Navbar">
            <ul>
              <li>
                <button onClick={() => setData(GalleryData)}>All</button>
              </li>
              {collection.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      gallery_filter(item);
                    }}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            // <div className="galleryItem">
            //   <animated.img
            //     src={item.image}
            //     key={item.id}
            //     alt="your image"
            //     onMouseEnter={() => setIsHovered(true)}
            //     onMouseLeave={() => setIsHovered(false)}
            //     style={springProps}
            //   />
            // </div>

            <RotatingImage src={item.image} />
          ))}
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export const RotatingImage = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    scale: isHovered ? 1.1 : 1, // Rotate the image 360 degrees when hovered
  });

  return (
    <div className="galleryItem">
      <animated.img
        src={ src }
        alt="Your Image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style = {springProps}
      />
    </div>
  );
};

export const GalleryData = [
  // Adding the department photos
  {
    id: 1,
    title: "Department",
    image: "./images/Department/dept1.jpg",
  },
  {
    id: 2,
    title: "Department",
    image: "./images/Department/dept2.jpg",
  },
  {
    id: 3,
    title: "Department",
    image: "./images/Department/dept3.jpg",
  },
  {
    id: 4,
    title: "Department",
    image: "./images/Department/dept4.jpg",
  },
  {
    id: 5,
    title: "Department",
    image: "./images/Department/dept5.jpg",
  },
  {
    id: 6,
    title: "Department",
    image: "./images/Department/dept6.jpg",
  },
  {
    id: 7,
    title: "Department",
    image: "./images/Department/dept15.jpg",
  },
  {
    id: 8,
    title: "Department",
    image: "./images/Department/dept8.jpg",
  },
  {
    id: 9,
    title: "Department",
    image: "./images/Department/dept9.jpg",
  },
  {
    id: 10,
    title: "Department",
    image: "./images/Department/dept10.jpg",
  },
  {
    id: 11,
    title: "Department",
    image: "./images/Department/dept11.jpg",
  },
  {
    id: 12,
    title: "Department",
    image: "./images/Department/dept12.jpg",
  },
  {
    id: 13,
    title: "Department",
    image: "./images/Department/dept13.jpg",
  },
  {
    id: 14,
    title: "Department",
    image: "./images/Department/dept14.jpg",
  },
  {
    id: 15,
    title: "Department",
    image: "./images/Department/dept15.jpg",
  },
  {
    id: 15,
    title: "Department",
    image: "./images/Department/dept15.jpg",
  },
  // NSS photos
  {
    id: 16,
    title: "NSS",
    image: "./images/NSS/nss1.jpg",
  },
  {
    id: 17,
    title: "NSS",
    image: "./images/NSS/nss2.jpg",
  },
  {
    id: 18,
    title: "NSS",
    image: "./images/NSS/nss3.jpg",
  },
  {
    id: 19,
    title: "NSS",
    image: "./images/NSS/nss4.jpg",
  },
  {
    id: 20,
    title: "NSS",
    image: "./images/NSS/nss5.jpg",
  },
  {
    id: 21,
    title: "NSS",
    image: "./images/NSS/nss6.jpg",
  },
  {
    id: 22,
    title: "NSS",
    image: "./images/NSS/nss7.jpg",
  },
  {
    id: 23,
    title: "NSS",
    image: "./images/NSS/nss8.jpg",
  },
  {
    id: 24,
    title: "NSS",
    image: "./images/NSS/nss9.jpg",
  },
  {
    id: 25,
    title: "NSS",
    image: "./images/NSS/nss10.jpg",
  },
  {
    id: 27,
    title: "NSS",
    image: "./images/NSS/nss11.jpg",
  },
  {
    id: 28,
    title: "NSS",
    image: "./images/NSS/nss12.jpg",
  },
  {
    id: 29,
    title: "NSS",
    image: "./images/NSS/nss13.jpg",
  },
  {
    id: 30,
    title: "NSS",
    image: "./images/NSS/nss14.jpg",
  },
  {
    id: 31,
    title: "NSS",
    image: "./images/NSS/nss15.jpg",
  },
  {
    id: 32,
    title: "NSS",
    image: "./images/NSS/nss16.jpg",
  },
  {
    id: 33,
    title: "NSS",
    image: "./images/NSS/nss17.jpg",
  },
  {
    id: 34,
    title: "NSS",
    image: "./images/NSS/nss18.jpg",
  },
  {
    id: 35,
    title: "NSS",
    image: "./images/NSS/nss19.jpg",
  },
  {
    id: 36,
    title: "NSS",
    image: "./images/NSS/nss20.jpg",
  },
  {
    id: 37,
    title: "NSS",
    image: "./images/NSS/nss21.jpg",
  },

  //Faculty
  {
    id: 38,
    title: "faculty",
    image: "./images/faculty/IMG-20240124-WA0003.jpg",
  },
  {
    id: 39,
    title: "faculty",
    image: "./images/faculty/IMG-20240124-WA0011.jpg",
  },
  // Pixel 2k23
  {
    id: 40,
    title: "pixel",
    image: "./images/pixel/p1.jpg",
  },
  {
    id: 41,
    title: "pixel",
    image: "./images/pixel/p2.jpg",
  },
  {
    id: 42,
    title: "pixel",
    image: "./images/pixel/p3.jpg",
  },
  {
    id: 43,
    title: "pixel",
    image: "./images/pixel/p4.jpg",
  },
  {
    id: 44,
    title: "pixel",
    image: "./images/pixel/p5.jpg",
  },
];

export default Gallery;
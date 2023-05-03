import {React, useState} from "react";
import './Carousel.css';
import { FaChevronRight, FaChevronLeft, FaCircle, FaRegCircle } from 'react-icons/fa';


export default function Carousel({logo}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function previous() {
    setCurrentIndex((currentIndex - 1 + logo.length) % logo.length)
  }

  function next() {
    setCurrentIndex((currentIndex + 1) % logo.length)
  }

  return (
    <>
    <div className="main">
      <FaChevronLeft className="large" onClick={previous}/>
      <div className="slider" style={{backgroundImage: `url(${logo[currentIndex].url})`}}></div>
      <FaChevronRight className="large" onClick={next}/>
    </div>
    <Circle />
    </>
  )

  function circleClick(logoIndex) {
    setCurrentIndex(logoIndex)
  }

  function Circle() {
    return (
      <div className="circlestyle">
        {logo.map((logo, logoIndex) => (
          <div className="paddingright" key={logoIndex} onClick={() => circleClick(logoIndex)}> { currentIndex === logoIndex ? <FaRegCircle /> : <FaCircle />} </div>
        ))}
      </div>
    )
  }
}

import React from 'react'
import "./home_page.css";
import myImg from '../../assets/img/0.png';
// import myImg from '../../assets/img/000.png';

export default function HomePage() {
  return (
    <div className='home-page'>
      <img alt="Ragab img" src={myImg} />
    </div>
  )
}

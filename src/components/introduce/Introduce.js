import React from 'react';
import './introduce.scss';
import image from '../../img/image.png';

export const Introduce = () => {
  return (
    <div className='introduce_container'>
      <div className='content'>
        <h1>Test title string.</h1>
        <span>Lorem ipsum dolor sit amet.</span>
        <div className='cards_container row'>
          <div className='card'>
            <img src={image} alt="image"/>
            <div className='card_text'>
              <h3>Card#1</h3>
              <span>Magna deserunt tempor sunt eiusmod tempor ea sit id ad ipsum. Irure excepteur quis aliquip sint laboris dolor non nostrud ea tempor irure non veniam. Nisi eu irure officia do est.</span>
            </div>
          </div>
          <div className='card'>
            <img src={image} alt="image"/>
            <div className='card_text'>
              <h3>Card#2</h3>
              <span>Magna deserunt tempor sunt eiusmod tempor ea sit id ad ipsum. Irure excepteur quis aliquip sint laboris dolor non nostrud ea tempor irure non veniam. Nisi eu irure officia do est.</span>
            </div>
          </div>
          <div className='card'>
            <img src={image} alt="image"/>
            <div className='card_text'>
              <h3>Card#3</h3>
              <span>Magna deserunt tempor sunt eiusmod tempor ea sit id ad ipsum. Irure excepteur quis aliquip sint laboris dolor non nostrud ea tempor irure non veniam. Nisi eu irure officia do est.</span>
            </div>
          </div>
        </div>
          <a href="#" className='button intro_button'>Duis adipisicing reprehenderit.</a>
      </div>
    </div>
  )
}

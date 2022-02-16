import React from 'react';
import './header.scss';

export const Header = () => {
  function btnClck(){
    let box = document.querySelector('.menu__box');
    let button = document.querySelector('.menu__btn');
    let logo = document.querySelector('.logo');
    let body = document.querySelector('body');
    box.classList.toggle('active_box');
    button.classList.toggle('active_btn');
    logo.classList.toggle('active_logo');
    body.classList.toggle('scroll_lock');
  }
  return (
    <div className='header_block'>
        <div className='header_content'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='links'>
                    <a href="#" className='link'>Link#1</a>
                    <a href="#" className='link'>Link#2</a>
                    <a href="#" className='link'>Link#3 </a>
                    <a href="#" className='link'>Link#4</a>
                    <a href="#" className='button button_link'>Alt. Link#5</a>
                    <div className="hamburger-menu">
                      <label onClick={btnClck} className="menu__btn" for="menu__toggle">
                        <span></span>
                      </label>
                      <ul className="menu__box">
                        <li onClick={btnClck}><a className="menu__item" href="#"><h3>Link#1</h3></a></li>
                        <li onClick={btnClck}><a className="menu__item" href="#"><h3>Link#2</h3></a></li>
                        <li onClick={btnClck}><a className="menu__item" href="#"><h3>Link#3</h3></a></li>
                        <li onClick={btnClck}><a className="menu__item" href="#"><h3>Link#4</h3></a></li>
                      </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}

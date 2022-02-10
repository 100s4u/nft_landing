import React from 'react';
import './header.scss';

export const Header = () => {
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
            </div>
        </div>
    </div>
  )
}

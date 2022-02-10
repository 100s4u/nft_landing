import React from 'react';
import './main_page.scss';

export const MainBlock = () => {
  return (
      <div className='main_container'>
          <div className='content'>
              <div className='hello_text'>
                <h1>Testing the test.</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a blandit dolor. Nulla a tempus elit. Vestibulum sodales bibendum augue, et semper ipsum vestibulum ac. Sed et metus ac arcu feugiat tempor. Phasellus sit amet elit massa. Etiam placerat metus lacus, ac accumsan velit sodales sed.</span>
                <a href="#" className='button button_link'>Button</a>
                <a href="#" className='link_underline'>Alternative link with some text.</a>
              </div>
            </div>  
      </div>
  )
}

import React from 'react';
import './about_block.scss';
import image from '../../img/image.png';

export const About = () => {
  return (
    <div className='row'>
        <div className="about_container">
          <div className='iframe'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="paragraph">
            <img src={image} alt="image"/>
            <div className="paragraph_text">
              <h2>Some text.</h2>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a blandit dolor. Nulla a tempus elit. Vestibulum sodales bibendum augue, et semper ipsum vestibulum ac. Sed et metus ac arcu feugiat tempor. Phasellus sit amet elit massa. Etiam placerat metus lacus, ac accumsan velit sodales sed.</span>
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph_text">
              <h2>Some text.</h2>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a blandit dolor. Nulla a tempus elit. Vestibulum sodales bibendum augue, et semper ipsum vestibulum ac. Sed et metus ac arcu feugiat tempor. Phasellus sit amet elit massa. Etiam placerat metus lacus, ac accumsan velit sodales sed.</span>
              <div className="p__buttons">
                <a className="button p_button" href="#">Button#1</a>
                <a className="button p_button" href="#">Button#2</a>
              </div>
            </div>
            <img src={image} alt="image"/>
          </div>
        </div>
    </div>
  )
}

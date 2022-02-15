import React from 'react';
import './more_about.scss';
import image from '../../img/image.png';

export const MoreAbout = () => {
  return (
    <div className='mBlock'>
        <div className='row'>
            <div className='mBlock_container'>
                <img src={image}/>
                <div className='mBlock_content'>
                  <h2>Test string</h2>
                  <h4>Sint sunt enim laboris eu adipisicing.</h4>
                  <span>Deserunt commodo anim eiusmod pariatur sint mollit ullamco proident anim in elit excepteur ut. Consectetur aute anim ut cupidatat quis laboris id esse ipsum. Sint nulla velit do ullamco qui amet non amet voluptate anim amet qui commodo.</span>
                  <a href="#" className='button mBlock_button'><h4>Test string</h4></a>
                </div>
            </div>
        </div>
    </div>
  )
}

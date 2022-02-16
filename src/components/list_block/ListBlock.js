import React from 'react';
import './list_block.scss';
import image from '../../img/image.png';

export const ListBlock = () => {
  return (
    <div className='list_block'>
        <div className='row'>    
            <div className='list_block__container'>
                <h2>Commodo aute nisi amet mollit.</h2>
                <div className='items'>
                    <div className='item'>
                        <img src={image}/>
                        <div className='item_content'>
                            <h3>TestItem#1</h3>
                            <span>Ipsum labore dolore ullamco adipisicing occaecat voluptate aute.Sunt duis officia officia exercitation commodo exercitation ea est labore eiusmod.</span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={image}/>
                        <div className='item_content'>
                            <h3>TestItem#2</h3>
                            <span>Ipsum labore dolore ullamco adipisicing occaecat voluptate aute.Sunt duis officia officia exercitation commodo exercitation ea est labore eiusmod.</span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={image}/>
                        <div className='item_content'>
                            <h3>TestItem#3</h3>
                            <span>Ipsum labore dolore ullamco adipisicing occaecat voluptate aute ea est labore eiusmod.</span>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={image}/>
                        <div className='item_content'>
                            <h3>TestItem#4</h3>
                            <span>Sunt duis officia officia exercitation commodo exercitation ea est labore eiusmod.</span>
                        </div>
                    </div>
                    <h4>Deserunt amet id cillum irure culpa incididunt aliquip aliqua.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

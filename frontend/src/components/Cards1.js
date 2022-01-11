import React from 'react';
import './Cards1.css';
import CardItem1 from './CardItem1';

function Cards1() {
  return (
    <div className='cards1'>
      <h1>Využijte naší jedinečné nabídky</h1>
      <div className='cards__container' id='ext'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem1
              src='images/img_hor.jpg'
              text='Horizontální žaluzie'
              label='Více o produktu'
              path='/Horizontal'
            />
            <CardItem1
              src='images/img_nah.jpg'
              text='Náhradní díly'
              label='Více o produktu'
              path='/products'
            />
          </ul>          
        </div>
      </div>
    </div>
  );
}

export default Cards1;

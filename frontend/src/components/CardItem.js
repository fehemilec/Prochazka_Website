import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h3 className='cards__item__text'>{props.text}</h3>
            <p className='cards__item__text1'>{props.text1}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;

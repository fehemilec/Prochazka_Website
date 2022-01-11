import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Naše nabídka</h1>
      <div className='cards__container' id='ext'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Žaluzie'
              text1='Horizontální, vertikální, ISOdesign, venkovní, dřevěné a atypické'
              label='Mystery'
            />
            <CardItem
              src='images/3.jpg'
              text='Rolety'
              text1='Látkové a venkovní'
              label='Adventure'
            /></ul>      
            <ul className='cards__items'>
            <CardItem
              src='images/2.jpg'
              text='Markýzy'
              text1='Balkóny, terasy a komerční prostory'
              label='Adrenaline'
            />  
            <CardItem
              src='images/4.jpg'
              text='Zastínění zimních zahrad'
              text1='Vnitřní a venkovní'
              label='Mystery'
            /></ul>      
            <ul className='cards__items'>
            <CardItem
              src='images/5.jpg'
              text='Sítě proti hmyzu'
              text1='Pevné, otočné a svinovací'
              label='Adventure'
            />
            <CardItem
              src='images/6.jpg'
              text='Brány a pohony'
              text1='Křídlové a posuvné'
              label='Adrenaline'
            />  </ul>  
        </div>
      </div>
    </div>
  );
}

export default Cards;

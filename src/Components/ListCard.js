
import React, { useState } from 'react'
import data from '../data/data.json';
import Card from './Card';

import './ListCard.scss';
function ListCard() {

    const [lieu, setLieu] = useState('');

    const cardFilt = data.filter(card => card.tag === localStorage.getItem('lieu'));
    console.log(cardFilt);
    console.log("hey mean");

    

    return (


        <ul className='listCard'>
           {data.map((data, id) => (
                <li className="listCard__el">
                    <Card SuperHost={data.SuperHost}
                        headDescription={data.headDescription}
                        startNumb={data.startNumb}
                        cardDescription={data.cardDescription}
                        image={data.image}
                        key={id}
                        tag={data.tag}
                    />
                </li>)
            )}
            {cardFilt.map((data, id) =>
            (
                <li className="listCard__el">
                    <Card SuperHost={data.SuperHost}
                        headDescription={data.headDescription}
                        startNumb={data.startNumb}
                        cardDescription={data.tag}
                        image={data.image}
                        key={id}

                    />
                </li>)
            )}
        </ul>
    )
}

export default ListCard

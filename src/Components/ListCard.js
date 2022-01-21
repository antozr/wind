
import React from 'react'
import data from '../data/data.json';
import Card from './Card';

import './ListCard.scss';
function ListCard() {


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
                        />
                </li>)
            )}
            
        </ul>
    )
}

export default ListCard

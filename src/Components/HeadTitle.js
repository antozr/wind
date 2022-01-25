import React from 'react';
import './HeadTitle.scss';

function HeadTitle() {

    function setNumberCard() {
        setTimeout(() => {
            let cardCollection = document.querySelectorAll(".card").length;

            localStorage.setItem('numbCard',cardCollection);
            var numberCard = document.querySelector('.headTitle__span');
            //console.log(cardCollection);
            numberCard.innerHTML = localStorage.getItem('numbCard') + "+";
        }, 10);
    }


    return (
        <div className='headTitle'>
            <h1 className="headTitle__title">
                Stays in Finland
            </h1>
            <p className="headTitle__txt">
                <span className="headTitle__span" onLoad={setNumberCard()}>
                    12 +
                </span>
                &nbsp;stays
            </p>
        </div>
    )
}

export default HeadTitle

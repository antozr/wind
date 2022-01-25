import React from 'react'

import './Card.scss';
import appart1 from '../assets/img/appart1.jpg';
import data from '../data/data.json';

function Card({SuperHost, headDescription, startNumb, cardDescription, image, tag} ) {

    function hostNone (){
        let host = document.querySelectorAll('.card__txtHost');
        //console.log('hey');
        //console.log(SuperHost);
        
        //console.log(host);
        host.forEach(el => {
            if(el.outerText === "Super host"){
                console.log("helllo");
                el.classList.remove('card__txtHost--none');
                
            }else if(el.outerText === "none"){
                console.log('00000');
                el.classList.add('card__txtHost--none');
            };
        });
        
    };
    
    setTimeout(function(){
        hostNone()
    },10);
    
    console.log(data);
    return (
        <div className='card' id={tag}>
            <img src={image} alt="Illustration  of a appartment for location in windNB" className="card__img" />
            <div className="card__head">
                <p className="card__txtHost"  >
                    {SuperHost}
                </p>
                <p className="card__headTxt">
                    {headDescription}
                </p>
                <div className="card__note">
                    <div className="card__iconNote">
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#EB5757"><g><path d="M0,0h24v24H0V0z" fill="none" /><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z" /></g></svg>
                    </div>
                    <p className="card__txtIcon">
                        {startNumb}
                    </p>
                </div>
            </div>
            <p className="card__txt">
                {cardDescription}
            </p>
        </div>
    )
}


export default Card

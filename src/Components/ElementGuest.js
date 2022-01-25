import React from 'react';

const ElementGuest = () => {
    var  adult;
    var i = 0;

    return (
        <ul className=" menu__list menu__list--guest ">

            <li className="menu__el2">
                <h2 className="menu__title">
                    Adults

                </h2>
                <p className="menu__title--sub menu__title">
                    Ages 13 or above
                </p>
                <div className="menu__boxEl">
                    <p className="menu__txtSp" id='btnM1' onClick={(e)=>{
                        if(i === 0 ){
                            i=0;
                        }else{
                            i--;
                        }
                        adult = document.getElementById("countAdult").innerHTML = i;
                    }}>
                        -
                    </p>
                    <p className="menu__txtSp menu__txtSp--result" id='countAdult'>
                        0
                    </p>
                    <p className="menu__txtSp" id='btnP1' onClick={(e)=>{
                        i++;
                        adult = document.getElementById("countAdult").innerHTML = i;
                    }}>
                        +
                    </p>
                </div>
            </li>
            <li className="menu__el2">
                <h2 className="menu__title">
                    Children
                </h2>
                <p className="menu__title menu__title--sub">
                    Ages 2-12
                </p>
                <div className="menu__boxEl">
                    <p className="menu__txtSp" id='btnM2' onClick={(e)=>{
                        if(i === 0 ){
                            i=0;
                        }else{
                            i--;
                        }
                        
                        adult = document.getElementById("countChild").innerHTML = i;
                        if(i === 0 ){
                            i=0;
                        }
                    }}>
                        -
                    </p>
                    <p className="menu__txtSp menu__txtSp--result" id='countChild'>
                        0
                    </p>
                    <p className="menu__txtSp" id='btnP2 ' onClick={(e)=>{
                        i++;
                        adult = document.getElementById("countChild").innerHTML = i;
                    }}>
                        +
                    </p>
                </div>
            </li>
        </ul>
    )
}

export default ElementGuest;

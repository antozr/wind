import React from 'react';

const ElementGuest = () => {
    return (
        <ul className=" menu__list menu__list--none ">

            <li className="menu__el2">
                <h2 className="menu__title">
                    Adults

                </h2>
                <p className="menu__title--sub menu__title">
                    Ages 13 or above
                </p>
                <div className="menu__boxEl">
                    <p className="menu__txtSp">
                        -
                    </p>
                    <p className="menu__txtSp menu__txtSp--result">
                        0
                    </p>
                    <p className="menu__txtSp">
                        +
                    </p>
                </div>
            </li>
            <li className="menu__el2">
                <h2 className="menu__title">
                    Children
                </h2>
                <p className="menu__title">
                    Ages 2-12
                </p>
                <div className="menu__boxEl">
                    <p className="menu__txtSp">
                        -
                    </p>
                    <p className="menu__txtSp menu__txtSp--result">
                        0
                    </p>
                    <p className="menu__txtSp">
                        +
                    </p>
                </div>
            </li>
        </ul>
    )
}

export default ElementGuest;

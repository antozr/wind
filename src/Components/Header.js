import React, { useState } from 'react'
import './Header.scss';
import logo from '../assets/img/logo.png';
import ElementGuest from './ElementGuest';

function Header() {

    const [location, setLocation] = useState(true);
    function closeMenu() {

        let btn = document.querySelector('.menu__btn');
        let menu = document.querySelector('.head__menu');

        menu.classList.add('head__menu--none');
    };

    function openMenu() {

        let menu = document.querySelector('.head__menu');
        menu.classList.remove('head__menu--none');
        console.log(location);
    };

    function onLabel1() {
        let box = document.querySelectorAll('.menu__boxSearch');
        setLocation(true);
        console.log(location);
        setTimeout(function(){
            verifLocation();
            console.log(10);
            console.log(location);
        },100);
        verifLocation();
        if (box[0].classList.contains('menu__boxSearch--actif')) {
            box[0].classList.remove('menu__boxSearch--actif');
            box[1].classList.remove('menu__boxSearch--actif');
        } else {
            box[1].classList.remove('menu__boxSearch--actif');
            box[0].classList.add('menu__boxSearch--actif');
        }
        

    }


    function onLabel2() { ///// problem to change the state of the location Obligatory 2 click for change ! Set the problem 
        setLocation(!location);
        setLocation(false);
        console.log(location);
        setTimeout(function(){
            setLocation(false);
            verifLocation();
            console.log(10);
            console.log(location);
        },100);
        
        let box = document.querySelectorAll('.menu__boxSearch');
        if (box[1].classList.contains('menu__boxSearch--actif')) {
            box[0].classList.remove('menu__boxSearch--actif');
            box[1].classList.remove('menu__boxSearch--actif');
        } else {
            box[0].classList.remove('menu__boxSearch--actif');
            box[1].classList.add('menu__boxSearch--actif');
        }
        
    }

    function verifLocation(){
        if (location === false) {
            console.log('this is false');
            let box = document.querySelectorAll('.menu__list');
            if (box[1].classList.contains('menu__list--none')) {
                box[0].classList.add('menu__list--none');
                box[1].classList.remove('menu__list--none');
            }
    
        } else {
            console.log('this is ok');
            let box = document.querySelectorAll('.menu__list');
                box[0].classList.remove('menu__list--none');
                box[1].classList.add('menu__list--none');
    
        }
    }


    return (
        <div className='head'>
            <img src={logo} alt="The logo of windbnb compagnie, for location of personnal appartement and house." className="head__logo" />
            <div className="head__box" onClick={openMenu}>
                <p className="head__txt">
                    Helsinki,&nbsp;Finland
                </p>
                <p className="head__txt head__txt--light">
                    Add&nbsp;guests
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EB5757"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
            </div>
            <div className="head__menu head__menu--none">
                <div className="menu__head">
                    <p className="menu__txt">
                        Edit your search
                    </p>
                    <div className="menu__btn" onClick={closeMenu}>
                        <div className="menu__btnClose"></div>
                        <div className="menu__btnClose"></div>
                    </div>
                </div>

                <div className="menu__boxInfo">
                    <div className="menu__boxSearch " onClick={onLabel1}>
                        <label htmlFor='lieux' className="menu__txtInfo" >
                            Location
                        </label>
                        <input type="text" name='lieux' id='lieux' placeholder='Helsinki, Finland' className="menu__txtInfo menu__txtInfo--search" />
                    </div>
                    <div className="menu__boxSearch" onClick={onLabel2}>
                        <label htmlFor="guest" className="menu__txtInfo" >
                            Guests
                        </label>
                        <input type="text" name='guest' id='guest' placeholder='Add guests' className="menu__txtInfo menu__txtInfo--light " />
                    </div>
                </div>
                <ul className="menu__list">
                    <li className="menu__el">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4F4F4F"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <p className="menu__txt menu__txt--lieu">
                            Helsinki, Finland
                        </p>
                    </li>
                    <li className="menu__el">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4F4F4F"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <p className="menu__txt menu__txt--lieu">
                            Turku, Finland
                        </p>
                    </li>
                    <li className="menu__el">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4F4F4F"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <p className="menu__txt menu__txt--lieu">
                            Oulu, Finland
                        </p>
                    </li>
                    <li className="menu__el">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#4F4F4F"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                        <p className="menu__txt menu__txt--lieu">
                            Vaasa, Finland
                        </p>
                    </li>
                </ul>
                <ElementGuest />
                <button type="submit" className='menu__btnSearch' onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Header

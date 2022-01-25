import React, { useState } from 'react'
import './Header.scss';
import logo from '../assets/img/logo.png';
import ElementGuest from './ElementGuest';
import ListLocation from './ListLocation';

function Header() {

    const [location, setLocation] = useState(true);
    const [valeurLieux, setLieu] = useState('');

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
        
        if(box[0].classList.contains('menu__boxSearch--actif')){
            box[1].classList.remove('menu__boxSearch--actif');
            box[0].classList.add('menu__boxSearch--actif');
        }else{
            box[0].classList.add('menu__boxSearch--actif');
            box[1].classList.remove('menu__boxSearch--actif');
        }
    };


    function onLabel2() { 
        let box = document.querySelectorAll('.menu__boxSearch');
        setLocation(false);
        console.log(location); 
        console.log(valeurLieux);
        localStorage.setItem('lieu',valeurLieux);
        if(box[1].classList.contains('menu__boxSearch--actif')){
            box[1].classList.remove('menu__boxSearch--actif');
            box[0].classList.add('menu__boxSearch--actif');
        }else{
            box[1].classList.add('menu__boxSearch--actif');
            box[0].classList.remove('menu__boxSearch--actif');
        } 
    };

    function btnAction (){
        closeMenu();
        localStorage.setItem('lieu', valeurLieux);
        let card = document.querySelectorAll(".card");
        let headTitleLoc = document.querySelector('.headTitle__title--span');
        let b =0;
        card.forEach(el => {
            el.classList.remove("card--none");
            el.parentElement.classList.remove('listCard__el--none');
        });
        card.forEach(el => {
            console.log(el.id);
            if(el.id === valeurLieux){
                b++;
            }else{
                el.classList.add("card--none");
                el.parentElement.classList.add('listCard__el--none');
            }
        });
        /// add the number of card 
        localStorage.setItem('numbCard',b);
        var numberCard = document.querySelector('.headTitle__span');
        numberCard.innerHTML = localStorage.getItem('numbCard') + "+";
        headTitleLoc.innerHTML=valeurLieux;
        
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
                        <input type="text" name='lieux' id='lieux' placeholder='Helsinki, Finland' className="menu__txtInfo menu__txtInfo--search" value={valeurLieux} onChange={(e) => setLieu(e.target.value)} />
                    </div>
                    <div className="menu__boxSearch" onClick={onLabel2}>
                        <label htmlFor="guest" className="menu__txtInfo" >
                            Guests
                        </label>
                        <input type="text" name='guest' id='guest' placeholder='Add guests' className="menu__txtInfo menu__txtInfo--light " />
                    </div>
                </div>
                {location ? <ListLocation/> : <ElementGuest />}
                
                <button type="submit" className='menu__btnSearch' onClick={btnAction}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Header

import React from "react";
import '../style.sass';

export default function SideMenu(props) {
    return (
        <div className="sideMenu">
            <ul className="sideMenu__list">
                <li className="sideMenu__list__item"><div onClick={props.harangue} className='sideMenu__list__item__link'>Напутственное слово</div></li>
                <li className="sideMenu__list__item"><div onClick={props.grid} className='sideMenu__list__item__link'>Сетка</div> </li>
                <li className="sideMenu__list__item"><div onClick={props.typo} className='sideMenu__list__item__link'>Типографика</div></li>
                <li className="sideMenu__list__item"><div onClick={props.ui} className='sideMenu__list__item__link'>UI</div></li>
            </ul>
        </div>
    )
}
import React from "react";
import '../style.sass';
import TypographyDeskTop from './TypographyDeskTop';
import TypographyPhone from './TypographyPhone';

export default function TypographyDescr (props) {
    return (
        <>
            <div className='typography__descr'>
                <div className='typography__descr__item'>

                    {props.tab === 'deskTop' ? <TypographyDeskTop/> : <TypographyPhone/>}

                </div>
                <div className='typography__descr__item'>
                    <h1 className="typography__descr__item__h1" style={{'fontSize':`${props.h1}px`}}>Текст заголовка</h1>
                    <h2 className="typography__descr__item__h2" style={{'fontSize':`${props.h2}px`}}>Текст заголовка</h2>
                    <h3 className="typography__descr__item__h3" style={{'fontSize':`${props.h3}px`}}>Текст заголовка</h3>
                    <h4 className="typography__descr__item__h4" style={{'fontSize':`${props.h4}px`}}>Текст заголовка</h4>
                    <p className="typography__descr__item__p1" style={{'fontSize':`${props.p1}px`}}>Текст лида</p>
                    <p className="typography__descr__item__p2" style={{'fontSize':`${props.p2}px`}}>Крупный текст</p>
                    <p className="typography__descr__item__p3" style={{'fontSize':`${props.p3}px`}}>Основной текст</p>
                    <p className="typography__descr__item__p4" style={{'fontSize':`${props.p4}px`}}>Вспомогательный текст</p>
                </div>     
            </div>     
        </>
    )
}
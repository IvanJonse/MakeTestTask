import React from "react";
import '../style.sass';

export default function TypographyPhone () {

    return (
        <>  
            <div className="typography__descr__item__title">
                Заголовок H1, 32/40, bold
            </div>
            <div className="typography__descr__item__title">
                Заголовок H2, 28/36, bold
            </div>
            <div className="typography__descr__item__title">
                Заголовок H3, 20/28, medium
            </div>
            <div className="typography__descr__item__title">
                Заголовок H4, 18/28, medium
            </div>
            <div className="typography__descr__item__title">
                Лид P_Lead, 20/28, regular
            </div>
            <div className="typography__descr__item__title">
                Крупный текст P_18, 18/28, regular
            </div>
            <div className="typography__descr__item__title">
                Основной текст P_16, 16/24, regular
            </div>
            <div className="typography__descr__item__title">
                Впомогательный текст P_14, 14/20, regular
            </div> 

        </>
    )
}
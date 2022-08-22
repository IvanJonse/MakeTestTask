import React from "react";
import '../style.sass';

export default function TypographyDeskTop () {

    return (

        <>
            <div className="typography__descr__item__title">
               Заголовок H1, 48/56, bold
            </div>
            <div className="typography__descr__item__title">
               Заголовок H2, 32/40, bold
            </div>
            <div className="typography__descr__item__title">
               Заголовок H3, 24/32, medium
            </div>
            <div className="typography__descr__item__title">
               Заголовок H4, 18/28, medium
            </div>
            <div className="typography__descr__item__title">
               Лид P_Lead, 24/32, regular
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
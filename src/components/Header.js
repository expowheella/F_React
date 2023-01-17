import React, { useState } from "react";
import "../styles/Header.css";

/* 
* В начале импортируем объект Components из React

* Создаем новый класс для нашего компонента, который расширяет 
* объект Component из библиотеки React

* Далее будем рендерить JSX код в HTML используя функцию render()

**/


/* 
* через ключевое слово props, функция получает передаваемые
* ей из App.js параметры
**/
function Header(props) {
    console.log(props);

    
    /* 
    * добавим переменную для счетчика --> count 
    * 
    * и произвольное название для функции --> setNewCount,
    * которая будет отвечать за изменение переменной count в любом
    * месте, где мы вызовем setNewCount.
    * 
    * в функции useState() указывается значение по умолчанию для 
    * переменной count 
    **/
    let [count, setNewCount] = useState(0);

    const handleClick = () => {
        setNewCount(count + 1)
    };

    return (
        <header>
            This is header
            {/* 
            * При нажатии на кнопку вызывается функция handleClick
            * которая меняет состояние переменной count 
            * через функцию useState()
             */}
            <button className="click-here" onClick={handleClick}>
                {/* 
                * из App.js в props передается аргумент buttonName,
                * который вызывается через переменную props.buttonName:
                */}
                {props.buttonName}, is clicked: {count} times
            </button>

        </header>
    )
}

export default Header
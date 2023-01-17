import React, {Component} from "react";
import "../styles/Header.css";

/* 
* В начале импортируем объект Components из React

* Создаем новый класс для нашего компонента, который расширяет 
* объект Component из библиотеки React

* Далее будем рендерить JSX код в HTML используя функцию render()

**/
class Header extends Component {

    render(){
        return(
            <header>This is header</header>
        )
    }
}

export default Header
import React from "react";

/* 
* index.js подключает App.js к index.html с помощью ReactDOM
* поэтому нам необходимо их импортировать
**/

import ReactDOM from "react-dom/client"; 
import App from "./components/App.js"

/*
* Все компоненты собираются в App.js
* App.js - это верхний уровень, внутрь которого подгружаются
* остальные компонентыю
* Далее, всё рендерится с помощью ReactDOM и подвязывается
* к index.html через <div id="root">
**/

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

import React, { Fragment } from "react"; // from React import Component

// import styles
import "../styles/App.css";

// import Header object
import Header from "./Header.js";

// import Main object
import Main from "./Main.js"

// import styles from bootstrap
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

    const buttonName = "Click Here!"

    return (
        <Fragment>
            {/* using Header object */}
            <Header buttonName={buttonName} />
            <Main />
        </Fragment>
    )
}


export default App;
import * as React from "react"; // from React import Component

// import styles
import "../styles/App.css";

// import Header object
import Header from "./Header";

// import Main object
import Main from "./Main"

// import styles from bootstrap
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

    const buttonName = "Click Here!"

    return (
        <>
            {/* using Header object */}
            <Header buttonName={buttonName} />
            <Main />
        </>
    )
}


export default App;
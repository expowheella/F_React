import React, { Component } from "react"; // from React import Component

// import styles
import "../styles/App.css";

// import Header object
import Header from "./Header.js";

// import Main object
import Main from "./Main.js"

class App extends Component {
    // React renders jsx --> html
    render() {
        return (
            <>
                {/* using Header object */}
                <Header buttonName={"Click Here!"}/>
                <Main />
            </>
        )
    }
}

export default App;
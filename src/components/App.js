import React, { Component } from "react"; // from React import Component

// import styles
import "../styles/App.css";

// import Header object
import Header from "./Header.js";

class App extends Component {
    // React renders jsx --> html
    render() {
        return (
            <>
                {/* using Header object */}
                <Header />
                <main>
                    <div>
                        <h1>Hello React</h1>
                    </div>
                </main>
            </>
        )
    }
}

export default App;
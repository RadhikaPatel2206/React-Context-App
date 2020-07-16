import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
    state = { language: "english" };

    render = () => {
        return (
            <div className="container mt-4">
                Select Language:
                <span
                    onClick={() => this.setState({ language: "english" })}
                    className="ml-2 btn btn-link"
                >
                    English
                </span>
                <span
                    onClick={() => this.setState({ language: "korean" })}
                    className="ml-2 btn btn-link"
                >
                    Korean
                </span>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    };
}

export default App;

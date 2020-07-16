import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    renderButton = (value) => {
        return value === "english" ? "Submit" : "제출하다 (jechulhada)";
    };

    render = () => {
        return (
            <button className="btn btn-primary mt-4">
                <LanguageContext.Consumer>
                    {(value) => this.renderButton(value)}
                </LanguageContext.Consumer>
            </button>
        );
    };
}

export default Button;

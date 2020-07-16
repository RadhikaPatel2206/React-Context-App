import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    renderLabel = (value) => {
        return value === "english" ? "Name" : "이름 (ileum)";
    };

    render = () => {
        return (
            <div className="form-group">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => this.renderLabel(value)}
                    </LanguageContext.Consumer>
                </label>
                <input type="text" className="form-control mt-2" />
            </div>
        );
    };
}

export default Field;

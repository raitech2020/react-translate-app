import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class ButtonContext extends React.Component {
    static contextType = LanguageContext

    renderSubmit() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        let text
        switch (this.context) {
            case 'english':
                text = 'Submit'
                break
            case 'dutch':
                text = 'Voorleggen'
                break
            case 'urdu':
                text = 'جمع کرائیں'
                break
            default:
                text = 'Submit'
        }
        return text
    }

    render() {
        return (
            <button
                type="submit"
                className="ui button primary"
            >
                {this.renderSubmit()}
            </button>
        )
    }
}

export default ButtonContext

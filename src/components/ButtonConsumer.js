import React from "react"
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

class ButtonConsumer extends React.Component {
    renderSubmit(value) {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        let text
        switch (value) {
            case "english":
                text = "Submit"
                break
            case "dutch":
                text = "Voorleggen"
                break
            case "urdu":
                text = "جمع کرائیں"
                break
            default:
                text = "Submit"
        }
        return text
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => {
                    return (
                        <button type="submit" className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {(value) => {
                                    return (this.renderSubmit(value))
                                }}
                            </LanguageContext.Consumer>
                        </button>
                    )
                }}
            </ColorContext.Consumer>
        )
    }
}

export default ButtonConsumer

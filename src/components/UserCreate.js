import React from "react";
import Field from "./Field"
// import ButtonContext from "./ButtonContext"
import ButtonConsumer from "./ButtonConsumer";

const UserCreate = () => {
    return (
        <div className="ui form">
            <Field/>
            {/*<ButtonContext/>*/}
            <ButtonConsumer/>
        </div>
    )
}

export default UserCreate

import React from "react";
import "./styles/Form.scss"

const Form = (props) => {
    const handleForm = () => {
        console.log('handleForm');
    }
    if (props.isShow) {
        return (
            <div className="Form">
                <input type="text" name="namew" />
                <textarea name="extra" id="extra"></textarea>

                <div className="row">
                    <button className="btn" 
                            onClick={handleForm} >SAVE</button>

                </div>

            </div>
        )
    }

    return ""
}

export default Form;
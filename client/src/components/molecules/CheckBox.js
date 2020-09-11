import React from 'react';

// My Component
import Checkmark from "../atoms/Checkmark";
import Text from "../atoms/Text";

function CheckBox(props) {
    return (
        <div className="molecule-checkbox">
            <Checkmark
                isChecked={props.isChecked}
            />

            <Text
                text={props.text}
            />
        </div>
    );
}

export default CheckBox;

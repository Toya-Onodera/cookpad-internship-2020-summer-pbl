import React from 'react';

// My Components
import Text from "../atoms/Text";

function Modal(props) {
    return (
        <div className="molecule-modal-back-layer">
            <div className="molecule-modal">
                <div className="molecule-modal-title">
                    <Text text={props.title}/>
                </div>

                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;

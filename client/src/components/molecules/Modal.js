import React from 'react';

// My Components
import Text from "../atoms/Text";

function Modal(props) {
    const onModalMainLayerClickHandler = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="molecule-modal-back-layer" onClick={props.closeMethod} >
            <div className="molecule-modal" onClick={onModalMainLayerClickHandler} >
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

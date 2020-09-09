import React from 'react';

// My Components
import Text from "../atoms/Text";

function Modal(props) {
    // TODO: 後で閉じる動作を入れる
    const close = () => {
    };

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

import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function ChooseButton(props) {
    return (
        <div className="molecule-choose-button" style={{backgroundColor: props.backgroundColor}} onClick={props.onClick}>
            <Text
                text={props.text}
                fontFamily="Pacifico"
                color="#FAFAFA"
                size={32}
            />

            <Image
                src={props.src}
                size={48}
            />
        </div>
    );
}

export default ChooseButton;

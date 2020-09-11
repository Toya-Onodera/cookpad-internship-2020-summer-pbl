import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function LockedImage(props) {
    return (
        <div className="molecules-locked-image" onClick={props.onClick}>
            <div className="molecules-locked-image-title">
                <Text
                    text={props.name}
                    fontFamily="Pacifico"
                    color="#FAFAFA"
                    size={24}
                />
            </div>

            <div>
                <Image
                    src={props.image}
                    size={120}
                    alt={props.name}
                />
            </div>
        </div>
    );
}

export default LockedImage;

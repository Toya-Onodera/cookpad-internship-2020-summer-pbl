import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function LockedImage(props) {
    const onClickHandler = () => {
        // TODO: あとで遷移を実装する
        alert('画面遷移します');
    };

    return (
        <div className="molecules-locked-image" onClick={onClickHandler}>
            <div className="molecules-locked-image-title">
                <Text
                    text={props.name}
                    fontFamily="Pacifico"
                    color="#FAFAFA"
                    size={24}
                    // style={{transform: translateY}}
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

import React from 'react';
import Text from "../atoms/Text";
import Image from "../atoms/Image";

// My Components
function FoodstuffHeading(props) {
    return (
        <div className="organisms-foodstuff-heading">
            <Image
                src={props.src}
                size={100}
                alt={props.name}
                radius={true}
            />

            <Text
                text={props.name}
                fontFamily="Pacifico"
                color="#FAFAFA"
                size={72}
            />
        </div>
    );
}

export default FoodstuffHeading;

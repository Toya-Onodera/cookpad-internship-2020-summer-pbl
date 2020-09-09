import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function ListChildren(props) {


    return (
        <div className={props.className}>
            <div>
                <Image src={props.src}/>
            </div>

            <div>
                <Text text={props.text} />
            </div>
        </div>
    );
}

export default ListChildren;

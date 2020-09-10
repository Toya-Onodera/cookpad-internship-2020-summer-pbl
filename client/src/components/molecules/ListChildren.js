import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function ListChildren(props) {
    return (
        <li className="molecules-list-children collection-item" onClick={props.onClick}>
            <div>
                <Image size={props.size} src={props.src}/>
            </div>

            <div>
                <Text text={props.text} />
            </div>
        </li>
    );
}

export default ListChildren;

import React from 'react';

// My Components
import ListChildren from "../molecules/ListChildren";

function MenuList(props) {
    const child = props.data.map((e, i) => {
        return (
            <ListChildren
                index={i}
                src="http://placehold.jp/100x100.png"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
            />);
    });

    return (
        <ul>
            {child}
        </ul>
    );
}

export default MenuList;

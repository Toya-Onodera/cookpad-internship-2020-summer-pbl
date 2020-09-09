import React from 'react';

// My Components
import ListChildren from "../molecules/ListChildren";

function MenuList(props) {
    const Children = props.data.map((e, i) => {
        return (
            <ListChildren
                key={`ListChildren-${i}`}
                size={100}
                src="http://placehold.jp/100x100.png"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"
            />);
    });

    return (
        <ul className="collection">
            {Children}
        </ul>
    );
}

export default MenuList;

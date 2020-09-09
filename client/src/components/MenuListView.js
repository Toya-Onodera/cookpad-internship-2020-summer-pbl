import React, {useState} from 'react';

// My Components
import MenuList from "./organisms/MenuList";
import LockedRecipeModal from "./organisms/LockedRecipeModal";
import ChooseUnlockModal from "./organisms/ChooseUnlockModal";

function MenuListView(props) {
    return (
        <div>
            {/*TODO: クリックしたら動的にモーダルが切り替わるようにする*/}
            {/*<ChooseUnlockModal />*/}
            {/*<LockedRecipeModal data={props.recipe} />*/}
            <MenuList data={props.menu} />
        </div>
    );
}

export default MenuListView;

import React, {useState} from 'react';

// My Components
import MenuList from "./organisms/MenuList";
import LockedRecipeModal from "./organisms/LockedRecipeModal";
import ChooseUnlockModal from "./organisms/ChooseUnlockModal";

function MenuListView() {
    const dummyListData = [...Array(20).keys()];

    const dummyLockedRecipeModalState = [
        {image: 'http://placehold.jp/120x120.png', name: 'TEST01', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST02', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST03', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST04', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST05', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST06', isClear: false},
    ];

    const [lockedRecipeModalState, setLockedRecipeModalState] = useState(dummyLockedRecipeModalState);

    return (
        <div>
            <ChooseUnlockModal />
            {/*<LockedRecipeModal data={lockedRecipeModalState} />*/}
            <MenuList data={dummyListData} />
        </div>
    );
}

export default MenuListView;

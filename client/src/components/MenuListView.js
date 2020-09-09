import React from 'react';

// My Components
import MenuList from "./organisms/MenuList";

// TODO: ここで画面の管理をする？
// とりあえず一画面ずつ作る
function MenuListView() {
    const dummyListData = [...Array(20).keys()];

    return (
        <MenuList data={dummyListData} />
    );
}

export default MenuListView;

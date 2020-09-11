import React, {useState} from 'react';

// My Components
import MenuList from "./organisms/MenuList";
import LockedRecipeModal from "./organisms/LockedRecipeModal";
import ChooseUnlockModal from "./organisms/ChooseUnlockModal";

function MenuListView(props) {
    // TODO: モーダルをいい感じに表示する方法が思い浮かばなかったのでゴリ押し
    const modeNum = (sessionStorage.getItem('isModal') === 'true') ? 1 : 0;
    const [modalModeState, setModalModeState] = useState(modeNum);

    const modalCloseMethod = () => {
        setModalModeState(0)
        sessionStorage.setItem('isModal', 'false');
    };

    const Modals = [
        null,
        <LockedRecipeModal data={props.recipe} onClick={() => setModalModeState(2)} closeMethod={modalCloseMethod} />,
        <ChooseUnlockModal closeMethod={modalCloseMethod} />
    ]


    return (
        <div>
            {/* モーダルが動的に切り替わる */}
            { Modals[modalModeState] }

            <MenuList data={props.menu} onClick={() => setModalModeState(1)} />
        </div>
    );
}

export default MenuListView;

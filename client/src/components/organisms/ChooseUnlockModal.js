import React from 'react';

// My Components
import Modal from "../molecules/Modal";
import ChooseButton from "../molecules/ChooseButton";

// Image Import
import CameraSrc from "../../assets/images/icon_camera.png";
import QuestionSrc from "../../assets/images/icon_question.png";

function ChooseUnlockModal() {
    // TODO: あとで正式な遷移を行う
    const onClickForCamera = () => {
        alert("カメラ画面へ遷移");
    }

    // TODO: あとで正式な遷移を行う
    const onClickForQuestion = () => {
        alert("問題画面へ遷移");
    };

    const choiceList = [
        { text: 'Camera', src: CameraSrc, backgroundColor: '#3F51B5', onClick: onClickForCamera },
        { text: 'Question', src:  QuestionSrc, backgroundColor: '#009688', onClick: onClickForQuestion }
    ];

    const Buttons = choiceList.map((e) => {
        return (
            <ChooseButton
                text={e.text}
                src={e.src}
                backgroundColor={e.backgroundColor}
                onClick={e.onClick}
            />);
    });

    return (
        <Modal title="どちらの方法で制限を解除しますか？">
            {Buttons}
        </Modal>
    );
}

export default ChooseUnlockModal;

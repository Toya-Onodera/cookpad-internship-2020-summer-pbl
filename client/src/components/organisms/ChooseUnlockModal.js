import React from 'react';
import {
    Link
} from "react-router-dom";

// My Components
import Modal from "../molecules/Modal";
import ChooseButton from "../molecules/ChooseButton";

// Image Import
import CameraSrc from "../../assets/images/icon_camera.png";
import QuestionSrc from "../../assets/images/icon_question.png";

function ChooseUnlockModal() {
    const choiceList = [
        { text: 'Camera', src: CameraSrc, backgroundColor: '#3F51B5' },
        { text: 'Question', src:  QuestionSrc, backgroundColor: '#009688' }
    ];

    const Buttons = choiceList.map((e) => {
        return (
            <Link to={`/${e.text.toLowerCase()}`}>
                <ChooseButton
                    text={e.text}
                    src={e.src}
                    backgroundColor={e.backgroundColor}
                    onClick={e.onClick}
                />
            </Link>);
    });

    return (
        <Modal title="どちらの方法で制限を解除しますか？">
            {Buttons}
        </Modal>
    );
}

export default ChooseUnlockModal;

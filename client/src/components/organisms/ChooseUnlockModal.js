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

function ChooseUnlockModal(props) {
    const choiceList = [
        { text: 'Camera', src: CameraSrc, backgroundColor: '#3F51B5' },
        { text: 'Question', src:  QuestionSrc, backgroundColor: '#009688' }
    ];

    const Buttons = choiceList.map((e, i) => {
        return (
            <Link
                to={`/${e.text.toLowerCase()}`}
                key={`ChooseButton-${i}`}
            >
                <ChooseButton
                    text={e.text}
                    src={e.src}
                    backgroundColor={e.backgroundColor}
                />
            </Link>);
    });

    return (
        <Modal title="どちらの方法で制限を解除しますか？" closeMethod={props.closeMethod} >
            {Buttons}
        </Modal>
    );
}

export default ChooseUnlockModal;

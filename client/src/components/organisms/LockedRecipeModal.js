import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Modal from "../molecules/Modal";

function LockedRecipeModal(props) {
    if (!props.data) {
        return null;
    }

    const imageClickHandler = (e) => {
        alert(`TODO: あとで遷移するようにする`);
    };

    const Images = props.data.map((e, i) => {
        return <Image key={`LockedRecipeModalImage-${i}`} src={e.image} size={120} alt={e.name} />
    });

    const Texts = props.data.map((e, i) => {
        return <Text key={`LockedRecipeModalText-${i}`} text={e.name} />
    });

    return (
        <Modal title="以下の食材が必要です">
            <div className="organisms-locked-recipe-modal-images" onClick={imageClickHandler}>
                {Images}
            </div>

            <div className="organisms-locked-recipe-modal-texts">
                {Texts}
            </div>
        </Modal>
    );
}

export default LockedRecipeModal;

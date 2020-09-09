import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Modal from "../molecules/Modal";
import LockedImage from "../molecules/LockedImage";

function LockedRecipeModal(props) {
    if (!props.data) {
        return null;
    }

    const Images = props.data.map((e, i) => {
        return (e.isClear)
            ? <Image key={`LockedRecipeModalImage-${i}`} src={e.image} size={120} alt={e.name}/>
            : <LockedImage key={`LockedRecipeModalImage-${i}`} image={e.image} size={120} name={e.name}/>
    });

    const Texts = props.data.map((e, i) => {
        return <Text key={`LockedRecipeModalText-${i}`} text={e.name} />
    });

    return (
        <Modal title="以下の食材が必要です">
            <div className="organisms-locked-recipe-modal-images">
                {Images}
            </div>

            <div className="organisms-locked-recipe-modal-texts">
                {Texts}
            </div>
        </Modal>
    );
}

export default LockedRecipeModal;

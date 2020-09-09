import React from 'react';

function Image(props) {
    return (
        <img className="atoms-image" src={props.src} alt="画像" />
    );
}

export default Image;

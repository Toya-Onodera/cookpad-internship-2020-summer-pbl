import React from 'react';

function Image(props) {
    return (
        <img className="atoms-image" src={props.src} alt={props.alt} style={{width: `${props.size}px`, height: `${props.size}px`}} />
    );
}

export default Image;

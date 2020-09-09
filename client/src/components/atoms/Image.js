import React from 'react';

function Image(props) {
    const onClick = (!props.onClick) ? null : props.onClick;
    return (
        <img className="atoms-image" src={props.src} alt={props.alt} style={{width: `${props.size}px`, height: `${props.size}px`}} onClick={onClick} />
    );
}

export default Image;

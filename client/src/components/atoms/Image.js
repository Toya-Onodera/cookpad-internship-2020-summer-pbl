import React from 'react';

function Image(props) {
    const onClick = (!props.onClick) ? null : props.onClick;
    const radius = (!props.radius) ? '' : (props.size / 2);

    return (
        <img className="atoms-image" src={props.src} alt={props.alt} style={{width: `${props.size}px`, height: `${props.size}px`, borderRadius: radius}} onClick={onClick} />
    );
}

export default Image;

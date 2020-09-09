import React from 'react';

function Text(props) {
    const fontSize = (!props.size) ? 'inherit' : `${props.size}px`;
    const fontFamily = (!props.fontFamily) ? 'inherit' : props.fontFamily;
    const color = (!props.color) ? 'inherit' : props.color;
    return (
        <span className="atoms-text" style={{fontSize: fontSize, fontFamily: fontFamily, color: color}}>{props.text}</span>
    );
}

export default Text;

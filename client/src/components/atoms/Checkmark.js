import React from 'react';

function Checkmark(props) {
    const className = (props.isChecked) ? 'atoms-checkmark atoms-checkmark-checked' : 'atoms-checkmark';
    return (
        <div className={className} />
    );
}

export default Checkmark;

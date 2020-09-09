import React from 'react';

function Image(props) {
    // const src = 'http://placehold.jp/100x100.png';

    return (
        <img className="atoms-image" src={props.src} alt="画像" />
    );
}

export default Image;

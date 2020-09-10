import React from 'react'
import {
    Link
} from "react-router-dom";

function CameraView() {
    // TODO: モーダルをいい感じに表示する方法が思い浮かばなかったのでゴリ押し
    const onSnapButtonClickHandler = () => {
        sessionStorage.setItem('isModal', 'true');
    };

    return (
        // TODO: カメラ機能は実装足りない（機械学習とかで画像判定する必要がある）ので今回は実装しない（ダミーのみ）
        // 今後の展望みたいな話ができればこの部分を話せるかも？
        <div className="pages-camera">
            <Link to="/" onClick={onSnapButtonClickHandler}>
                <div className="pages-snap-button" />
            </Link>
        </div>
    );
}

export default CameraView;

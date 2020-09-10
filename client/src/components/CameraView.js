import React from 'react'
import {
    Link
} from "react-router-dom";

function CameraView() {
    return (
        // TODO: カメラ機能は実装足りない（機械学習とかで画像判定する必要がある）ので今回は実装しない（ダミーのみ）
        // 今後の展望みたいな話ができればこの部分を話せるかも？
        <div className="pages-camera">
            <Link to="/">
                <div className="pages-snap-button" />
            </Link>
        </div>
    );
}

export default CameraView;

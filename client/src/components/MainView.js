import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// My Components
import MenuListView from "./MenuListView";
import QuestionView from "./QuestionView";
import CameraView from "./CameraView";

// TODO: ここで画面の管理をする？
// とりあえず一画面ずつ作る
function MainView() {
    // TODO: バックエンドとの連携は間に合わなかった
    // useEffect(() => {
    //     const url = `http://192.168.33.10:3000/recipe`
    //     fetch(url, { mode: "cors", redirect: "follow" })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setLockedRecipeModalState(data);
    //             console.log(data);
    //         })
    // }, [])

    const dummyMenuData = [...Array(20).keys()];

    const dummyLockedRecipeModalState = [
        {image: 'http://placehold.jp/120x120.png', name: 'TEST01', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST02', isClear: true},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST03', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST04', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST05', isClear: false},
        {image: 'http://placehold.jp/120x120.png', name: 'TEST06', isClear: false},
    ];

    const dummyQuestionNum = 0;

    const [lockedRecipeModalState, setLockedRecipeModalState] = useState(dummyLockedRecipeModalState);
    const [recipeIndexState, setRecipeIndexState] = useState(dummyQuestionNum);

    return (
        <Router>
            <Switch>
                <Route path="/camera">
                    <CameraView />
                </Route>
                <Route path="/question">
                    <QuestionView questionNum={recipeIndexState} />
                </Route>
                <Route path="/">
                    <MenuListView
                        menu={dummyMenuData}
                        recipe={lockedRecipeModalState}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default MainView;

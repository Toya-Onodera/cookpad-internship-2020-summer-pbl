import React, {useState} from 'react';
import {
    Link
} from "react-router-dom";

// My Components
import Text from "./atoms/Text";
import CheckBox from "./molecules/CheckBox";
import QuestionFinishButton from "./molecules/QuestionFinishButton";
import FoodstuffHeading from "./organisms/FoodstuffHeading";

function QuestionView(props) {
    // TODO: ここは実際に取得する
    const question = {
        image: 'http://placehold.jp/120x120.png',
        name: 'TEST01',
        problem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
        choose: [
            { isAnswer: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed' },
            { isAnswer: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed' },
            { isAnswer: true, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed' },
            { isAnswer: false, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed' }
        ]
    };

    const [checkboxState, setCheckBoxState] = useState(new Array(question.choose.length + 1).fill(true));

    const QuestionAnswerView = question.choose.map((e, i) => {
        return (
            <CheckBox
                key={`QuestionViewCheckBox-${i}`}
                isChecked={checkboxState[i]}
                text={question.choose[i].text}
            />
        )
    })

    return (
        <div>
            <FoodstuffHeading
                src={question.image}
                name={question.name}
            />

            <div className="pages-question-text pages-question-border-bottom">
                <Text
                    text={question.problem}
                />
            </div>

            <div className="pages-question-checkbox pages-question-border-bottom">
                {QuestionAnswerView}
            </div>

            <div className="pages-question-finish-button">
                <Link to="/">
                    <QuestionFinishButton />
                </Link>
            </div>
        </div>
    );
}

export default QuestionView;

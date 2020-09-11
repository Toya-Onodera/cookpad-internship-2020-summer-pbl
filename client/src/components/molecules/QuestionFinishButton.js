import React from 'react';

// My Component
import Text from "../atoms/Text";

function QuestionFinishButton(props) {
    // const onClick = (!props.onClick) ? null : props.onClick;
    return (
        <div className="molecules-question-finish-button waves-effect waves-light btn">
            <Text text="answer" />
        </div>
    );
}

export default QuestionFinishButton;

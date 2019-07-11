import React from 'react';

const Text = props => {
    const { color, type, text, transform, textAnchor } = props;
    let returnedText = '';
    console.log("TCL: color", color);

    switch (type) {
        case 'title':
            returnedText = (
                <text
                    transform={`translate(0 -15)`}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="20"
                    className="main-title"
                >
                    {text}
                </text>
            );
            break;
        case 's-title':
            returnedText = (
                <text
                    transform={`translate(0 9)`}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize="25"
                    className="secondary-title"
                >
                    {text}
                </text>
            );
            break;
        case 'left-text-title':
            returnedText = (
                <text
                    transform={`translate(0 170)`}
                    fontSize="16"
                    className={type}
                    fill={color}
                >
                    {text}
                </text>
            );
            break;
        case 'right-text-title':
            returnedText = (
                <text
                    transform={`translate(300 170)`}
                    fontSize="16"
                    textAnchor="end"
                    className={type}
                    fill={color}
                >
                    {text}
                </text>
            );
            break;
        case 'text-down':
            returnedText = (
                <text
                    transform={transform}
                    fontSize="14"
                    textAnchor={textAnchor}
                    className={type}
                    fill={color}
                >
                    {text}
                </text>
            );
            break;
        default:
            break;
    }

    return returnedText;
};

export default Text;

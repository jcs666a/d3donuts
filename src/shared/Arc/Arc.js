import React from 'react';

const Arc = ({ data, index, createArc, colors }) => {console.log(index); return (
    <g key={index} className="arc">
        <path className="arc" d={createArc(data)} fill={colors(index)} />
    </g>
)};

export default Arc;

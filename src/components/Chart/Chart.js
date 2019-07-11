import React from 'react';
import * as d3 from "d3";
import Arc from '../../shared/Arc/Arc';
import Text from '../../shared/Text/Text';
import './chart.scss';

const Chart = (props) => {
    const { data, id, innerRadius, outerRadius, symbol, title, width, height } = props;
    const createPie = d3
        .pie()
        .value(d => d.quantity)
        .sort(null);
    const createArc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    console.log("TCL: Chart -> colors", colors(1));
    const format = d3.format(",d");
    const pieData = createPie(data);
    const getSum = (total, num) => (total + num);
    const total = data.map(d => (d.quantity)).reduce(getSum, 0);

    return (
        <svg id={`donut-id-${id}`} width={width} height={height} className="donut-chart">
            <g className="donut">
                <Text text={title} type="title" />
                <Text text={`${format(total)} ${symbol}`} type="s-title" />
                {pieData.map((d, i) => (
                    <Arc
                        key={i}
                        data={d}
                        index={i}
                        createArc={createArc}
                        colors={colors}
                    />
                ))}
            </g>
            <Text text={data[0].type} type="left-text-title" color={colors(0)} />
            <Text
                text={`${(data[0].quantity * 100) / total}%`}
                type="text-down"
                color="#222"
                transform="translate(0 190)"
            />
            <Text
                text={`${data[0].quantity} ${symbol}`}
                type="text-down"
                color="#ccc"
                transform="translate(34 190)"
            />
            <Text text={data[1].type} type="right-text-title" color={colors(1)} />
            <Text
                text={`${(data[1].quantity * 100) / total}%`}
                type="text-down"
                color="#222"
                textAnchor="end"
                transform="translate(230 190)"
            />
            <Text
                text={`${data[1].quantity} ${symbol}`}
                type="text-down"
                color="#ccc"
                textAnchor="end"
                transform="translate(300 190)"
            />
        </svg>
    );

};

export default Chart;

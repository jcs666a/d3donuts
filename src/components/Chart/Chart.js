import React from 'react';
import DonutChart from 'react-d3-donut';

const Chart = (props) => {
    const { data, id, title } = props;

    return (
        <div>
            <h2>Chart</h2>
            <DonutChart
                innerRadius={70}
                outerRadius={100}
                transition={true}
                svgClass="example6"
                pieClass="pie6"
                displayTooltip={true}
                strokeWidth={3}
                data={data.map(info => ({
                    count: info.quantity,
                    name: info.type
                }))}
            />
        </div>
    );
};

export default Chart;

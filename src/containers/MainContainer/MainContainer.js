import React, { Component } from 'react';
import axios from 'axios';
import Chart from '../../components/Chart/Chart';
import './mainContainer.scss';

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            chartData: []
        }
    }

    componentWillMount() {
        axios.get(`/json/data.json`)
        .then(res => {
            this.setState({
                chartData: res.data
            });
        });
    }

    render() {
        const { chartData } = this.state;

        return (
            <div className="chart-container">
                {chartData.map(chart => (
                    <Chart
                        key={`donut-chart-${chart.id}`}
                        data={chart.data}
                        id={chart.id}
                        title={chart.title}
                        symbol={chart.symbol}
                        width={300}
                        height={200}
                        innerRadius={90}
                        outerRadius={100}
                    />
                ))}
            </div>
        );
    }
};

export default MainContainer;

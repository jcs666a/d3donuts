import React, { Component } from 'react';
import axios from 'axios';
import DonutChart from '../../components/DonutChart/DonutChart';

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
                    <DonutChart
                        key={`donut-chart-${chart.id}`}
                        data={chart.data}
                        id={chart.id}
                        title={chart.title}
                    />
                ))}
            </div>
        );
    }
};

export default MainContainer;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Doughnut, Pie } from 'react-chartjs-2';

@connect((state) => ({
  chartData: state.data.get('exampleGraph'),
}))
class GridExample extends Component {
  static propTypes = {
    chartData: PropTypes.array.isRequired,
  }

  render() {
    const { chartData } = this.props;
    return (
      <div>
        <Doughnut
          data={{
          labels: [
            'Red',
            'Green',
            'Yellow',
          ],
          datasets: [{
            data: chartData.toJS(),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            ],
          }],
        }}
          width={1000}
        />
        <Pie
          data={{
          labels: [
            'Red',
            'Green',
            'Yellow',
          ],
          datasets: [{
            data: chartData.toJS(),
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            ],
          }],
        }}
          width={1000}
        />
      </div>
    );
  }
}

export default GridExample;

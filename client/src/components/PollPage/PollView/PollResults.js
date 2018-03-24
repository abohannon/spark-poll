import React, { Component } from 'react';
import Radium from 'radium';
import { HorizontalBar } from 'react-chartjs-2';
import { COLOR_PURPLE_LIGHT, COLOR_PINK } from '../../../constants/style';

const styles = {
  resultsContainer: {
    width: 300,
    '@media screen and (max-width: 400px)': {
      width: 200,
    },
  },
};

class PollResults extends Component {
  state = {
    labels: [],
    data: [],
  }

  componentWillMount() {
    const { fetchSinglePoll, pollId } = this.props;
    fetchSinglePoll(pollId);
  }

  componentDidMount() {
    this.parseData();
  }

  parseData = () => {
    const { options } = this.props.poll;
    const labels = [];
    const data = [];

    options.map((option) => {
      labels.push(option.name);
      data.push(option.votes);
    });

    this.setState({
      labels,
      data,
    });
  }

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          data: this.state.data,
          backgroundColor: COLOR_PINK,
        },
      ],
    };

    const chartOptions = {
      legend: { display: false },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    };

    return (
      <div style={styles.resultsContainer}>
        <HorizontalBar
          data={data}
          options={chartOptions}
        />
      </div>
    );
  }
}

export default Radium(PollResults);

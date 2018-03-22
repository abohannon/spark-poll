import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

// parseData = () => {
//   const { poll } = this.props.polls.single;
//   const pollData = {
//     labels: [],
//     data: [],
//   };

//   poll.options.map((option) => {
//     pollData.labels.push(option.name);
//     pollData.data.push(option.votes);
//   });

//   return pollData;
// }

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
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,0.8)',
          highlightFill: 'rgba(220,220,220,0.75)',
          highlightStroke: 'rgba(220,220,220,1)',
          data: this.state.data,
        },
      ],
    };

    return (
      <div>
        Thanks for voting!
        <HorizontalBar data={data} />
      </div>
    );
  }
}

export default PollResults;

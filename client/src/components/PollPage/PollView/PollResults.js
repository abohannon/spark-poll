import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


class PollResults extends Component {
  render() {
    const data = {
      labels: ['Red', 'Blue'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,0.8)',
          highlightFill: 'rgba(220,220,220,0.75)',
          highlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59],
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

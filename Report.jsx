import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const CommunicationFrequencyReport = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.type),
    datasets: [
      {
        label: 'Communication Frequency',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Communication Frequency Report</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default CommunicationFrequencyReport;

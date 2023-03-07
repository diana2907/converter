import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart({ chartData, lables, toCurrency, fromCurrency }) {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };


  const data = {
    labels: lables,
    datasets: [
      {
        label: `The rate ${toCurrency} to 1 ${fromCurrency}`,
        data: chartData,
        borderColor: '#d2b575',
        backgroundColor: '#d2b575',
      },

      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return <Line options={options} data={data} />;
}

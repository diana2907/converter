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
    ],
  };

  return <Line options={options} data={data} />;
}

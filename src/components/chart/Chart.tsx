import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

// Registrando os componentes do Chart.js necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartComponentProps {
  type: "line" | "bar" | "pie" | "doughnut";
  data: any;
  options: {};
}

const ChartComponent = ({ type, data, options }: ChartComponentProps) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      default:
        return <p>Tipo de gráfico inválido</p>;
    }
  };

  return <div>{renderChart()}</div>;
};

export default ChartComponent;

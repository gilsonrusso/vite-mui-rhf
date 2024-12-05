import ChartComponent from "../../components/chart/Chart";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales 2023",
      data: [120, 150, 180, 200, 250, 300],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Over Time",
    },
  },
};

export function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1>Home Page</h1>
      <div>
        <ChartComponent type={"line"} data={data} options={options} />
      </div>
        {/* <FormsProvider>
          <TabsWithAccordion />
        </FormsProvider> */}
    </div>
  );
}

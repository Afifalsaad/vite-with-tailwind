import React from "react";
import {
  AreaChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Bar,
  BarChart,
  Legend,
  ComposedChart,
} from "recharts";

// ----------Area Chart----------
// const salesData = [
//   { month: "Jan", sales: 4000, revenue: 2400 },
//   { month: "Feb", sales: 3000, revenue: 2210 },
//   { month: "Mar", sales: 2000, revenue: 2290 },
//   { month: "Apr", sales: 2780, revenue: 2000 },
//   { month: "May", sales: 1890, revenue: 2181 },
//   { month: "Jun", sales: 2390, revenue: 2500 },
// ];

// // ----------Bar Chart----------
// const marksData = [
//   { name: "Alice", physics: 85, chemistry: 78, math: 92 },
//   { name: "Bob", physics: 72, chemistry: 69, math: 80 },
//   { name: "Charlie", physics: 90, chemistry: 88, math: 95 },
//   { name: "David", physics: 65, chemistry: 70, math: 60 },
//   { name: "Eva", physics: 78, chemistry: 85, math: 82 },
// ];

// // ----------Bar Chart----------
const composedData = [
  { month: "Jan", visitors: 4000, clicks: 2400, revenue: 240 },
  { month: "Feb", visitors: 3000, clicks: 1398, revenue: 221 },
  { month: "Mar", visitors: 2000, clicks: 9800, revenue: 229 },
  { month: "Apr", visitors: 2780, clicks: 3908, revenue: 200 },
  { month: "May", visitors: 1890, clicks: 4800, revenue: 218 },
  { month: "Jun", visitors: 2390, clicks: 3800, revenue: 250 },
  { month: "Jul", visitors: 3490, clicks: 4300, revenue: 210 },
];

const ResultCharts = () => {
  return (
    <div>
      {/* Area Chart */}
      {/* <AreaChart width={500} height={200} data={salesData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"sales"}></YAxis>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="month"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart> */}

      {/* Bar Chart */}
      {/* <BarChart width={500} height={300} data={marksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis dataKey={"physics"}></YAxis>
        <Tooltip />
        <Legend />
        <Bar dataKey="chemistry" fill="#8884d8" />
        <Bar dataKey="math" fill="#82ca9d" />
      </BarChart> */}

      {/* Composed Chart */}
      {/* <ComposedChart width={500} height={200} data={composedData}>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"visitors"}></YAxis>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="visitors" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="clicks" stroke="#ff7300" />
      </ComposedChart> */}
    </div>
  );
};

export default ResultCharts;

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch("data1.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="dashboard-container">
      <div>
        <h1>Line Chart</h1>
        <LineChart width={500} height={400} data={product}>
          <Line dataKey={"investment"}></Line>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>

      <div>
        <h1>BarChart</h1>
        <BarChart width={500} height={400} data={product}>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="investment"></Bar>
          <Bar dataKey="sell"></Bar>
        </BarChart>
      </div>

      <div>
        <h1>Compressed Chart</h1>
        <ComposedChart width={730} height={300} data={product}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Dashboard;

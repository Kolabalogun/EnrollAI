import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis } from "recharts";

const data = [
  { name: "16", processTime: 4000, approvalRate: 2400 },
  { name: "17", processTime: 3000, approvalRate: 1398 },
  { name: "18", processTime: 2000, approvalRate: 9800 },
  { name: "19", processTime: 2780, approvalRate: 3908 },
  { name: "20", processTime: 1890, approvalRate: 4800 },
  { name: "21", processTime: 2390, approvalRate: 3800 },
];

const ApplicationTrendsChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="processTime"
            stroke="#a66fd7"
            strokeWidth={4}
            dot={false}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="approvalRate"
            stroke="#6ad2ff"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationTrendsChart;

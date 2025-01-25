import { ApplicationStatType } from "@/lib/types";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#0088FE", "#FF8042"];

const PieTrendChart = ({
  providerStatData,
}: {
  providerStatData: ApplicationStatType | null;
}) => {
  const data = [
    { name: "Approved", value: providerStatData?.approved },
    { name: "Pending", value: providerStatData?.pending },
    { name: "Declined", value: providerStatData?.declined },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieTrendChart;

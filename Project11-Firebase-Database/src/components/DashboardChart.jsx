import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function DashboardChart({ data }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="stock" />
    </BarChart>
  );
}

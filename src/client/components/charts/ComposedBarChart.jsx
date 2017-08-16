import React from 'react'
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Tooltip,
  Legend,
  Line
} from 'recharts'

const ComposedBarChart = ({ data }) =>
  <ComposedChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    <XAxis dataKey="month" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Bar dataKey="gh" stackId="a" fill="#8884d8" />
    <Bar dataKey="ef" stackId="a" fill="#82ca9d" />
    <Bar dataKey="lc" stackId="a" fill="#ff6699" />
    <Line type="monotone" dataKey="total" stackId="a" fill="#000000" />
  </ComposedChart>

export default ComposedBarChart

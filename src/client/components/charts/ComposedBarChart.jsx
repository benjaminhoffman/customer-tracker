import React from 'react'
import * as constants from '../../CONSTANTS'
import {
  Bar,
  // Brush,   // use me to control date slider
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
// import styles from './Charts.css'

const ComposedBarChart = ({ data, chartTheme }) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        syncId="sync"
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {/* map allows us to keep this module dynamic + keeps colors consistent */}
        {(constants[chartTheme] || []).map(val => {
          return (
            <Bar
              dataKey={val}
              key={val}
              stackId="a"
              fill={constants.chartColors[val]}
            />
          )
        })}
        <Line type="monotone" dataKey="Total" fill="#000000" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default ComposedBarChart

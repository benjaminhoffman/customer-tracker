import React from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts'

const AreaCharts = ({ data }) => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorLc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ff6699" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#ff6699" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorGh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorEf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="gh"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorGh)"
      />
      <Area
        type="monotone"
        dataKey="ef"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorEf)"
      />
      <Area
        type="monotone"
        dataKey="lc"
        stroke="#ff6699"
        fillOpacity={1}
        fill="url(#colorLc)"
      />
    </AreaChart>
  )
}

export default AreaCharts

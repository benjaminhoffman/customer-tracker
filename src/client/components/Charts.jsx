import React, { Component } from 'react'
import Chart from './charts/Chart'
import AreaChart from './charts/AreaChart'
import ComposedBarChart from './charts/ComposedBarChart'
import axios from 'axios'

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <ComposedBarChart data={this.state.data} />
        <AreaChart data={this.state.data} />
        <Chart />
      </div>
    )
  }

  componentWillMount() {
    console.log('chart comp mounted!')

    axios
      .get('http://localhost:3001/api/chart-data')
      .then(({ data }) => {
        console.log(data)
        this.setState({
          data
        })
      })
      .catch(e => {
        // TODO do something
        console.log(e)
      })
  }
}

export default Charts

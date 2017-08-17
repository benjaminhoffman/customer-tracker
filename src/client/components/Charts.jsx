import React, { Component } from 'react'
import get from 'lodash.get'
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
        <ComposedBarChart
          chartTheme="doctors"
          data={get(this.state, 'data.total')}
        />
        <ComposedBarChart
          chartTheme="sources"
          data={get(this.state, 'data.source')}
        />
        <ComposedBarChart
          chartTheme="channels"
          data={get(this.state, 'data.channel')}
        />
      </div>
    )
  }

  componentDidMount() {
    // load data after page mounts
    // ie dont block the page render!
    axios
      .get('http://localhost:3001/api/chart-data')
      .then(({ data }) => {
        console.log(data)
        this.setState({
          data
        })
      })
      .catch(e => {
        // TODO capture error
        console.log(e)
      })
  }
}

export default Charts

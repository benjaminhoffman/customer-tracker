import React, { Component } from 'react'
import ComposedBarChart from './charts/ComposedBarChart'
import axios from 'axios'
import styles from './Charts.css'

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div className={styles.charts} aria-label="Graphs and Charts">
        {Object.keys(this.state.data).map(chartId => {
          const chartTheme = chartId.includes('%')
            ? chartId.slice(0, -4)
            : chartId
          return (
            <div className={styles.chart} key={chartId}>
              <h2 className={styles.title}>Patients by {chartId}</h2>
              <ComposedBarChart
                chartTheme={chartTheme}
                data={this.state.data[chartId]}
                isPercentage={chartId.includes('%')}
              />
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    // load data after page mounts
    // ie dont block the page render!
    // also, dont make xhr req if we already have data
    if (Object.keys(this.state.data).length === 0) {
      axios
        .get('http://localhost:3001/api/chart-data')
        .then(({ data }) => {
          this.setState({
            data
          })
        })
        .catch(e => {
          // TODO capture & log error
          console.log(e)
        })
    }
  }
}

Charts.displayName = 'Charts'

export default Charts

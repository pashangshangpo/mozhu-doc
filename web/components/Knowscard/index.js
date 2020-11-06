import React from 'react'
import './index.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import Meta from 'antd/lib/card/Meta'

class Knowscard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card className='mycard'>
        <Link to={this.props.router}>
          <Meta title='Card title' description='This is the description' />
        </Link>
      </Card>
    )
  }
}
export default Knowscard

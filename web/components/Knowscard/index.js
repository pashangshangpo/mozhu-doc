import React from 'react'
import './index.scss'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

class Knowscard extends React.Component {
  render() {
    return (
      // <div className="knowscard">

      <Card title='Default size card' style={{ width: 260 }}>
        <Link to='/depot'>
          <p>Card content</p>
        </Link>
      </Card>
      // </div>
    )
  }
}
export default Knowscard

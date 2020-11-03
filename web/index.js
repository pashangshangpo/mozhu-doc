import React from 'react'
import ReactDOM from 'react-dom'
import Route from './Route'

import './style/reset.scss'
import './style/index.scss'

//新添加
import { Layout } from 'antd'
import Headertop from './components/Hearder'

const { Content, Footer } = Layout

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Headertop />
        <Content
          className='site-layout'
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 380 }}
          >
            <Route />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.body.appendChild(document.createElement('div'))
)

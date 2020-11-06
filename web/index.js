import React from 'react'
import ReactDOM from 'react-dom'
import Route from './Route'
import { HashRouter } from 'react-router-dom'

import '$style/reset.scss'
import '$style/index.scss'

//新添加
import { Layout } from 'antd'
import Headertop from './components/Hearder'

const { Content, Footer } = Layout

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Headertop />
          <Content
            className='site-layout'
            style={{
              padding: '0 50px',
              marginTop: 64,
              backgroundColor: 'white',
            }}
          >
            {/* <Breadcrumb style={{width:980, margin: '16px auto' }}>
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
            墨竹文档 ©2020 Created by CJ前端
          </Footer>
        </Layout>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.body.appendChild(document.createElement('div'))
)

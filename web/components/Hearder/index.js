import React from 'react'
import { Layout, Button, Avatar, Image } from 'antd'

import './index.scss'

const { Header } = Layout

class Headertop extends React.Component {
  render() {
    return (
      <Header
        className='header'
        style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <div className='logo'> 墨竹文档 </div>
        <Button>创建文章</Button>
        <Button>创建知识库</Button>
        <Avatar
          className='avatar'
          src={
            <Image src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          }
        />
      </Header>
    )
  }
}
export default Headertop

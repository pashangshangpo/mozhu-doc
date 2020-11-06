import React from 'react'
import { Layout, Button, Avatar, Image } from 'antd'
import { Link } from 'react-router-dom'
import Dialog from '../Dialog'
import Child from '../Child'
import './index.scss'

const { Header } = Layout

class Headertop extends React.Component {
  constructor(props) {
    super(props)
    this.State = { date: new Date() }
  }
  myalert = () => {
    Dialog.open({
      childrens: [Child],
      props: {
        showValue: function() {
          // console.log('Dialog******')
        },
        close: function() {
          Dialog.close()
        },
      },
      closeDialog: function() {
        //关闭弹窗
      },
    })
  }
  render() {
    return (
      <Header
        className='header'
        style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      >
        <div className='headercontent'>
          <div className='logo'>
            <Link to='/'>墨竹文档</Link>
          </div>
          <Link to='/Article'>
            <Button type='primary'> 创建文章</Button>
          </Link>
          <Button type='primary' onClick={this.myalert}>
            创建知识库
          </Button>
          <Avatar
            className='avatar'
            src={
              <Image src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            }
          />
        </div>
      </Header>
    )
  }
}
export default Headertop

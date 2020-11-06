import React from 'react'
import './index.scss'
import { List, Avatar, Card, Button, Empty } from 'antd'
import Konwscard from '$components/Knowscard'
import { renderShow } from '$common/util'
import Dialog from '$components/Dialog'
import Child from '$components/Child'
import { parse } from 'postcss'

const data = []
const cardlist = [
  {
    title: '知识库1',
  },
  {
    title: '知识库2',
  },
]

const popDialog = () => {
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
export default () => {
  return (
    <div className='content'>
      <div className='cardlist'>
        {renderShow(
          cardlist.length,
          cardlist.map((item, index) => (
            <Konwscard key={index} router='/depot'></Konwscard>
          )),
          <Card className='mycard' onClick={popDialog}>
            <p>创建知识库</p>
          </Card>
        )}
      </div>
      <div className='line' />
      <div className='articelist'>
        <p>最新文章推荐</p>
        {renderShow(
          data.length,
          <List
            itemLayout='horizontal'
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                  }
                  title={<a href='https://ant.design'>{item.title}</a>}
                  description='Ant Design, a design language for background applications, is refined by Ant UED Team'
                />
              </List.Item>
            )}
          />,
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  )
}

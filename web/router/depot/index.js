import React from 'react'
import { List, Avatar, Empty } from 'antd'
import { renderShow } from '$common/util'
import Konwscard from '$components/Knowscard'
import './index.scss'

const groupdata = [{}]
const DATA = []

export default () => {
  return (
    <div className='content'>
      <div className='cardlist'>
        {renderShow(
          groupdata.length,
          groupdata.map((item, index) => (
            <Konwscard key={index} router='/special'></Konwscard>
          )),
          <div className='nodata'>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        )}
      </div>
      <div className='line' />
      <div className='articelist'>
        <p>最新文章推荐</p>
        {renderShow(
          DATA.length,
          <List
            itemLayout='horizontal'
            dataSource={DATA}
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

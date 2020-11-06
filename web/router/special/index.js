import React from 'react'
import './index.scss'
import { List, Space } from 'antd'
import { LikeOutlined, EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `专栏文章 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
export default () => {
  return (
    <div className='content'>
      <div className='articelist'>
        <List
          itemLayout='vertical'
          size='large'
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 10,
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={EyeOutlined}
                  text='156'
                  key='list-vertical-star-o'
                />,
                <IconText
                  icon={LikeOutlined}
                  text='156'
                  key='list-vertical-like-o'
                />,
                <span>2020-12-13</span>,
                // <IconText icon={} text="220201" key="list-vertical-message" />,
              ]}
              extra={
                <img
                  width={200}
                  alt='logo'
                  src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                />
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={
                  <div>
                    <Link to={'/infoarticle'}>{item.title}</Link>
                  </div>
                }
                // description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Typography } from 'antd'
import { LikeTwoTone, LikeFilled, LikeOutlined } from '@ant-design/icons'
import { markdown } from 'markdown'
import { renderShow } from '$common/util'

import './index.scss'

const { Title } = Typography
const articles = {
  title: 'web前端HTML5入门篇',
  timer: '2020-01-03',
  contents: '# 标题  ' + ' - 内容  ' + '>> 缩进',
}
export default () => {
  const [boo, setBoo] = useState(true)

  const clickBtn = () => {
    setBoo(!boo)
  }

  return (
    <div className='content infoarticle'>
      <Title>{articles.title}</Title>
      <span>timer:{articles.timer} | 作者：赵赵</span>
      <div
        className='artice_centent'
        dangerouslySetInnerHTML={{ __html: markdown.toHTML(articles.contents) }}
      ></div>
      <div
        className='circle'
        style={{ backgroundColor: boo ? '#40a08b' : 'white' }}
        onClick={clickBtn}
      >
        {renderShow(
          boo,
          <LikeFilled style={{ color: 'white' }} />,
          <LikeFilled style={{ color: 'rgb(217,217,217)' }} />
        )}
      </div>
    </div>
  )
}

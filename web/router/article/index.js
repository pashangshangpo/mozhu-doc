import React from 'react'
import './index.scss'
import { Form, Button, Input, Select } from 'antd'
import { Row, Col } from 'antd'
const { TextArea } = Input
const { Option } = Select

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
}
const tailLayout = {
  wrapperCol: { offset: 0, span: 24, offset: 0 },
}

const onFinish = values => {
  console.log('Success:', values)
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}
function onChange(value) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}
const DATA = [
  {
    name: 'lucy',
  },
  {
    name: 'Jack',
  },
  {
    name: 'yiminghe',
  },
]

export default () => {
  return (
    <div className='content article'>
      <Form
        className='from'
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name='title'>
          <Input defaultValue='公共知识库' size='large' bordered={false} />
        </Form.Item>
        <Form.Item {...tailLayout} className='selectbar'>
          <Row>
            <Col offset={1} span={11}>
              <Form.Item {...layout} label='选择知识库' name='selectknow'>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder=''
                  optionFilterProp='children'
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {DATA.map((Item, index) => (
                    <Option value={Item.name} key={index}>
                      {Item.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4} offset={8}>
              <Button htmlType='submit' ghost>
                {' '}
                发布文章{' '}
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item className='textarea'>
          <TextArea autoSize={{ minRows: 20 }} bordered={false}></TextArea>
        </Form.Item>
      </Form>
    </div>
  )
}

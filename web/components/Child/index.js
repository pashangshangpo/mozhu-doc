import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import './index.scss'
import { CloseCircleOutlined } from '@ant-design/icons'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
}

const onFinish = values => {
  console.log('Success:', values)
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  showValue = () => {
    this.props.showValue && this.props.showValue()
  }
  closeDiglog = () => {
    this.props.close && this.props.close()
  }
  render() {
    return (
      <div className='Child'>
        <CloseCircleOutlined className='closeicon' onClick={this.closeDiglog} />
        <div className='childcontent'>
          <Form
            {...layout}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label='知识库名称'
              name='knowsname'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label='知识库描述' name='konws'>
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <div className='title'>
                <label className='label'>知识库标题</label>
                <input defaultValue='没有标题'/>
            </div>
            <div className='childcontent'>
                <label className='lable'>知识库标题</label>
                <input defaultValue='请填写对知识库的描述'/>
            </div> */}
          {/* <button onClick={this.showValue}>调用父的方法</button> */}
        </div>
      </div>
    )
  }
}

export default Child

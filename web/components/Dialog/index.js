import React, { Component } from 'react'
import { is, fromJS } from 'immutable'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.scss'

let defaultState = {
  alertStatus: false,
  alertTip: '提示',
  closeDialog: function() {},
  childs: '',
}

class Dialog extends Component {
  state = {
    ...defaultState,
  }
  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }
  //打开弹窗
  open = options => {
    options = options || {}
    options.alertStatus = true
    var props = options.props || {}

    var childs = this.renderChildren(props, options.childrens) || ''
    console.log(childs)
    this.setState({
      ...defaultState,
      ...options,
      childs,
    })
  }
  //关闭弹窗
  close() {
    this.state.closeDialog()
    this.setState({
      ...defaultState,
    })
  }
  renderChildren(props, childrens) {
    //遍历所有子组件
    var childs = []
    childrens = childrens || []
    var ps = {
      ...props, //给子组件绑定props
      _close: this.close, //给子组件也绑定一个关闭弹窗的事件
    }
    childrens.forEach((currentItem, index) => {
      childs.push(
        React.createElement(currentItem, {
          ...ps,
          key: index,
        })
      )
    })
    return childs
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    )
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component={this.FirstChild}
        transitionName='hide'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div
          className='dialog-con'
          style={
            this.state.alertStatus ? { display: 'block' } : { display: 'none' }
          }
        >
          {this.state.childs}
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

let div = document.createElement('div')
let props = {}
document.body.appendChild(div)

let Box = ReactDOM.render(React.createElement(Dialog, props), div)

export default Box

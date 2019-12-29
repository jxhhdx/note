# react
## 概述
- react是一个用于构建用户界面的javascript库，它由facebook以及个人开发者和公司组成的社区开发。它拥有较高的性能，代码逻辑非常简单。

## JSX
- JSX是React的核心部分，它使用XML标记的方式去直接声明界面，界面组件之间可以互相嵌套.

## 组件
- 组件可以是的使得页面的开发变得更加灵活，代码复用率高。自由组合开发的组件。

​    eg：

```javascript
  var Hello = React.createClass({
        render: funcation() {
            return <h1>Hello {this.props.name}</h1>;
        }
  });
  ReactDOM.render(
      <HelloMessage name = "W3CSchool" />,
      document.getElementById('example')
 );   
```



## state
```javascript
    getInitialState:funcation() {
        return {liked:fales};
    }
```

## React组件API
        设置状态：setState
        替换状态：replaceState
        设置属性：setProps
        强制更新：forceUpdate
        获取DOM节点：finDOMNode
        判断组件挂载状态：isMounted

## 生命周期方法
```javascript
    componentWillMount 在渲染前调用,在客户端也在服务端
    componentDidMount : 在第一次渲染后调用，只在客户端。
    componentWillReceiveProps 在组件接收到一个新的prop时被调用。
    shouldComponentUpdate 返回一个布尔值。
    componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。
    componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
    componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
```
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

## 路由

+  http://react-guide.github.io/react-router-cn/docs/Introduction.html 

# 实践（React小游戏）

 [井字棋小游戏]( https://zh-hans.reactjs.org/tutorial/tutorial.html )

## 1、环境搭建

```shell
npx create-react-app my-app  # 搭建环境
del *  # windows清除src下的目录时使用
npm start  # 启动
```

## 2、项目开发

### 开发基础（react之Class的书写形式）

+ 如下是render方法返回组件

```react
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

+ 等价于如下的代码：

```react
React.createElement("div", {
  className: "shopping-list"
},  React.createElement("h1", null, "Shopping List for ", props.name), 
	React.createElement("ul", null, 
		React.createElement("li", null, "Instagram"), 
		React.createElement("li", null, "WhatsApp"), 
		React.createElement("li", null, "Oculus")
	)
);
```

### 开发基础（react之参数传递父传子）

+ react使用Props来进行参数的传递，使用`this.props.value`从父类中获取属性，如下是父组件传递参数。

```react
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

+ 子组件获取参数

```react
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

### 开发基础（react之保存数据）

+ 给类创建构造函数，并使用super（props）就可以使用`this.state = {value: null,}`定义需要保存的数据。
+ 查时this.state.value`
+ 改时`this.setState({value: xxx})`

```react
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

### 开发基础（react之浏览器插件安装）

+ 应用商店自行安装（安装之后可以查看组件树）

### 开发基础（react之参数传递子传父）

+ 子组件传递参数的思路是，父组件给子组件传递一个函数，子组件通过父组件给予的函数修改父组件的状态。，如下代码是父组件：

```react
class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = { squares: Array(9).fill(null),}
    }
    // 给子组件传递函数
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        squares[i] = 'X'
        this.setState({squares: squares})
    }

    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)} <!--同上x2-->
                </div>
                <!--同上x2-->
            </div>
        );
    }
}
```

+ 如下是子组件调用父组件的函数，并且传参

```react
class Square extends React.Component {
    render() {
        return (
            <button  className="square"  onClick = {() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
```

### 开发基础（react之类的简写）

+ 将class Square转化为function Square

```react
// class Square extends React.Component {
//     render() {
//         return (
//             <button 
//                 className="square" 
//                 onClick = {() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
```



## 3、项目部署
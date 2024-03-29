# ES6

## let、const

```javascript
// 块级作用域（let、const）
// 重新被声明（let、const）
// 不存在变量提升（let、const）
console.log(aa); // undefined var 定义变量的时候会最先执行var aa段，所以这时会是未定义
var aa = 'nice'
// 暂存死区
var nice = "hello1"
{
    console.log(nice); // 全局作用域中定义过nice，但是由于nice在块级作用域中也定义了，所以这种情况就是暂时锁区
    let nice = "hello2"
}
console.log(nice);
// q:生成十个按钮，每个按钮点击的时候弹出1-10
// var i = 0;
// for (i = 0; i < 10; i++) {
//     (function (i) {
//         var btn = document.createElement('button')
//         btn.innerText = i
//         btn.onclick = function name(params) {
//             alert(i)
//         }
//         document.body.appendChild(btn)
//     })(i)
// }

for (let i = 0; i < 10; i++) {
    var btn = document.createElement('button')
    btn.innerText = i
    btn.onclick = function name(params) {
        alert(i)
    }
    document.body.appendChild(btn)
}
// q：如何解决const引用类型可以被修改的问题
Object.freeze() // 可以使引用不会被改变
// ES6之前如何声明常量
Object.defineProperty(CST, 'BASE_NAME', {
    value:'小明',
    writable: false
}) // 保证属性不会修改
Object.seal() // 保证属性不会被拓展
Object.defineProperty(Object, 'freezePolyfill', {
    value: function (obj) {
        var i;
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                Object.defineProperty(obj, i, {
                    writable: false
                })
            }
        }
        Object.seal(obj)
    }
})

let xiaoming = {
    age: 18,
    name: 'javon'
}
Object.freezePolyfill(
    xiaoming
)
```

## 解构赋值

+ 解构赋值是JavaScript的一个表达式，使得可以将值从数组或者属性中提取到不同的变量

```javascript
// 数组的解构赋值
const arr = [1,2,3,4];
let [a,b,c,d] = arr; // a = 1,b = 2...
const arr1 = [1,2,[3,4,[5,6]]]
const [ , , [, ,[, g]]] // g = 6
// 扩展运算符
const arr1 = [1,2];arr2 = [3,4]; arr3 = [ 5, 6];
const arr4 = [...arr1,..arr2,...arr3] // arr4 = [1,2,3,4,5,6]
const arr5 = [1,2,3,4];
const [a,b,...c] = arr5 // c = [3,4]，这时...必须在最后
// 默认值
// const arr = [1, undefined, undefined]
// const arr = [a, b = 3, c , d = 'aaa'] // a = 1, b = 3, c = undefined,  d = 'aaa'

// 交换变量
[a, b] = [b, a]

// 接收多个 函数返回值
function getUserInfo(id) {
    return [
        true,
        {
            name:'小明'，
            gender:'女'，
            id: id
        },
        '请求成功'
    ] 
}
const [status, data, msg] = getUserInfo(123)
// 对象解构赋值
// 字符串解构赋值
// 函数参数解构赋值
// 数值和布尔值解构赋值
```

## 异步编程
+ promise

> 用来完成链式调用

+ async/await

> async用来定义一个函数，经过async定义函数会放回一个Promise对象，await只能在async函数中使用，当执行到await的时候会暂停，等待触发的异步执行完成之后才会继续执行下去；

+ 宏任务和微任务
+ event loop模型

## Proxy和Reflect

+ Proxy可以得到一个对一个对象的代理对象，通过代理对象操作原有的对象的时候，如果使用了handle方法，就可以得到一个指定的结果

```javascript
let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    get: function(target, key) {
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('setting '+key);
        target[key] = value;
    }
}
let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set
```

+ Reflect对某些方法的返回结果进行修改，让它变得更加合理

## 装饰器 Devorator





# JavaScript

## JavaScript DOM操作

+ 创建节点

```javascript
// 创建节点
document.createDocumentFragment(); // 创建文档片段
document.createComment("A comment");  // 创建注释
document.createDocumentFragment();  // 创建文档片段
document.createElement("li");  // 创建节点
document.createTextNode("Item " + (i+1));  // 创建文本结点
// 批量创建节点
innerHTML // 批量创建读取
outerHTML // 类似innerHTML，只是包含节点自身
innerText  
innerText
// 节点遍历的两套方案
```
+ 添加节点（操作节点）

```javascript
appendChild(); // 向父节点添加创建的子节点
insertChild(); // 在指定的已有节点之前插入新的子节点
replaceChild();  // 用新节点替换某个子节点
cloneChild();  // 拷贝节点，并返回该副本
normalize();  // 合并相邻的TEXT节点
splitText();  // 按照指定的位置把文本节点分割为两个节点
```

+ 查找节点

```javascript
getElementById();  // 获取对应ID的节点
getElementByClassName();  // 获取对应class的节点集合
getElementByName();  // 获取对应name的节点
getElementByTagName();  // 获取对应的标签名的节点集合
querySelector();  // 选择器方式选择节点
querySelectorAll();  // 选择器方式批量选择节点
// 获取子节点
elem.childNodes[i]
elem.parentNode
elem.firstChild
elem.lastChild
elem.previousSibling
elem.nextSibling

```

+ 删除节点

```javascript
removeChild(); // 删除节点
innerHTML // 覆盖节点的时候置空即可
```

### DOM属性

```javascript
ss.getAttribute("class")  // 获取属性
ss.setAttribute("class", "nice") // 设置属性
ss.removeAttribute("class")  // 删除属性
```



### DOM事件

```javascript
onload // 页面加载时触发
onclick  // 鼠标点击时触发
onmouseover  // 鼠标滑过时触发
onmouseout  // 鼠标离开时触发
onfocus  // 获取焦点时触发
onblur  // 失去焦点时触发
onchange  // 域内容改变时触发
onsubmit // 表单中的确认按钮被点击时触发
onmousedown  // 鼠标点击时触发
onmousemove  // 鼠标移动时触发
onmouseup  // 鼠标松开时触发
onresize  //调整浏览器窗口时触发
onsroll  // 拖动滚动条时触发
onkeydown  // 用户按按下一个键盘按钮时触发
onkeypress  // 按钮按下时响应字符
onkeyup  // 按钮松开
keyCode  // 返回onkeypress、onkeydown或onkeyup
```

## JavaScript BOM

```javascript
window.prompt("text,defaultText"); // text:要在对话框中显示的纯文本(不是HTML格式); defaultText:默认的输入文本
window.open(pageURL,name,parameters)
window.close()
// location见面试笔记
history.back() // 返回历史的上一步
history.forward() // 历史记录的下一步
history.go(n)  // 回到历史记录的后n步
```



## JAVASCRIPT附图

![DOM1](D:\shortcut\note\public\image\DOM1.png)

![DOM2](D:\shortcut\note\public\image\DOM2.png)

![DOM3](D:\shortcut\note\public\image\DOM3.png)

# 插件安装

```shell
npm install axios  # 安装axios
npm install js-cookie  # 安装cookie
```

# CSS

## flex布局

+  Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。 

常用的参数

- flex-direction: row | row-reverse | column | column-reverse; 决定主轴的方向
- flex-wrap: nowrap | wrap | wrap-reverse; 是否换行，默认不换行
- flex-flow: <flex-direction> || <flex-wrap>; 以两者的简写
- justify-content: flex-start | flex-end | center | space-between | space-around;居中方式
- align-items: flex-start | flex-end | center | baseline | stretch;交叉轴上如何对齐
- align-content: flex-start | flex-end | center | space-between | space-around | stretch; 多根轴线的对齐方式。 

> [参考学习文献](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


# Sass

## 数据类型

> number、string、list、map类型

```scss
$width: 200px; // number类型
$str: 'hello.jpg' // String类型
$list:(100px,200px,300px,400px); // list
$map: (top: 1px, left: 2px, bottom: 3px, right: 4px); // map
```

## 加减乘除

```scss
/*加减乘除*/
.div {
    font: 10px/8px;
    font: (10px/8px);
    font: (10px*8);
    width: $width/2;
    height: (500px/2);
    margin-left: 5px + 8px/2px;
}
/*颜色运算*/
.p { color: $color1+$color2; }
.p {
  color: mix($color1 , $color2);
  color: red($color);
  color: green($color);
  color: blue($color);
}
```

## mixin

```scss
/*一般minin*/
@mixin helloMixin {
  display: inline-block;
  font: {
    size: 20px;
    weight: bold;
  }
  color: red;
}
/*嵌套minin*/
@mixin helloMixin2 {
  padding: 10px;
  background-color: red;
  @include helloMixin;
}
/*参数minin*/
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
.div {
  margin: 10px;
  @include helloMixin2;
}
.p { 
  @include sexy-border(blue, 1in);
}
```

## 继承

```scss
/*简单继承*/
.div {
  border: 1px #f00;
  background-color: #fdd;
}
.divext {
  @extend .div;
  border-width: 3px;
}
/*关联属性继承*/
.div1 {
  border: 1px #f00;
  background-color: #fdd;
}
.div1.other {
  background-image: url("/image/hacked.png");
}
.divext {
  @extend .div1;
  border-width: 3px;
}
/*伪类继承*/
a:hover {
  text-decoration: underline;
}
.hoverlink {
  color: red;
  @extend a,:hover;
}
/*链式继承*/
.div1  {
   border: 1px solid #000;
}
.div2  {
   @extend .div1;
   color: red;
}
.div3  {
   @extend .div2;
   background-color: #fff;
}
/*和mediaquery混用*/
@media print {
  .div1 {
    border: 1px #f00;
    background-color: #fdd;
  }
  .div2 {
    @extend .div1;
    border-width: 3px;
  }
}
.div1 {
  border: 1px #f00;
  background-color: #fdd;
}
@media screen and (max-width: 500px) {
  .div2 {
    @extend .div1;
    border-width: 3px;
  }
}
```

## if、while、for

```scss
/*@if*/
$type: 'tony';
p {
  @if $type == 'bufy' {
    color: blue;
  } @else if $type == 'tim' {
    color: red;
  } @else if $type == 'tony' {
    color: green;
  } @else {
    color: black;
  }
}
@if $type == 'bufy' {
    .div {
        color: black;
    }
}@else {
    .div {
        color: red;
    }
}
/*@for*/
@for $i from 1 through 3 {
  .item-#{$i} { width: 1px * $i; }
}
/*@for -to*/
@for $i from 1 to 3 {
  .item-#{$i} { width: 1px * $i; }
}
/*@for list*/
$list:(1,2,3,4,5);
@for $i from 1 through length($list) {
  .item-#{$i} { width: 1px * $i; }
}
/*while*/
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 1px * $i; }
  $i: $i - 2;
}
/*each*/
$map: (top: 1px, left: 2px, bottom: 3px, right: 4px);
.div {
    @each $key, $value in $map {
            #{$key}: $value;
    }
}
```

## 内置函数

```scss


/*内置函数*/

/*string*/

$string: 'hello';

.div {
  background-image:unquote($string);
  background-image:quote($string);
  background-image:str-length($string);
  background-image:str-insert($string, 'a', 2);
  background-image:str-index($string, 'e');
  background-image:to-upper-case($string);
  background-image:to-lower-case($string);
}

/*number*/

$number: 70;
$number2: 71;

$numberPercent: 7;

$numberRound:25.9;
.div {
  zoom:percentage($numberPercent);

  zoom:round($numberRound);

  zoom:ceil($numberRound);

  zoom:floor($numberRound);

  zoom:abs($number);

  zoom:min($number,$number2);

  zoom:max($number,$number2);

  zoom:random(20);
}

/*list*/
$list: (1,2,3,4,5);

.div {
  zoom:length($list);

  zoom:nth($list,1);

  zoom:set-nth($list,1,'x');

  zoom:join($list,(6,7,8));

  zoom:append($list,6);

  zoom:index($list,1);

}

/*map*/
$map: (top: 1px, left: 2px, bottom: 3px, right: 4px);
.div {
    width:map-get($map,left);
    @debug map-remove($map,left);
    width:map-keys($map);
    width:map-values($map);
    width:map-has-key($map,top);

}
@mixin foo($args...) {
  @debug keywords($args);
}

@include foo($arg1: val, $arg2: val);

/*自定义函数*/
$rem1 : 100px;
@function px2rem($px) {
    $rem : 37.5px;
    @debug $rem1;
    @return ($px / $rem) + rem;
}
//@debug $rem;
.div {
    width: px2rem(20px);
}
```

# Webpack

+ 使用webpack4搭建react开发环境，使用webpack4可以更快编译项目、减少繁琐的配置

1. 运行`npm init -y` 初始化项目

2. 创建`src`和dist产品目录

3. 在目录下创建`index.html`

4. 运行`npm i webpack webpack-cli webpack-dev-server -D`安装webpack

5. webpack4特点在于实现了约定大于配置的概念

   + 打包的入口时`src`->`index.js`
   + 打包后输出文件位置是`dist`->`main.js`
   + 4.x新增了`mode`选项,webpack.config.js文件中最少有它
   
6. 安装插件使得页面运行到内存中`npm i html-webpack-plugin -D`，并进行如下配置：
   
```javascript
   const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 在内存中生成html页面的插件
   // 创建一个插件的实例对象
   const htmlplugin = new HtmlWebpackPlugin({
       template: path.join(__dirname, './src/index.html'),// 源文件
       filename: 'index.html'
   })
   module.exports = {
       mode: 'production', // development production 
       plugins: [
           htmlplugin
       ]
   }
```

   7. 运行`npm i react react-dom -S`安装react依赖
   
   8. 启用jsx语法，安装babel插件
   
      + 运行`npm i babel-core babel-loader babel-plugin-transform-runtime -D`
      + 运行`npm i babel-preset-env babel-preset-stage-0 -D`
      + 安装能够识别jsx语法的包
        + 运行`npm i babel-preset-react -D`
      + 添加`.babelrc`配置文件
      
      ```json
      {
          "presets": ["env", "stage-0", "react"],
          "plugins": ["transform-runtime"]
      }
      ```
      + 添加babel配置文件
      
      ```json
          module: {
              // 所有第三方模块的配置规则
              rules: [// 第三方匹配规则
                  { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
              ]
          },
      
      ```
      

# Vue

## 指令
```javascript
v-cloak 
v-text
v-html  // 用来说明定义的值为html格式
"v-bind："缩写是"："  // 用来说明属性的中值为变量
v-on //缩写是"@"  // 绑定事件
v-model  // 双向数据绑定
v-for  // 迭代
```

属性

```javascript
el // 用来选中
data // 用来定义数据
methods // 用来定义方法
filters // 用来定义过滤器
directives // 用来定义私有指令
component // 用来定义组件
```

## 事件修饰符
```javascript
.stop // 阻止事件冒泡
.prevent // 阻止默认行为
.capture // 添加事件监听器使用事件捕获模式
.self // 只当是元素本事触发的时候执行，子元素不触发
.once // 事件只触发一次
```

## 使用class样式
```html
<!--数组-->
<h1 :class="['red','thin']">这是一个邪恶的H1</h1>
<!--数组中使用三目运算符-->
<h1 :class="['red','thin',isactive?'active':'']"></h1>
<!--数组中使用嵌套对象-->
<h1 :class="['red','thin',{'active':isactive}]"></h1>
<!--直接使用对象-->
<h1 :class="['red','thin',{'active':isactive}]"></h1>
```

## 生命周期
```javascript
beforeCreate()
created()

beforeMount()
mounted()

beforeUpdate()
updated()

beforeDestroy()
destroy()
```

## v-resource
https://github.com/pagekit/vue-resource

## Vue提供的标签
?    component template transition transitionGroup



## Vue路由安装

```shell
npm install vue-router # 安装路由器
## 再main.js文件中导入配置即可全局使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```

## Vuex

+ 它是专门为Vue开发的状态管理模式，用来管理所有组件状态

  



## 简单Store模式



# React

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

## Hooks

1. useState
2. useEffect
3. useLayoutEffect
4. useMemo
5. useCallback
6. useRef
7. useContext
8. useReducer

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

# 学习笔记

+ 拿到一个面试题，你的地时间看到的是什么 -> 考点
+ 又如何看待网上搜索到的永远看不完的题海 -> 不变应万变
+ 又如何看待接下来遇到的面试题？ ->题目到知识再到题目

题目考察的知识点

1. js中使用的typeof能得到什么类型？ 考点：JS变量类型
2. 何时使用`===`何时使用`==`？ 考点：强制类型转换
3. window.onload和DOMContentLoaded的区别？ 考点：浏览器渲染过程
4. 用JS创建10个<a>标签，点击的时候弹出对应的序号。 考点：作用域
5. 简述如何实现一个模块加载器，实现类似require.js的基本功能。 考点：JS模块化
6. 实现数组的随机排序。 考点：JS基础算法

```javascript
// <1>、JS中使用typeof能得到哪些类型
// + string number undefined boolean object function
// <2>、何时使用===何时使用==
// <3>、JS中有哪些内置函数
// + Object Array Boolean Number String Function Date RegExp Error
// <4>、JS变量按照存储方式分为哪些类型，并描述其特点
// + 值类型 引用类型
// <5>、如何理解JSON
// + 数据格式和JS对象
// <6>、如何准确判断一个变量是数组类型
// + 使用instanceof eg: ([]) instanceof Array // 因为比较的对象是数组类型所以会返回一个true
// <7>、如何写一个原型链继承的例子
// + Dog.prototype = new Animal()
// <8>、如何描述一个对象的过程
// + 创建一个新对象=》this指向这个对象=》执行对象操作this=>默认返回this
// <9>、zepto（或其它框架源码如何使用原型链）
// + 阅读源码是提高技能的方式
// + 但是不能“埋头苦读”有技巧在其中（搜索源码阅读技巧）
// + 慕课网搜索"zepto设计源码分析"
// <10>、说一下对变量提升的理解
// + 变量和函数的定义会放到代码的最前面
// <11>、说明一下this几种不同的使用场景
// +作为构造函数、对象属性、普通函数执行 call apply bind
// <12>、创建10个<a>标签，点击的时候弹出对应的数字
// + 定义一个定义立即执行的函数
// <13>、如何理解作用域
// + 自由变量、作用域链、闭包的两个使用场景
// <14>、实际中闭包的应用
function aaa(id){
    var kk = []
    return function(id){
        if(kk.indexOf(id)>=0){
            return false
        } else {
            kk.push(id)
            return true
        }
    }
}
// <15>、同步异步的区别是什么？分别举一个同步和异步的例子
// <16>、一个关于setTimeout的笔试题
// <17>、前端使用异步的场景有哪些
// + 定时任务（setTimeout、setInterval）
// + 网络请求（ajax、动态<img>加载）
// + 事件绑定
// <18>、获取2017-06-10格式的日期
// <19>、获取随机数，要求是长度一致的字符串格式
// + 获取随机数Math.random()
// <20>、写一个能遍历对象和数组的通用的forEach函数
// + 数组API forEach、every、some、sort、map、filter
// + for(e in object) {  }
// <21>、全面考虑，JS内置的全局函数和对象有哪些？
// + Object String Boolean Array Math JSON
// + window document
// + navigator.userAgent
// <22>、DOM是哪种基本的数据结构？ 树
// <23>、DOM操作的常用API有哪些？5-7
// + 获取DOM结点，以及节点的property和Attribute
// + 获取父节点，获取子节点
// + 新增节点，删除节点
// <24>、DOM节点Attribute和property有何区别？
// + property只是对JS对象的属性的修改
// + Attribute是对html标签属性的修改
// <25>、编写一个通用的事件监听函数
function bindEvent(ele, type, selector, fn) {
    if(fn == null) {
        fn = selector
        selector = null
    }
    ele.addEventListener(type, function (e) {
        var target
        if (selector) {
           target = e.target
           if(target.matches(selector)) {
               fn.call(target, e)
           }
        } else {
            fn(e)
        }
    })
}
// <26>、描述事件冒泡流程
// <27>、对于一个无限下拉加载图片的页面，如何给每一个图片绑定事件
// <28>、手动编写一个Ajax
var xhr = new XMLHttpRequest()
xhr.open("GET", "/api" , false)
xhr.onreadystatechange = function () {
    if(xhr.readyStatus == 4) {// readtStatus,0未调用send()、1(载入,正在发送)、2(载入完成，已收到)、3(交互、解析)、4(完成)
        if(xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.send(null)
// <29>、跨域的几种方式
// + 后端配置()
// + JSONP(url/api.js,返回内容callback({x:100,y:200}))
// <30>、请描述一下cookie,sessionStorage和localStorage的区别？
// + cookie存储空间只有4k，而后二者有5M
// + cookie在每次HTTP请求中都有携带，而后二者只存在本地
// + localStorage只要不清除就会留在
/* 页面加载的过程 */
// <31>、从输入url得到html的详细过程
// + 浏览器根据URL从域名服务器获取IP地址
// + 使用IP向服务器发送请求
// + 服务器收到请求并且处理
// + 浏览器解析请求
// <32>、window.load和DOMContentLoaded
// + window.load只有在图片、视频等素材加载完才会执行；后者在DOM渲染完之后就会执行。
/* 性能优化 */

/* 安全 */
```

## 性能优化

+ 原则

  1. 多用内存、缓存或者其它方法

  2. 减少CPU、减少网络请求

+ 如何入手？

  1. 静态资源合并压缩
  2. 静态资源缓存
  3. 使用CDN使资源加载更快
  4. SSR后端渲染，数据直接存入到HTML（JSP、ASP）

+ 渲染优化

  1. CSS放最前面、JS放最后
  2. 懒加载
  3. 减少DOM查询，对DOM查询做缓存
  4. 减少DOM操作多个操作合并尽量一起执行
  5. 事件节流（减少不必要事件的触发称之为事件节流）
  6. 尽早执行操作

## 安全

+ XSS攻击：博客中

+ <script>脚本，用户访问就将博客的cookie发送的攻击者服务器

  转意`<`为`&gt`
  
+ XSRF攻击：网站登陆下，用户打开邮件链接，邮件图片中有支付链接；

  验证等 

## 面试技巧

突出项目经历、和解决方案

博客放在简历

开源项目放在简历中

能力、经历不要造假

+ navigator

```
navigator.userAgent
```

+ location

```javascript
// https://www.baidu.com/s?ie=utf-8#id=100
location.href // 拿到全部链接
location.protocol // https 拿到协议
location.host // 拿到域 www.baidu.com
location.pathname // 拿到路径名称 /s
location.search  // ?ie=urf-8
location.hash  // #id=100
```

​	

## 学习技巧总结 (๑•̀ㅂ•́)و✧ 

1. 利用碎片时间、规划成片时间；

2. 看视频、资料的时候找感兴趣的、不会的；
3. 多寻求社区的帮助，多总结，帮助他人总结。三人行必有我师；
4. 入门级学习找一些视频网站、临摹代码。
5. 选择方向，学习算法，加入开源项目，多听听大佬讲座。



# 常用技能

### 代码运行时间检测

>  使用`console.time(label)`和 `console.timeEnd(label)`检查程序运行时间

### 数组API 

```javascript
// forEach、every、some、sort、map、filter
let arr = [1,2,5,4,3];
let a = ['b','a','d','c','e'];
arr.forEach((item,index) => {console.log(item,index)});   // 遍历数组
arr.every((item, index) =>{if(item%2==1){return true}});  // 满足条件返回false
arr.some((item, index) =>{if(item%2==1){return true}});   // 满足条件返回true
a.sort();                                                 // 排序
arr.sort((a,b) => { return a - b });                      // 升序，对原数组进行修改
arr.map((item,index)=>{return item*2});                   // 数组乘二，返回新的数组
arr.filter(((item,index)=>{return item%2==1}));           // 过滤返回true的留下，返回新的数组
arr.concat([1,2]);         // 拼接数组,可以连续拼接多个数组。返回一个新的数组
arr.slice(1,3);            // 截取数组[2,2] 
arr.join("");              // 拼接数组成字符串，默认逗号分割，参数用来指定拼接字符串的分割
arr.shift();               // 删除数组第一个，并返回
arr.unshift();             // 添加到数组第一个
arr.push();                // 添加到第最后一个
arr.pop();                 // 删除第一个并返回
arr.splice()               // 往数组之中添加
arr.reverse();             // 翻转数组
arr.toString();            // 数组转化为字符串，感觉不太有用诶w(ﾟДﾟ)w，还不如用join
```

### Object API

```javascript
obj.hasOwnProperty(obj.a)                // 判断属性是否属于改对象
Object.assign(target, source)            // 将source对象的属性复制到target对象中，并返回该对象 
Object.create(obj)                       // 创建一个新的对象，并使用传入的对象作为_proto_
Object.defineProperties(obj, {'property1': {
    value: true,
    writable: true
  }})                                    // 在对象上创建或者修改属性,可以修改多个
Object.defineProperty(obj, propertyName, props)
Object.entries(obj)                      // 将对象转化成数组，例如：{a:1,b:2}变成[['a',1],['b',2]] 
Object.freeze(obj)                       // 冻结对象，使得对象的属性变的不可修改，当属性为引用类型的时候，该属性中的值可以修改
Object.seal(obj)                         // 锁定对象，使得对象不可添加属性
```

### of in

```javascript
// of在foreach中遍历object时会报错，遍历数组时遍历数组的每一个项目
// in在foreach中遍历object时遍历每一个key，遍历数组时遍历每一个下标
1 in [1,2]  // 判断数组索引1的位置是否有值（值包括null、undefined），有则true
1 in {1:1,2:2}  // 同理
```

### apply call bind

```javascript
// 1、作用都是使方法中的this指向传入的db；
// 2、bind不是自执行，call、apply是自执行的；
// 3、call参数可以直接传入，使用逗号分隔；而apply需要放在数组中；bind前二者都可以；
obj.myFun.call(db,'成都','上海');　　　　 // 德玛 年龄 99  来自 成都去往上海
obj.myFun.apply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海  
obj.myFun.bind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
obj.myFun.bind(db,['成都','上海'])();　　 // 德玛 年龄 99  来自 成都, 上海去往 undefined
```

### DOM API

```javascript
classList // 获取标签对象列表 
dataset // 存放数据到标签
// 获取样式属性
document.defaultView.getComputedStyle(DOM, NULL)
```

# 前端工具的使用

## 制作自己的Cli

[参考资料](https://mp.weixin.qq.com/s/xXZpI7D92XBRRXUyGcW9PQ)

+ 安装生成脚手架的工具
> npm install -g  generator-generator yo
+ 使用yo生成脚手架
> yo generator
> 根据提示
> 操作，或者使用默认选项

## gitlab部署使用
+ 安装使用
+ HTTPS设置
+ 邮件通知
+ 路径端口映射

## jinkin

## docker搭建前端开发环境


# 前端未来学习的方向

+ 后端领域：与serverless结合提高平台效率（云计算最爱）
+ 跨端趋势：Electron桌面端（v8真香定律）
+ 新领域尝试：机器学习（语言特性，无缝转换）

## 项目开源计划

+ 开源前端项目（Vue + TS） 预计2021年1月
+ 助力UI组件库的开发iView -> 2021年6月之前
+ Nestjs管理后台项目 -> 2021年6月之前

## 需求分析原则

+ 涵盖DevOps全流程
+ 免费最好，有开源代码可以二次开发
+ 易上手、易配置、易拓展

## 学习能力的培养

+ 收藏不等于学会，分享 + 应用 = 技术内化
+ 时间管理 -> 放置在上午解决困难的问题 -> 求助
+ 社团 -> 思想的碰撞 -> 同道人的影响 ->自我思考

## 目前学习的中的重点

+ 底层原理依旧是重点（浏览器、事件循环）
+ 跨平台、跨段开发、工程自动化已成为了标配
+ 团队协同、Nodejs，全栈思维的培养

# 学习资料

[脚手架原理](https://mp.weixin.qq.com/s/xXZpI7D92XBRRXUyGcW9PQ)
[前端学习思维导图](https://what-is-fe.gitee.io/)
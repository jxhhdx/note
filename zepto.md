> 复制自 `https://www.kancloud.cn/wangfupeng/zepto-design-srouce/173680`

# 开始

## 本课程内容

如果你常用zepto，却没有试着深入zepto源码去看看它是如何实现的，你不好奇吗？跟随我，打开zepto的源码来分析一下，看看zepto是用何种方式做成了流行全世界的js库。

本课程内容主要有两个：

- 分析zepto的设计思想，并思考如何才能实现这种设计；
- 打开zepto源码，看它是如何实现的；

扩展内容：

- 作者标注的 zepto core模块的源码注视；

> 至于为何要解读源码和设计？我想既然来看该教程的朋友，应该都知道它的意义，这里不再唠叨。总之，**拜读经典框架的源码、学习设计思想，就等于站在巨人的肩膀上**。


\## 面向的用户

现说一下，该教程讲义准备的时间是2016年7月份。您看到该教程的时间可能会比这个时间晚很多，但是没关系，该教程讲解的内容应该会一直有效。原因有二：

- zepto至今早就稳定了，代码不会有很大的变化；
- 只要ES6没有完全流行开（尚需babel转义），js的语法是不会变的；

**因此，那些抱怨前端变化快的同学，您该转变一下观念了** ——我一直觉得前端快的只是一小部分，当然这是题外话。


\## 关于文档形式

> 视频教程该用文档还是用ppt？

- 产品化（文档 - 产品；ppt - 事件）
- 持续化（文档更易事后查阅）
- 结构化（使知识更加体系，不零散）


\## 最后

而另一半时间看源码肯定是看不完的，但是我们也没有必要看完，大家都挺忙的，咱们就好钢用在刀刃上。了解了关键的代码，剩下的完全可以自己来轻松看完——只要你想看。

# 设计

## 读源码前先看设计

我正式读过源码的经典框架有4个，我自己的感觉就是——**解读源码之后，真正留在自己脑子里面的，是这个框架的设计思想**。当跟我看完zepto-core的源码之后，你应该会有这种体会。


\## 诡异的数组 那么接下来，先通过最简单的一个例子看一眼zepto的设计。先来一个很简单的html页面，``中的代码如下：

运行页面，然后在chrome的控制台中输入代码做测试。

```js
var $p = $('p');  // $p 是数组
var $span = $('span');  // $span 是数组
```

以上代码中，`$p`和`$span`看起来都是数组，这没有问题。但是我们通过API知道，`$p.addClass`是一个函数，而一般的数组没有`addClass`这个函数。

如果都是一样的数组，那么`$p.addClass`是哪里来的呢？显然`$p`不是一个常规的数组。其实我们还有其他方法可以证明

```js
var arr = [1,2,3];
var $p = $('p');

// 对比1
arr.__proto__.constructor === Array;  // true
$p.__proto__.constructor === Array;  // false

// 对比2
arr instanceof Array;  // true
$p instanceof Array;  // false
```

种种迹象表明，`$p`是一个看似数组，而非数组的东西。像《聊斋》里的画皮，是否很诡异。。。


\## 先扒一层皮

```js
var arr = [1,2,3];
console.log(arr.__proto__);  // 输入一个对象
```

如上代码，`arr.__proto__`输出了一个对象，对象里面包含了我们常用的操作数组的函数，例如`concat`,`push`,`map`等，**先不要管这个`__proto__`是什么意思**。就是因为这个`__proto__`有了这些函数，`arr`才能使用。

![img](https://box.kancloud.cn/2016-07-04_577a764b28657.png)

js语法非常灵活（号称最大的底线就是无底线），对象是可以随便赋值的，那么我就可以将`__proto__`重新赋值，让数组具有其他函数的功能啊，例如加一个`addClass`函数。

```js
var arr = [1,2,3];
arr.__proto__ = {
    addClass: function () {
        console.log(123);
    }
};
arr.addClass();   // 123
```

注意，经过这一步，`arr.concat`等其他功能就没有，此时`arr`就只有`addClass`这一个函数相依为命了。

![img](https://box.kancloud.cn/2016-07-04_577a764cbc605.png)

但是无论如何，此时我们再去拿`arr`来做第一次的那几个验证，得到的结果就和之前的`$p`一样了，即`arr`此时也称了一个不是数组的数组。

而zepto也就是这么干的。

## js原型链基础

### javascript 三座大山

这个标题其实我自己总结的，目前网络上没有相关的说法。意思就是javascript中比较重要难懂的三点知识。熟练掌握了这三点，你的javascript的基本功才算是过关。否则，你去BAT这种公司去面试前端，估计是过不了关。

- **原型和原型链**
- **上下文环境和作用域**
- **单线程和异步**

以上这『三座大山』我希望能找机会跟大家单独分享，此处只讲第一个的一部分，即讲到你能看懂后面zepto的设计，就够了。


\## `Array.prototype`

```js
var fn = function() {}
console.log( fn.prototype );
```

这里打印出来的`fn.prototype`是一个对象，只有一个`constructor`属性，指向该函数自身，即`fn.prototype.constructor === fn`。

![img](https://box.kancloud.cn/2016-07-04_577a764cd4521.png)

以上是自定义的函数，数组构造函数`Array`也是一个函数，只不过是浏览器内置的函数，它也得符合以上那句话。

```js
console.log( typeof Array );   // 'function'
console.log( Array.prototype );
```

这里打印出来的`Array.prototype`也是一个对象，也有一个`constructor`属性，指向该函数自身。只不过还内置了其他的属性——废话，内置的对象毛用没有还内置个卵劲啊。

![img](https://box.kancloud.cn/2016-07-04_577a764d259d6.png)


\## `[].__proto__`

- `prototype` （显示）原型
- `__proto__` 隐式原型

```js
var arr = [];  // 等价于 var arr = new Array()
arr.__proto__ === Array.prototype;  // true 
```

![img](https://box.kancloud.cn/2016-07-04_577a764d3a167.png)

然后，再记住一句话——**当你想要使用一个对象（或者一个数组）的某个功能时：如果该对象本身具有这个功能，则直接使用；如果该对象本身没有这个功能，则去`__proto__`中找**

```js
var obj = {
    fn1: function () {
        console.log('fn1');
    }
};
obj.fn1();  // 'fn1'
obj.toString();  // '[object Object]'  （在 obj.__proto__ 中找到）
```

数组也一样

```js
var arr = [];
arr.push(1);   // 在 arr.__proto__ 中找到了 push  方法
```

这就是为何数组会有`concat`、`push`等方法，顺藤摸瓜最终摸到了`Array.prototype`中来了。

因此，下列代码是成立的

```js
[].concat === Array.prototype.concat;
[].push === Array.prototype.push;
[].map === Array.prototype.map;
```


\## `__proto__`是可修改的

![img](https://box.kancloud.cn/2016-07-04_577a764d558af.png)

修改`__proto__`的例子。修改了之后，`arr`不仅有内置的`concat`、`push`等功能，还多了一个`addClass`功能。

```js
var arr = [1,2,3];
arr.__proto__.addClass = function () {
    console.log(123);
}
arr.push(4);
arr.addClass();   // 123
```

完全重写 `__proto__` 的例子，上一节讲过。还是注意，重写`__proto__`之后，`arr`可就失去了`concat`、`push`等亲人了，只有一个`addClass`功能了。

```js
var arr = [1,2,3];
arr.__proto__ = {
    addClass: function () {
        console.log(123);
    }
};
arr.addClass();   // 123
```


总结

第一，上文中有三句话要记住并且理解；
第二，有了这些基础知识，再去扒zepto的皮就轻而易举了；
第三，关于js的原型和原型链的知识，真的还有很多话没有说； 

## zepto对象设计

### 回顾zepto对象

经过了上一节的知识补充之后，我们再回到先前zepto的那个例子。

```html
    <p id="p1">测试</p>
    <div>
        <span>test</span>
        <span>test</span>
        <span>test</span>
    </div>

    <script type="text/javascript" src="js/zepto-1.1.6.js"></script>
    <script type="text/javascript">
        var $p1 = $('#p1');
        console.log($p1);

        var $span = $('span');
        console.log($span);
    </script>
```

上面代码中，我们之前就了解到`$p`或者`$span`是一个数组，但是又扩展了其他功能（例如 `$p.addClass`），这里可以肯定的是，`$p.__proto__`肯定是被修改过的，而不仅仅是`Array.prototype`，否则不会有`addClass`功能。


\## 如何做到的

```js
var arr = [1,2,3];
arr.__proto__ = {
    addClass: function  () {
        console.log('this is addClass');
    },
    concat: Array.prototype.concat,
    push: Array.prototype.push
};

arr.push(4);
arr.addClass();
```

![img](https://box.kancloud.cn/2016-07-04_577a764d79a55.png)

*PS：其实源码在实现这个设计的时候，并不像上面代码那么简单，只不过原理是一样的。源码具体的实现方式，还得边解读边了解。*


\## 验证

```
var $p = $('p');

// 使用 constructor 验证
arr.__proto__.constructor === $p.__proto__.constructor; // true

// 使用 instanceof 验证
console.log( $p instanceof Array );  // false
console.log(arr instanceof Array );  // false
```


\## 总结

不过，你如果感觉看到这里就收获颇丰，那么我建议你继续跟着我往下看，你会收获更多更实用价值的东西！

## 附：zepto-core-1.1.6 源码注视

### 是否有必要讲解整个源码？

我个人觉得源码还得靠自己来看，但是自己直接看源码会有点晕头转向，因此本教程分析了整个代码的设计思想，这样再读起来就方便了。

不过如果大部分同学觉得有必要把源码再分析一遍，我可能会准备这样一份教程给大家分享。


\## 源码注视 以下是我读完了并写了注释了zepto core 模块的源码，如果您想继续阅读其他源码，可参阅。

```javascript

```

# 总结

## 目标

通过这一个不长不短的课程，你应该了解到以下内容。如果没有的话，那就是没有达到课程的目标。

- 产品化思考的意思
- 设计和源码的关系
- js原型的基础知识点，理解了`prototype`和`__proto__`
- 可以自己模拟一个zepto设计的代码


\## 接下来
+ 老想法：javascript三座大山
+ 新想法：如何理解MVVM，结合 vue.js 和 angular.js
<指令>
    v-cloak 
    v-text
    v-html // 用来说明定义的值为html格式
    "v-bind："缩写是"：" // 用来说明属性的中值为变量
    v-on： 缩写是"@"// 绑定事件
    v-model // 双向数据绑定
    v-for // 迭代
<指令/>

<属性>
    el // 用来选中
    data // 用来定义数据
    methods // 用来定义方法
    filters // 用来定义过滤器
    directives // 用来定义私有指令
    component // 用来定义组件
<属性/>

<事件修饰符>
    .stop // 阻止事件冒泡
    .prevent // 阻止默认行为
    .capture // 添加事件监听器使用事件捕获模式
    .self // 只当是元素本事触发的时候执行，子元素不触发
    .once // 事件只触发一次
<事件修饰符/>

<使用class样式>
    数组：<h1 :class="['red','thin']">这是一个邪恶的H1</h1>
    数组中使用三元运算符：<h1 :class="['red','thin',isactive?'active':'']"></h1>
    数组中使用嵌套对象：<h1 :class="['red','thin',{'active':isactive}]"></h1>
    直接使用对象：<h1 :class="['red','thin',{'active':isactive}]"></h1>
<使用class样式/>

<生命周期>
    beforeCreate()
    created()

    beforeMount()
    mounted()
   
    beforeUpdate()
    updated()

    beforeDestroy()
    destroy()
<生命周期/>

<v-resource>
https://github.com/pagekit/vue-resource
<v-resource>

<vue提供的标签>
    component template transition transitionGroup
</vue提供的标签>
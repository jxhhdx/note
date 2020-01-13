# python笔记



## 1.标准数据类型

- python有六种数据类型：分别是Number（数字）、String（字符串）、List（列表）、Tuple（元组）、Set（集合）、Dictionary（字典）。
- Number、String、Tuple不可变。List、Set、Dictionary可变。

### Number

- 有int、float、bool、complex(复数(1+4j))类型
- 类型测试type()、isinstance(a,int)
- 6 // 9 = 0 , 2 ** 3 = 2 x 2 x 2 = 8

### String

- print(r"le\n") ;r可以原样输出

 ![string索引图片](/public/image/python01.png) 

```python
str = "abcdef"
print(str[0:-1])  # 第一个及-1之前前
print(str[2:5])  # 第三个及五个之后
print(str[2:])  # 第三个及之后
print(str * 2)  # 输出两遍str
```

#### String运算符

```python
# 假设a="hello world"
in     # 'h' in a结果为True
not in # 类同上
print(r"\n")      # r/R原样输出如果没有如`\n`这个样的转义字符会生效
```

#### 字符串格式化

```python
print ("我叫 %s 今年 %d 岁!" % ('小明', 10))
# 我叫 小明 今年 10 岁!
```

| 符  号 | 描述                                 |
| :----- | :----------------------------------- |
| %c     | 格式化字符及其ASCII码                |
| %s     | 格式化字符串                         |
| %d     | 格式化整数                           |
| %u     | 格式化无符号整型                     |
| %o     | 格式化无符号八进制数                 |
| %x     | 格式化无符号十六进制数               |
| %X     | 格式化无符号十六进制数（大写）       |
| %f     | 格式化浮点数字，可指定小数点后的精度 |
| %e     | 用科学计数法格式化浮点数             |
| %E     | 作用同%e，用科学计数法格式化浮点数   |
| %g     | %f和%e的简写                         |
| %G     | %f 和 %E 的简写                      |
| %p     | 用十六进制数格式化变量的地址         |

辅助功能

| 符号  | 功能                                                         |
| :---- | :----------------------------------------------------------- |
| *     | 定义宽度或者小数点精度                                       |
| -     | 用做左对齐                                                   |
| +     | 在正数前面显示加号( + )                                      |
| <sp>  | 在正数前面显示空格                                           |
| #     | 在八进制数前面显示零('0')，在十六进制前面显示'0x'或者'0X'(取决于用的是'x'还是'X') |
| 0     | 显示的数字前面填充'0'而不是默认的空格                        |
| %     | '%%'输出一个单一的'%'                                        |
| (var) | 映射变量(字典参数)                                           |
| m.n.  | m 是显示的最小总宽度,n 是小数点后的位数(如果可用的话)        |

```python
para_str = """这是一个多行字符串的实例
多行字符串可以使用制表符
TAB ( \t )。
也可以使用换行符 [ \n ]。
"""
print (para_str)
"""
这是一个多行字符串的实例
多行字符串可以使用制表符
TAB (    )。
也可以使用换行符 [ 
 ]。
"""
```



### List

- List写在[]之间，元素用逗号隔开。List是可变的。List中的元素可以是不同的

- 如下图List三个参数代表的意义是从第一个到第二个索引之间间隔第三个位置的数。

  ![List三参数](/public/image/python02.png)  

- list[1,2,3,4,5] 使用list[-1::-1]会反着输出。


### Tuple

- 元组性质与List列表类似，就是tuple元素不可变。
-  tup1 = ('physics', 'chemistry', 1997, 2000) 

### Set

- set集合大括号`{}`或者`set()`函数创建集合，创建一个空集必须使用`set()`而不是`{}`,因为`{}`是用来创建一个空字典。

 > ```
 > parame = {value01,value02,...}
 > 或者
 > set(value)
 > ```

- set不会有重复，因为重复的东西都会被它去掉

```python
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
print(student)   # 输出集合，重复的元素被自动去掉 {'Rose', 'Jack', 'Tom', 'Jim', 'Mary'}
# 成员测试 out:Rose 在集合中
if 'Rose' in student :
    print('Rose 在集合中')
else :
    print('Rose 不在集合中')
 
# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')
print(a)         # {'b', 'a', 'c', 'r', 'd'}
print(a - b)     # a 和 b 的差集 {'b', 'd', 'r'}
print(a | b)     # a 和 b 的并集 {'l', 'r', 'a', 'c', 'z', 'm', 'b', 'd'}
print(a & b)     # a 和 b  {'a', 'c'}
print(a ^ b)     # a 和 b 中不同时存在的元素 {'l', 'r', 'z', 'm', 'b', 'd'}
```

### Dictionary

+ 字典类似于java中的Map集合，其存储形式和json的格式类似，可以使用key-value的形式访问。
+ dict['key'] = value`或`dict = { 'key' : 'value' , 'key1' : 'value1'}

- 常用的函数keys()、values()

  > dict_keys(['one',.....])
  >
  > dict_vlaues(['hello',....])

## 2.条件判断语句

```python
if bool1:
    statement_block_1
elif bool2:
    statement_block_2
else:
    statement_block_3
```

## 3.循环语句

```python
while bool1:  
   content0
else:  # while、for还可以带上else使用
   content00
for w in isList
   content1
for i in range(5)
   content2
```

## 4.函数

```python
def function(L=[])  # 可以在参数里面定义值
    return "hello";
```

## 5.迭代器和生成器

- 迭代器

```python
# 迭代器的两个方法 iter() next()
list = [1, 2, 3, 4]
it = iter(list)

next(it)  # 1
next(it)  # 2 
next(it)  # 3
next(it)  # 4 
```

- 生成器

## 6.异常

### try-except

![img](/public/image/python03.png) 

### try-except-else

![img](/public/image/python04.png) 

### try-except-else-finally

![img](/public/image/python05.png) 

### raise

```python
x = 10 
if x > 5:    
    raise Exception('x 不能大于 5。x 的值为:{}'.format(x)) 
```

### 自定义异常

```python
class MyError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)
   
```

## 7.输入输出

```python
for x in range(1, 11):
    print('{0:2d} {2:4d} {1:4d}'.format(x, x * x, x * x * x))  # {显示位置:占位空间}
    
print('{}或者{}'.format('帅','超帅'))  # 帅或者超帅
print('{1}或者{0}'.format('帅','超帅'))  # 超帅或者帅
print('{a2}或者{a1}'.format(a1='帅',a2='超帅'))  # 超帅或者帅

print('1'.zfill(2))  # 001 
print(repr('1').rjust(5))  #占五个空格,repr中的元素尽量向右挤
```

## 8.文件

>  https://www.runoob.com/python3/python3-file-methods.html 

## 9.面向对象编程

- `self`等价于`this`、`people`等价于`super`

>  https://www.runoob.com/python3/python3-class.html 

```python
class MyClass:
    """一个简单的类实例"""
    i = 12345
    def f(self):
        return 'hello world'
 
# 实例化类
x = MyClass()
 
# 访问类的属性和方法
print("MyClass 类的属性 i 为：", x.i)
print("MyClass 类的方法 f 输出为：", x.f())
```

###  构造方法

- 使用`__init__`来定义

```python
def __init___(self):
    self.data = []
```

### private 

- `__属性`等价于`private 属性`
- 可以用来修饰方法与属性

### 继承

- python继承是多继承的
- student类继承people(class student(people))

### 重写

```python
class Parent:        # 定义父类
   def myMethod(self):
      print ('调用父类方法')
 
class Child(Parent): # 定义子类
   def myMethod(self):
      print ('调用子类方法')
 
c = Child()          # 子类实例
c.myMethod()         # 子类调用重写方法
super(Child,c).myMethod() #用子类对象调用父类已被覆盖的方法
```

### 类的专有方法

```python
__init__ # 构造函数，在生成对象时调用
__del__ # 析构函数，释放对象时使用
__repr__ # 打印，转换
__setitem__ # 按照索引赋值
__getitem__ # 按照索引获取值
__len__ # 获得长度
__cmp__ # 比较运算
__call__ # 函数调用
__add__ # 加运算
__sub__ # 减运算
__mul__ # 乘运算
__truediv__ # 除运算
__mod__ # 求余运算
__pow__ # 乘方
```

## NumPy

- NumPy是Python的扩展类库，他能够支持大量的维度数组与矩阵运算，也能针对数组运算提供大量的数学函数库
- 他通常与SciPy和Matplotlib(绘图库)一起使用

### 安装

+ 见菜鸟教程

>  https://www.runoob.com/numpy/numpy-install.html 


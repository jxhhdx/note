# python笔记



## 标准数据类型

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

- 性质与List类似，就是tuple元素不可变。

### Set

- set大括号`{}`或者`set()`函数创建集合，创建一个空集必须使用`set()`而不是`{}`,因为`{}`是用来创建一个空字典。

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

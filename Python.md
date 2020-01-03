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

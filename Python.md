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

 ![string索引图片](\public\image\python01.png) 

```python
str = "abcdef"
print(str[0:-1])  # 第一个及-1之前前
print(str[2:5])  # 第三个及五个之后
print(str[2:])  # 第三个及之后
print(str * 2)  # 输出两遍str
```


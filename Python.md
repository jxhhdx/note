# python�ʼ�



## 1.��׼��������

- python�������������ͣ��ֱ���Number�����֣���String���ַ�������List���б���Tuple��Ԫ�飩��Set�����ϣ���Dictionary���ֵ䣩��
- Number��String��Tuple���ɱ䡣List��Set��Dictionary�ɱ䡣

### Number

- ��int��float��bool��complex(����(1+4j))����
- ���Ͳ���type()��isinstance(a,int)
- 6 // 9 = 0 , 2 ** 3 = 2 x 2 x 2 = 8

### String

- print(r"le\n") ;r����ԭ�����

 ![string����ͼƬ](/public/image/python01.png) 

```python
str = "abcdef"
print(str[0:-1])  # ��һ����-1֮ǰǰ
print(str[2:5])  # �����������֮��
print(str[2:])  # ��������֮��
print(str * 2)  # �������str
```

#### String�����

```python
# ����a="hello world"
in     # 'h' in a���ΪTrue
not in # ��ͬ��
print(r"\n")      # r/Rԭ��������û����`\n`�������ת���ַ�����Ч
```

#### �ַ�����ʽ��

```python
print ("�ҽ� %s ���� %d ��!" % ('С��', 10))
# �ҽ� С�� ���� 10 ��!
```

| ��  �� | ����                                 |
| :----- | :----------------------------------- |
| %c     | ��ʽ���ַ�����ASCII��                |
| %s     | ��ʽ���ַ���                         |
| %d     | ��ʽ������                           |
| %u     | ��ʽ���޷�������                     |
| %o     | ��ʽ���޷��Ű˽�����                 |
| %x     | ��ʽ���޷���ʮ��������               |
| %X     | ��ʽ���޷���ʮ������������д��       |
| %f     | ��ʽ���������֣���ָ��С�����ľ��� |
| %e     | �ÿ�ѧ��������ʽ��������             |
| %E     | ����ͬ%e���ÿ�ѧ��������ʽ��������   |
| %g     | %f��%e�ļ�д                         |
| %G     | %f �� %E �ļ�д                      |
| %p     | ��ʮ����������ʽ�������ĵ�ַ         |

��������

| ����  | ����                                                         |
| :---- | :----------------------------------------------------------- |
| *     | �����Ȼ���С���㾫��                                       |
| -     | ���������                                                   |
| +     | ������ǰ����ʾ�Ӻ�( + )                                      |
| <sp>  | ������ǰ����ʾ�ո�                                           |
| #     | �ڰ˽�����ǰ����ʾ��('0')����ʮ������ǰ����ʾ'0x'����'0X'(ȡ�����õ���'x'����'X') |
| 0     | ��ʾ������ǰ�����'0'������Ĭ�ϵĿո�                        |
| %     | '%%'���һ����һ��'%'                                        |
| (var) | ӳ�����(�ֵ����)                                           |
| m.n.  | m ����ʾ����С�ܿ��,n ��С������λ��(������õĻ�)        |

```python
para_str = """����һ�������ַ�����ʵ��
�����ַ�������ʹ���Ʊ��
TAB ( \t )��
Ҳ����ʹ�û��з� [ \n ]��
"""
print (para_str)
"""
����һ�������ַ�����ʵ��
�����ַ�������ʹ���Ʊ��
TAB (    )��
Ҳ����ʹ�û��з� [ 
 ]��
"""
```



### List

- Listд��[]֮�䣬Ԫ���ö��Ÿ�����List�ǿɱ�ġ�List�е�Ԫ�ؿ����ǲ�ͬ��

- ����ͼList������������������Ǵӵ�һ�����ڶ�������֮����������λ�õ�����

  ![List������](/public/image/python02.png)  

- list[1,2,3,4,5] ʹ��list[-1::-1]�ᷴ�������


### Tuple

- Ԫ��������List�б����ƣ�����tupleԪ�ز��ɱ䡣
-  tup1 = ('physics', 'chemistry', 1997, 2000) 

### Set

- set���ϴ�����`{}`����`set()`�����������ϣ�����һ���ռ�����ʹ��`set()`������`{}`,��Ϊ`{}`����������һ�����ֵ䡣

 > ```
 > parame = {value01,value02,...}
 > ����
 > set(value)
 > ```

- set�������ظ�����Ϊ�ظ��Ķ������ᱻ��ȥ��

```python
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
print(student)   # ������ϣ��ظ���Ԫ�ر��Զ�ȥ�� {'Rose', 'Jack', 'Tom', 'Jim', 'Mary'}
# ��Ա���� out:Rose �ڼ�����
if 'Rose' in student :
    print('Rose �ڼ�����')
else :
    print('Rose ���ڼ�����')
 
# set���Խ��м�������
a = set('abracadabra')
b = set('alacazam')
print(a)         # {'b', 'a', 'c', 'r', 'd'}
print(a - b)     # a �� b �Ĳ {'b', 'd', 'r'}
print(a | b)     # a �� b �Ĳ��� {'l', 'r', 'a', 'c', 'z', 'm', 'b', 'd'}
print(a & b)     # a �� b  {'a', 'c'}
print(a ^ b)     # a �� b �в�ͬʱ���ڵ�Ԫ�� {'l', 'r', 'z', 'm', 'b', 'd'}
```

### Dictionary

+ �ֵ�������java�е�Map���ϣ���洢��ʽ��json�ĸ�ʽ���ƣ�����ʹ��key-value����ʽ���ʡ�
+ dict['key'] = value`��`dict = { 'key' : 'value' , 'key1' : 'value1'}

- ���õĺ���keys()��values()

  > dict_keys(['one',.....])
  >
  > dict_vlaues(['hello',....])

## 2.�����ж����

```python
if bool1:
    statement_block_1
elif bool2:
    statement_block_2
else:
    statement_block_3
```

## 3.ѭ�����

```python
while bool1:  
   content0
else:  # while��for�����Դ���elseʹ��
   content00
for w in isList
   content1
for i in range(5)
   content2
```

## 4.����

```python
def function(L=[])  # �����ڲ������涨��ֵ
    return "hello";
```

## 5.��������������

- ������

```python
# ���������������� iter() next()
list = [1, 2, 3, 4]
it = iter(list)

next(it)  # 1
next(it)  # 2 
next(it)  # 3
next(it)  # 4 
```

- ������

## 6.�쳣

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
    raise Exception('x ���ܴ��� 5��x ��ֵΪ:{}'.format(x)) 
```

### �Զ����쳣

```python
class MyError(Exception):
    def __init__(self, value):
        self.value = value
    def __str__(self):
        return repr(self.value)
   
```

## 7.�������

```python
for x in range(1, 11):
    print('{0:2d} {2:4d} {1:4d}'.format(x, x * x, x * x * x))  # {��ʾλ��:ռλ�ռ�}
    
print('{}����{}'.format('˧','��˧'))  # ˧���߳�˧
print('{1}����{0}'.format('˧','��˧'))  # ��˧����˧
print('{a2}����{a1}'.format(a1='˧',a2='��˧'))  # ��˧����˧

print('1'.zfill(2))  # 001 
print(repr('1').rjust(5))  #ռ����ո�,repr�е�Ԫ�ؾ������Ҽ�
```

## 8.�ļ�

>  https://www.runoob.com/python3/python3-file-methods.html 

## 9.���������

- `self`�ȼ���`this`��`people`�ȼ���`super`

>  https://www.runoob.com/python3/python3-class.html 

```python
class MyClass:
    """һ���򵥵���ʵ��"""
    i = 12345
    def f(self):
        return 'hello world'
 
# ʵ������
x = MyClass()
 
# ����������Ժͷ���
print("MyClass ������� i Ϊ��", x.i)
print("MyClass ��ķ��� f ���Ϊ��", x.f())
```

###  ���췽��

- ʹ��`__init__`������

```python
def __init___(self):
    self.data = []
```

### private 

- `__����`�ȼ���`private ����`
- �����������η���������

### �̳�

- python�̳��Ƕ�̳е�
- student��̳�people(class student(people))

### ��д

```python
class Parent:        # ���常��
   def myMethod(self):
      print ('���ø��෽��')
 
class Child(Parent): # ��������
   def myMethod(self):
      print ('�������෽��')
 
c = Child()          # ����ʵ��
c.myMethod()         # ���������д����
super(Child,c).myMethod() #�����������ø����ѱ����ǵķ���
```

### ���ר�з���

```python
__init__ # ���캯���������ɶ���ʱ����
__del__ # �����������ͷŶ���ʱʹ��
__repr__ # ��ӡ��ת��
__setitem__ # ����������ֵ
__getitem__ # ����������ȡֵ
__len__ # ��ó���
__cmp__ # �Ƚ�����
__call__ # ��������
__add__ # ������
__sub__ # ������
__mul__ # ������
__truediv__ # ������
__mod__ # ��������
__pow__ # �˷�
```

## NumPy

- NumPy��Python����չ��⣬���ܹ�֧�ִ�����ά��������������㣬Ҳ��������������ṩ��������ѧ������
- ��ͨ����SciPy��Matplotlib(��ͼ��)һ��ʹ��

### ��װ

+ ������̳�

>  https://www.runoob.com/numpy/numpy-install.html 


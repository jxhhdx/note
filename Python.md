# python�ʼ�



## ��׼��������

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

### List

- Listд��[]֮�䣬Ԫ���ö��Ÿ�����List�ǿɱ�ġ�List�е�Ԫ�ؿ����ǲ�ͬ��

- ����ͼList������������������Ǵӵ�һ�����ڶ�������֮����������λ�õ�����

  ![List������](/public/image/python02.png)  

- list[1,2,3,4,5] ʹ��list[-1::-1]�ᷴ�������


### Tuple

- ������List���ƣ�����tupleԪ�ز��ɱ䡣

### Set

- set������`{}`����`set()`�����������ϣ�����һ���ռ�����ʹ��`set()`������`{}`,��Ϊ`{}`����������һ�����ֵ䡣

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

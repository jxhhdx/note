## ָ��
```javascript
v-cloak 
v-text
v-html  // ����˵�������ֵΪhtml��ʽ
"v-bind��"��д��"��"  // ����˵�����Ե���ֵΪ����
v-on //��д��"@"  // ���¼�
v-model  // ˫�����ݰ�
v-for  // ����
```

����

```javascript
el // ����ѡ��
data // ������������
methods // �������巽��
filters // �������������
directives // ��������˽��ָ��
component // �����������
```

## �¼����η�
```javascript
.stop // ��ֹ�¼�ð��
.prevent // ��ֹĬ����Ϊ
.capture // ����¼�������ʹ���¼�����ģʽ
.self // ֻ����Ԫ�ر��´�����ʱ��ִ�У���Ԫ�ز�����
.once // �¼�ֻ����һ��
```

## ʹ��class��ʽ
```html
<!--����-->
<h1 :class="['red','thin']">����һ��а���H1</h1>
<!--������ʹ����Ŀ�����-->
<h1 :class="['red','thin',isactive?'active':'']"></h1>
<!--������ʹ��Ƕ�׶���-->
<h1 :class="['red','thin',{'active':isactive}]"></h1>
<!--ֱ��ʹ�ö���-->
<h1 :class="['red','thin',{'active':isactive}]"></h1>
```

## ��������
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

## Vue�ṩ�ı�ǩ
?    component template transition transitionGroup
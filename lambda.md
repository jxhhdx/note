## 1、什么是Lambda表达式

### MCAD模式

- Model Code as Data，编码及数据，尽可能轻量级的将代码封装为数据。

## 2、Lambda表达式基础知识

### 函数式接口

- 函数式接口，只包含一个操作方法。
- Lambda表达式，只能操作一个方法
- Java中的Lambda表达式，核心就是函数式接口的实现。

### 变量捕获

- Lambda表达式中的局部变量是final。
- 在匿名内部类中全局变量、局部变量都是final。

### Lambda运行原理

- Lambda表达式在JVM底层解析成私有静态方法和匿名内部类类型。
- 通过实现接口的匿名内部类中接口方法调用静态实现方法，完成Lambda表达式的执行。

```java
public class App {
    public static void main (String[] args) {
        iHello ih = (message) ->System.out.println(message);
        ih.hello("lambda!");
        // new App$$Lambda$1().hello("lambda");
    }
    /*
    private static lambda$main$(java.lang.String message) {
        System.out.println(message);
    }
    */
    /*
    final class App$$Lambda$1 implements iHello {
        private App$$Lambda$1(){}
        public void hello(java.lang.String msg){
            App.lambda$main$0(msg);
        }
    }
     */
}
interface iHello {
    void hello(String mag);
}
    
```



## 3、Lambda表达式高级扩展

### 方法引用

### StreamAPI及其原理

- 

### 集合元素操作

### 实际需求重构

### 线程安全与性能
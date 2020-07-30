# Java

### String、StringBuilder、StringBuffer

+ String、StringBuffer是线程安全的，StringBuilder是线程不安全的。

#### 一、替换和删除（replace）

```java
String str = "Hello";str = str.replace("target", "replacement");


```

#### 二、拆分（split）、合并（join）

```java
String s ="boo:and:foo";
// 我们对 s 进行了各种拆分，演示的代码和结果是：
s.split(":")    // 结果:["boo","and","foo"]
s.split(":",2)  // 结果:["boo","and:foo"]
s.split(":",5)  // 结果:["boo","and","foo"]
s.split(":",-2) // 结果:["boo","and","foo"]
s.split("o")    // 结果:["b","",":and:f"]
s.split("o",2)  // 结果:["b","o:and:foo"]

// join的使用，结果为：123,456
String join = str.join(",", "123","456");
```

### stream

```java
Map<Integer, Integer> collect = cartList.stream()
    .filter(e -> e.getProductSelected().equals(false)) //保留List中productSelected属性中为false的
    .map(e -> {
        e.setQuantity(0);
        return e;
    }) // 对List中的对象的进行处理，在这里将两个属性置为0
    .sorted(Comparator.comparing(Cart::getProductId).reversed())  // 根据productId降序排序(Map无效)
    .collect(Collectors.toMap(Cart::getProductId, Cart::getQuantity));// 转为List
```

### 正反序列化

+ 使用gson、fastson、jackson进行序列化

```java

// Gson正反
People people = gson.fromJson(DATA, People.class);
String json = gson.toJson(people1);
// Jackson正反
ObjectMapper mapper = new ObjectMapper();
String s = mapper.writeValueAsString(people1);
People people = mapper.readValue(DATA2, People.class);
// fastjson正反
String jsonString = JSON.toJSONString(people1);
People parseObject = JSON.parseObject(DATA, People.class);
```

### 反射





### MD5摘要算法

> ```java
> String s = DigestUtils.md5DigestAsHex("hello".getBytes(StandardCharsets.UTF_8));
> ```

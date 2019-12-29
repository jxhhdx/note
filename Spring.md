# Spring
Spring是一个开源框架，可以简化Java程序的开发。ioc解决对象的创建，和方法的调用。aop解决方法的加强。jdbc template解决的是jdbc使用复杂的问题，实际上就是jdbc的封装使用事务管理解决的是提交事务，撤销事物的问题

## 使用的jar包
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-beans</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-expression</artifactId>
    <version>4.2.4.RELEASE</version>
</dependency>
<dependency>
    <groupId>commons-logging</groupId>
    <artifactId>commons-logging</artifactId>
    <version>1.2</version>
</dependency>
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

# Spring AOP

- 解决的是方法的增强的问题,spring_aop底层实现在有实现接口的情况下使用jdk动态代理，没有接口的情况下使用cglib生成代理

## 通知类型

- 前置通知：MethodBeforeAdvice
- 后置通知：AfterReturningAdvice
- 环绕通知：MethodInterceptor
- 异常通知：ThrowsAdvice

## 切面类型

- Advisor：一般切面，拦截所有方法；

- PointcutAdvisor：有切点的切面，可以指定拦截的方法

## 未知

```
<ps>
	<切面>
		class="org.springframework.aop.support.RegexpMethodPointcutAdvisor"
		patterns："正则表达式"
		advice：通知对象
	<切面/>
	
	<代理类advisor>
		class="org.springframework.aop.framework.ProxyFactoryBean"
		target：代理的目标对象
		proxyInterfaces：代理实现的接口<list><value></value></list>
		interceptorNames：需要织入的Advice
		singleton：代理是否为单例，默认为单例
		optmize：设置为true是，强制使用CGLib
	<代理类/>
	
	<自动代理PointcutAdvisor>
		class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator"
		beanNames：配置正则表达式匹配姓名
		interceptorNames：配置要增强的对象
		配置切面后杰克执行class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator"
	<自动代理/>
<ps/>

<AspectJ>
	<注解方式>
		@Before 前置通知
		@AfterReturning 后置通知
		@Around 环绕通知
		@AfterThrowing 异常抛出通知
		@Pointcut(value="execution(* com.imooc.aspectJ.demo1.ProductDao.save(..))")
    		private void myPointcut1(){}

	</注解方式>

	<XML方式>
	<aop:config>
        	<aop:pointcut id="pointcut5" expression="execution(* com.imooc.aspectJ.demo2.CustomerDao.findAll(..))"/>
        	<aop:aspect ref="myAspectXml">
            		<aop:before method="before" pointcut-ref="pointcut1"/>
            		<aop:after-returning method="afterReturing" pointcut-ref="pointcut2" returning="result"/>
            		<aop:around method="around" pointcut-ref="pointcut3"/>
            		<aop:after-throwing method="afterThrowing" pointcut-ref="pointcut4" throwing="e"/>
            		<aop:after method="after" pointcut-ref="pointcut5"/>
        	</aop:aspect>
    	</aop:config>
	<XML方式/>
<AspectJ/>

 <dependency>
      <groupId>aopalliance</groupId>
      <artifactId>aopalliance</artifactId>
      <version>1.0</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aop</artifactId>
      <version>${spring.version}</version>
    </dependency>

    <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>1.8.9</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aspects</artifactId>
      <version>${spring.version}</version>
    </dependency>
```

# Spring IOC

- 控制反转，依赖注入。

```java
public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("Beans.xml");
        ApplicationContext context = 
            new FileSystemXmlApplicationContext("C:/Users/ZARA/workspace/HelloSpring/src/Beans.xml");
        HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
        obj.getMessage();
    }
}
```

## 作用域

- singleton(单例，default)、prototype(每次调用相当于new)、request(每次HTTP请求时创建不同的Bean)、session(每个用户请求创建一个Bean)和global session

## 生命周期

```xml
<bean id="helloWorld" class="com.tutorialspoint.HelloWorld"
      init-method="init" destroy-method="destroy">
    <property name="message" value="Hello World!"/>
</bean>
<!-- 分别定义销毁和初始化时候执行的方法 -->
```

## 后续处理

```xml
<!-- 继承接口BeanPostProcessor实现其方法后可以在init程序前后处理； -->
<!-- 需要注册 -->
<bean class="com.tutorialspoint.InitHelloWorld">
```

## 继承

```
parent=""
```

## 构造函数的注入

```xml
<!-- bean定义文本编辑器 -->
<bean id="textEditor" class="com.tutorialspoint.TextEditor">
    <constructor-arg ref="spellChecker"/>
</bean>
<!--拼写检查器bean的定义 -->
<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
</bean>
```

## 函数的依赖注入

```xml
<bean id="textEditor" class="com.tutorialspoint.TextEditor">
    <property name="spellChecker" ref="spellChecker"/>
</bean>

<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
</bean>
<!--关于p-namespace实现配置-->
```

## Spring注入内部Beans

## 集合的注入
- 数组集合、List集合、Set集合、map集合的注入	

## Spring Beans自动装配
```xml
autowire="byName"
autowire="byType"
autowire="constructor"
```

## 注解配置
```java
// 在xml中注册对象
@Component
@Repository  // 对Dao进行注解
@Service  // 对Service进行注解
@Controller  // 用于对Controller进行注解

@Autowrited  // 自动注入对象@Resource
@Qualifier  // 注入指定的Bean名称

@PostConstruct  // 注册初始化
@PreDestory  // 注册销毁
@Scope  // 注解指定Bean的作用范围
```
## xml文件示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
    <bean id="helloWorld" class="com.tutorialspoint.HelloWorld">
        <property name="message" value="Hello World!"/>
    </bean>
</beans>
```


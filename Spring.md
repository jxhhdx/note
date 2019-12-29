# Spring
Spring��һ����Դ��ܣ����Լ�Java����Ŀ�����ioc�������Ĵ������ͷ����ĵ��á�aop��������ļ�ǿ��jdbc template�������jdbcʹ�ø��ӵ����⣬ʵ���Ͼ���jdbc�ķ�װʹ����������������ύ���񣬳������������

## ʹ�õ�jar��
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

- ������Ƿ�������ǿ������,spring_aop�ײ�ʵ������ʵ�ֽӿڵ������ʹ��jdk��̬����û�нӿڵ������ʹ��cglib���ɴ���

## ֪ͨ����

- ǰ��֪ͨ��MethodBeforeAdvice
- ����֪ͨ��AfterReturningAdvice
- ����֪ͨ��MethodInterceptor
- �쳣֪ͨ��ThrowsAdvice

## ��������

- Advisor��һ�����棬�������з�����

- PointcutAdvisor�����е�����棬����ָ�����صķ���

## δ֪

```
<ps>
	<����>
		class="org.springframework.aop.support.RegexpMethodPointcutAdvisor"
		patterns��"������ʽ"
		advice��֪ͨ����
	<����/>
	
	<������advisor>
		class="org.springframework.aop.framework.ProxyFactoryBean"
		target�������Ŀ�����
		proxyInterfaces������ʵ�ֵĽӿ�<list><value></value></list>
		interceptorNames����Ҫ֯���Advice
		singleton�������Ƿ�Ϊ������Ĭ��Ϊ����
		optmize������Ϊtrue�ǣ�ǿ��ʹ��CGLib
	<������/>
	
	<�Զ�����PointcutAdvisor>
		class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator"
		beanNames������������ʽƥ������
		interceptorNames������Ҫ��ǿ�Ķ���
		���������ܿ�ִ��class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator"
	<�Զ�����/>
<ps/>

<AspectJ>
	<ע�ⷽʽ>
		@Before ǰ��֪ͨ
		@AfterReturning ����֪ͨ
		@Around ����֪ͨ
		@AfterThrowing �쳣�׳�֪ͨ
		@Pointcut(value="execution(* com.imooc.aspectJ.demo1.ProductDao.save(..))")
    		private void myPointcut1(){}

	</ע�ⷽʽ>

	<XML��ʽ>
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
	<XML��ʽ/>
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

- ���Ʒ�ת������ע�롣

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

## ������

- singleton(������default)��prototype(ÿ�ε����൱��new)��request(ÿ��HTTP����ʱ������ͬ��Bean)��session(ÿ���û����󴴽�һ��Bean)��global session

## ��������

```xml
<bean id="helloWorld" class="com.tutorialspoint.HelloWorld"
      init-method="init" destroy-method="destroy">
    <property name="message" value="Hello World!"/>
</bean>
<!-- �ֱ������ٺͳ�ʼ��ʱ��ִ�еķ��� -->
```

## ��������

```xml
<!-- �̳нӿ�BeanPostProcessorʵ���䷽���������init����ǰ���� -->
<!-- ��Ҫע�� -->
<bean class="com.tutorialspoint.InitHelloWorld">
```

## �̳�

```
parent=""
```

## ���캯����ע��

```xml
<!-- bean�����ı��༭�� -->
<bean id="textEditor" class="com.tutorialspoint.TextEditor">
    <constructor-arg ref="spellChecker"/>
</bean>
<!--ƴд�����bean�Ķ��� -->
<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
</bean>
```

## ����������ע��

```xml
<bean id="textEditor" class="com.tutorialspoint.TextEditor">
    <property name="spellChecker" ref="spellChecker"/>
</bean>

<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
</bean>
<!--����p-namespaceʵ������-->
```

## Springע���ڲ�Beans

## ���ϵ�ע��
- ���鼯�ϡ�List���ϡ�Set���ϡ�map���ϵ�ע��	

## Spring Beans�Զ�װ��
```xml
autowire="byName"
autowire="byType"
autowire="constructor"
```

## ע������
```java
// ��xml��ע�����
@Component
@Repository  // ��Dao����ע��
@Service  // ��Service����ע��
@Controller  // ���ڶ�Controller����ע��

@Autowrited  // �Զ�ע�����@Resource
@Qualifier  // ע��ָ����Bean����

@PostConstruct  // ע���ʼ��
@PreDestory  // ע������
@Scope  // ע��ָ��Bean�����÷�Χ
```
## xml�ļ�ʾ��

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


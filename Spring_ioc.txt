<ioc>
	<简介>控制反转依赖注入<简介/>
	

	<spring>
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
	<spring/>
	
	<作用域>
		singleton(单例，default)、prototype(每次调用相当于new)、request(每次HTTP请求时创建不同的Bean)、session(每个用户请求创建一个Bean)和global session
	<作用域/>
	
	<生命周期>
		<bean id="helloWorld" class="com.tutorialspoint.HelloWorld"
       init-method="init" destroy-method="destroy">
       			<property name="message" value="Hello World!"/>
   		</bean>
		分别定义销毁和初始化时候执行的方法
	<生命周期/>
	
	<后置处理>
		继承接口BeanPostProcessor实现其方法后可以在init程序前后处理；
		需要注册<bean class="com.tutorialspoint.InitHelloWorld">
	<后置处理/>

	<继承>parent=""<继承/>

	<构造函数的注入>
		<!-- bean定义文本编辑器 -->
   		<bean id="textEditor" class="com.tutorialspoint.TextEditor">
      			<constructor-arg ref="spellChecker"/>
   		</bean>

   		<!--拼写检查器bean的定义 -->
   		<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
   		</bean>
	<构造函数的注入/>

	<函数的依赖注入>
		<bean id="textEditor" class="com.tutorialspoint.TextEditor">
      			<property name="spellChecker" ref="spellChecker"/>
   		</bean>

   		<bean id="spellChecker" class="com.tutorialspoint.SpellChecker">
   		</bean>
		关于p-namespace实现配置
	<函数的依赖注入/>

	<Spring注入内部Beans><Spring注入内部Beans/>

	<集合的注入>数组集合、List集合、Set集合、map集合的注入<集合的注入/>

	<Spring Beans自动装配>
		autowire="byName"
		autowire="byType"
		autowire="constructor"
	<Spring Beans自动装配/>

	<注解配置>
		@Required 写在set方法上将bean中的属性注入其中
		@Autowired 写在set方法上将自动注入对象 写在声明的对象是代替set方法
		@Resource(name = "spellChecker")set注入选定的对象
	<注解配置/>
<ioc/>

<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

   <bean id="helloWorld" class="com.tutorialspoint.HelloWorld">
       <property name="message" value="Hello World!"/>
   </bean>

</beans>


<aop>
	<简介>解决的是方法的增强的问题,spring_aop底层实现在有实现接口的情况下使用jdk动态代理，没有接口的情况下使用cglib生成代理<简介/>

	<接口>
		前置通知：MethodBeforeAdvice
		后置通知：AfterReturningAdvice
		环绕通知：MethodInterceptor
		异常通知：ThrowsAdvice
	<接口/>
	
	<切面类型>
		<Advisor>
			一般切面，拦截所有方法；
		<Advisor/>

		<PointcutAdvisor>
			有切点的切面，可以指定拦截的方法
		<PointcutAdvisor/>
	<切面类型/>

	
<aop/>
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
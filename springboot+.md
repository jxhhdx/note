<总结与理解>

<总结与理解>
<springboot>
	<使用过程>
		1>使用idea自动创建springboot的项目；
		2>在application.properties配置文件里面修改默认操作；
	<使用过程>
	
	<在application。properties里面进行默认配置>

		server.port=80//配置服务器端口不用写端口号了
		server.servlet.context-path=/myspringboot//设置应用上下文(url/myspringboot/*)
		logging.file=e:/mysqlspring.log.//日志的支持(把日志输入到该路径，控制台同步)
		logging.leve.root=error//提高日志输出级别（dubug->info-> warn-> error-> fatal）
		debug=true//调试模式，方便我们进行程序的跟踪，会自动设置日志级别为debug
		spring.datasource.driver-class-name=com.mysql.jdbc.Driver
		spring.datasource.url=jdbc:mysql://localhost:3306/test
		spring.datasource.username=root
		spring.datasource.password=root
	<在application。properties里面进行默认配置>
	<yml：更好的配置方式>
		文件名（代替application。properties）：application.yml
		debug.ture
		logging: level: root:info file:e:/myspringboot.log
		spring
			datasource:
				driver-class-name:
				url:
				username:
				password:
		mall:
			config:
				name:爱美商城
				description:这是一家化妆品特卖商城
				hot-sales:20
				show-advert:true
		//读取（注入）	
		@Value("${mall.config.name}")
		private String name;
		@Value("${mall.config.decription}")
		private String description;
		@Value("${mall.config.hot-sales}")
		private Integer hotSales;
		@Value("${mall.config.show-advert}")
		private Boolean  showAdvert;
		
	<yml>
	<环境不同，不同配置>
		主配置文件设置：
		spring : 
			profiles:
				active:[dev|prd//这里选择配置文件]
		创建两个配置文件application-prd.yml|application-dev.yml
		关闭dubug，修改日志输出位置，数据库配置修改，端口修改
	<不同环境，不同配置>

	<打包与运行>
		点击上方加号选择maven，在command line：中输入package，最好改名为package，应用后退出后点击即可打包；
	<打包与运行>

<springboot>

<Servlet组件 Servlet、Filter、Listener>

	<实现Servlet><实现Servlet>		

<Servlet组件>
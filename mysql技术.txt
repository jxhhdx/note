<div><div>
<MySql>


	mysql80使用的jar为8.0.x

	net start mysql80
	mysql -uroot -proot <""
	select user();得到登陆的用户
	select version();得到版本信息
	select now();得到当前的日期时间
	select database();得到当前打开的数据库
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/oa?useSSl=false&amp;serverTimezone=Hongkong&amp;
	useUnicode=true&amp;characterEncoding=utf-8"/>
        <property name="username" value="root"/>
        <property name="password" value="root"/>
    </bean>

	DDL:
	<创建数据库>
		create {database|schema} db_name;
		create database {if not exists} db_name
	</创建数据库>
	
	
	show {database|schema};查看当前服务器下的数据库
	show warning;查看说一步产生的警告信息
	ALTER DATABASE db_name [DEFAULT] CHARACTER SET [=] charset;
	USE db_name;
	SHOW TABLES;
	<查看表结构>
		desc user；
		describe user；
		show columns form user;
	</查看表结构>

        <常用的数据类型>
         VARCAHR
         INT
         DECIMAL
         TEXT
        <常用的数据类型/>

	<查看表详细信息>SHOW CREATE TABLE user</查看表详细信息>
	
	
	CREATE TABLE [IF NOT EXISTS] tbl_name(
		字段名称 字段类型 [完整性约束条件],
		字段名称 字段类型 [完整性约束条件],
		...
	)ENGINE=存储引擎 CHARSET=编码方式;
	<约束条件>
			unsigned (无符号的)
			zerofill (零填充)
			not null (非空)
			primary key (主键)
			auto_increment (自动增量)
			unique key (唯一约束)
			foreign key(外键)
                        comment(注释)
	</约束条件>
	<增删改字段（查不需要）>
		alter table db_name 
			add 字段名称 字段类型 [约束条件] [after||first]
			drop 字段名称
			change 原字段名称 新字段名称 字段类型 [字段属性] [first | after 字段名称]
			modify 字段名称 字段类型 [字段属性] [first | after 字段名称]
	<增删改字段/>
	<增删主键>
		ALTER TABLE db_name 
			ADD PRIMARY KEY(id);
			DROP PRIMARY KEY;--由于表只能有一个主键故不需要指定主键名称就可以删除主键
	
	</增删主键>
	<修改表名称>
		ALTER TABLE tbl_name RENAME [TO|AS] new_tbl_name
		RENAME TABLE tbl_name TO new_tbl_name;
		
	<修改表名称/>
	<修改auto_incerment>ALTER TABLE tbl_name AUTO_INCREMENT=值 </修改auto_incerment>
	<增删唯一主键>
		-- 删除唯一索引 username 和email
		ALTER TABLE user6 DROP INDEX username;
		ALTER TABLE user6 DROP INDEX email;
		-- 添加唯一索引
		ALTER TABLE user6 ADD UNIQUE KEY(username);
		ALTER TABLE user6 ADD UNIQUE INDEX uni_email(email);
	<增删唯一主键/>
	<insert>
		insert [into] db_name(字段名称,..) value|values(值,..);
		insert [into] db_name(字段名称,..) value|values(值,..),(值,..)..;
		insert [into] db_name value|values(值,..),(值,..)..;
		insert [into] db_name set 字段名称=值,..;
		insert user(username) select a from test;
		
	</insert>
	<delete>
		delete from db_name;
		delete from db_name where 字段名称=值;
		truncate db_name;
	</delete>
	<update>
		update db_name set 字段名称=值 where 键字段名称=值；
		如果不添加条件所有字段名称的值都会改变
	</update>
	<select>
		select id,username,age,sex from user1 where age between 18 and 30;
		select id,username,age,sex from user1 where id in(1,2,3,4);
		and not or
		SELECT id,username,age,sex FROM user1 WHERE username LIKE '张_%';
		SELECT id,username,age,sex FROM user1 GROUP BY sex;
		SELECT addr,
		GROUP_CONCAT(username) AS usersDetail,
		COUNT(*) AS totalUsers,
		SUM(age) AS sum_age,
		MAX(age) AS max_age,
		MIN(age) AS min_age,
		AVG(age) AS avg_age
		FROM user1
		GROUP BY addr;
		limit
		order by 
		<数学函数>
			sum();求和
			max();求最大值
			min();求最小值
			avg();求平均值
			count();统计记录
			ceil();进一取整
			floor();舍掉小数部分
			found();四舍五入
			truncate();取小数点后几位
			mod();取余数
			abs();取绝对值
			power();幂运算
			pi();圆周率
			rand();随机数
			sing();取得数字符号
			exp();计算e的x次方
		</数学函数>
			
		<字符函数>
			char_length();得到字符串的字符数
			length();返回字符串的长度
			concat();拼接字符串，如果包含null则返回null
			concat_ws('_','a','b','c');如果分隔符为null则返回的值为null
			reverse();反转
			left('hello',2);
			right('hello'2);
			lpad('abc',10,'?');填充
			rpad('abc',10,'?');填充
			repeat();重复指定的字符几次
			substring('abcdef',1,3);截断在指定的位置
			strcmp('a','b')比较字符
		</字符函数>
		
		<日期函数>
			select curdate(),current_data();返回当前日期
			select curtime(),cuurent_time();返回当前时间
			select now(),current_timestamp(),sysdate();返回当前日期时间
			select month(curdate()),monthname(curdate());返回月份和月份的名称
			select dayname(now());返回星期几
			select dayofweek(now());本周的第几天
			select week(now());本年的第几周
			select year(now()),month(now()),day(now()),hour(now()),minute(now()),second(now());年月日时分秒
			select datediff('2017-03-06','2017-03-02'):计算二者时间差
		</日期函数>
		
		<其它函数>
			-- 测试其它常用函数
			SELECT VERSION(),CONNECTION_ID();

			SELECT USER(),CURRENT_USER(),SYSTEM_USER(),SESSION_USER();

			-- 得到上一步插入操作产生AUTO_INCREMENT的值
			SELECT LAST_INSERT_ID();

			SELECT MD5('king');
			-- PASSWORD():密码加密算法
			SELECT PASSWORD('root');
		</其它函数>
	</select>
    <PS>
		3.sql为测试整型
	</PS>
</MySql>

<Spring>

	ioc解决对象的创建，和方法的调用
	aop解决方法的加强
	jdbc template解决的是jdbc使用复杂的问题，实际上就是jdbc的封装使用
	事务管理解决的是提交事务，撤销事物的问题
	
</Spring>

<MyBatis>

	MyBatis

	Mybatis多参数传递的三种方法：JavaBean、Map、@param
	JavaBean
	Map定义一个Map集合添加参数后#{xx}中的值必须为key值
	@param方法实际上就是底层封装成Map，@param（“xx”）的值为#{xx}

	集合类型参数处理：
	当参数为Collection接口，转换为Map，Map的Key值为collection
	当参数位List接口，除了Collection的值外，list作为Key
	如果参数为数组，也会转换为Map，Map的参数为array
-06                                                                                                                                                                                                                                                                           、 l *---
			<property name="username" value="root"/>
			<property name="password" value="root"/>
		</bean>                                                                                                                                                                                                                                                                    

</MyBatis>


<BootStrap> 
	<下载BootStrap地址：https://getbootstrap.com />
	
	<关于使用BootStrap的范例和调用插件的时候需要引用jQuery/>
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			
			<!--使ie浏览器可以使用bootstrap最新的渲染-->
			<meta http-equiv="X-UA-Compatible" content="IE=edge">  
			
			
			
			
			<!--视口的宽度设置等于物理设备的真实分辨率，设置初始缩放比例-->
			<meta name="viewport" content="width=device-width, initial-scale=1">
			
			<title>Bootstrap的HTML标准模板</title>   
			<!-- Bootstrap -->
			
			<!--载入BootStrap的css样式-->
			<link href="css/bootstrap.min.css" rel="stylesheet">
			
			<!--你自己的样式文件 -->
			<link href="css/your-style.css" rel="stylesheet">   
			
			<!-- 以下两个插件用于在IE8以及以下版本浏览器支持HTML5元素和媒体查询，如果不需要用可以移除 -->
			<!--[if lt IE 9]>
				<!--bootstrap模板为使IE6、7、8版本（IE9以下版本）浏览器兼容html5新增的标签-->
				<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
				<!--同理为使IE6、7、8版本浏览器兼容css3样式，引入下面代码-->
				<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
			<![endif]-->
		</head>
		<body>
			<h1>Hello, world!</h1>
			
			<!-- 如果要使用Bootstrap的js插件，必须先调入jQuery -->
			<script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
			
			<!-- 包括所有bootstrap的js插件或者可以根据需要使用的js插件调用　-->
			<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
		</body>
	</html>
	
	<.jumbotron可以使设置一些比较好看的效果/>
	
	<排版>
		<标题>
			<标题h1~h6使用时和.h1~.h6的使用效果一样/>
				<Example>
					<h6>Hello</h6>等效于<div class=“h6”>Hello</div>
				</Example>
			<Small 夹杂在h1~h6中时占65%的大小/>
				<Example>
					<h1>Bootstrap标题一<small>我是副标题</small></h1>
				</Example>
		<标题/>
		<段落>
			<使用BootStrap字体段落比较特殊/>
				<Info>
					1、全局文本字号为14px(font-size)。

					2、行高为1.42857143（line-height），大
					约是20px(大家看到一串的小数或许会有疑惑，
					其实他是通过LESS编译器计算出来的，当然
					Sass也有这样的功能)。

					3、颜色为深灰色（#333）；

					4、字体为"Helvetica Neue", Helvetica, 
					Arial, sans-serif;（font-family），或
					许这样的字体对我们中文并不太合适，但在
					实际项目中，大家可以根据自己的需求进行重置，
					在此我们不做过多阐述，我们回到这里。该
					设置都定义在<body>元素上，由于这几个属性
					都是继承属性，所以Web页面中文本（包括段落p元素）
					如无重置都会具有这些样式效果
				</Info>
		</段落>
		<强调内容>.lead使用后比其它标签大<强调内容/>
		<粗体>b 和 strong </粗体>
		<斜体>i 和 em </斜体>
		<粗体></粗体>
		<粗体></粗体>
		<粗体></粗体>
		<粗体></粗体>
		<粗体></粗体>
		
	</排版>
	
</BootStrap>

	


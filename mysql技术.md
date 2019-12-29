<div><div>
<MySql>


	mysql80ʹ�õ�jarΪ8.0.x

	net start mysql80
	mysql -uroot -proot <""
	select user();�õ���½���û�
	select version();�õ��汾��Ϣ
	select now();�õ���ǰ������ʱ��
	select database();�õ���ǰ�򿪵����ݿ�
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/oa?useSSl=false&amp;serverTimezone=Hongkong&amp;
	useUnicode=true&amp;characterEncoding=utf-8"/>
        <property name="username" value="root"/>
        <property name="password" value="root"/>
    </bean>

	DDL:
	<�������ݿ�>
		create {database|schema} db_name;
		create database {if not exists} db_name
	</�������ݿ�>
	
	
	show {database|schema};�鿴��ǰ�������µ����ݿ�
	show warning;�鿴˵һ�������ľ�����Ϣ
	ALTER DATABASE db_name [DEFAULT] CHARACTER SET [=] charset;
	USE db_name;
	SHOW TABLES;
	<�鿴��ṹ>
		desc user��
		describe user��
		show columns form user;
	</�鿴��ṹ>

        <���õ���������>
         VARCAHR
         INT
         DECIMAL
         TEXT
        <���õ���������/>

	<�鿴����ϸ��Ϣ>SHOW CREATE TABLE user</�鿴����ϸ��Ϣ>
	
	
	CREATE TABLE [IF NOT EXISTS] tbl_name(
		�ֶ����� �ֶ����� [������Լ������],
		�ֶ����� �ֶ����� [������Լ������],
		...
	)ENGINE=�洢���� CHARSET=���뷽ʽ;
	<Լ������>
			unsigned (�޷��ŵ�)
			zerofill (�����)
			not null (�ǿ�)
			primary key (����)
			auto_increment (�Զ�����)
			unique key (ΨһԼ��)
			foreign key(���)
                        comment(ע��)
	</Լ������>
	<��ɾ���ֶΣ��鲻��Ҫ��>
		alter table db_name 
			add �ֶ����� �ֶ����� [Լ������] [after||first]
			drop �ֶ�����
			change ԭ�ֶ����� ���ֶ����� �ֶ����� [�ֶ�����] [first | after �ֶ�����]
			modify �ֶ����� �ֶ����� [�ֶ�����] [first | after �ֶ�����]
	<��ɾ���ֶ�/>
	<��ɾ����>
		ALTER TABLE db_name 
			ADD PRIMARY KEY(id);
			DROP PRIMARY KEY;--���ڱ�ֻ����һ�������ʲ���Ҫָ���������ƾͿ���ɾ������
	
	</��ɾ����>
	<�޸ı�����>
		ALTER TABLE tbl_name RENAME [TO|AS] new_tbl_name
		RENAME TABLE tbl_name TO new_tbl_name;
		
	<�޸ı�����/>
	<�޸�auto_incerment>ALTER TABLE tbl_name AUTO_INCREMENT=ֵ </�޸�auto_incerment>
	<��ɾΨһ����>
		-- ɾ��Ψһ���� username ��email
		ALTER TABLE user6 DROP INDEX username;
		ALTER TABLE user6 DROP INDEX email;
		-- ���Ψһ����
		ALTER TABLE user6 ADD UNIQUE KEY(username);
		ALTER TABLE user6 ADD UNIQUE INDEX uni_email(email);
	<��ɾΨһ����/>
	<insert>
		insert [into] db_name(�ֶ�����,..) value|values(ֵ,..);
		insert [into] db_name(�ֶ�����,..) value|values(ֵ,..),(ֵ,..)..;
		insert [into] db_name value|values(ֵ,..),(ֵ,..)..;
		insert [into] db_name set �ֶ�����=ֵ,..;
		insert user(username) select a from test;
		
	</insert>
	<delete>
		delete from db_name;
		delete from db_name where �ֶ�����=ֵ;
		truncate db_name;
	</delete>
	<update>
		update db_name set �ֶ�����=ֵ where ���ֶ�����=ֵ��
		�����������������ֶ����Ƶ�ֵ����ı�
	</update>
	<select>
		select id,username,age,sex from user1 where age between 18 and 30;
		select id,username,age,sex from user1 where id in(1,2,3,4);
		and not or
		SELECT id,username,age,sex FROM user1 WHERE username LIKE '��_%';
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
		<��ѧ����>
			sum();���
			max();�����ֵ
			min();����Сֵ
			avg();��ƽ��ֵ
			count();ͳ�Ƽ�¼
			ceil();��һȡ��
			floor();���С������
			found();��������
			truncate();ȡС�����λ
			mod();ȡ����
			abs();ȡ����ֵ
			power();������
			pi();Բ����
			rand();�����
			sing();ȡ�����ַ���
			exp();����e��x�η�
		</��ѧ����>
			
		<�ַ�����>
			char_length();�õ��ַ������ַ���
			length();�����ַ����ĳ���
			concat();ƴ���ַ������������null�򷵻�null
			concat_ws('_','a','b','c');����ָ���Ϊnull�򷵻ص�ֵΪnull
			reverse();��ת
			left('hello',2);
			right('hello'2);
			lpad('abc',10,'?');���
			rpad('abc',10,'?');���
			repeat();�ظ�ָ�����ַ�����
			substring('abcdef',1,3);�ض���ָ����λ��
			strcmp('a','b')�Ƚ��ַ�
		</�ַ�����>
		
		<���ں���>
			select curdate(),current_data();���ص�ǰ����
			select curtime(),cuurent_time();���ص�ǰʱ��
			select now(),current_timestamp(),sysdate();���ص�ǰ����ʱ��
			select month(curdate()),monthname(curdate());�����·ݺ��·ݵ�����
			select dayname(now());�������ڼ�
			select dayofweek(now());���ܵĵڼ���
			select week(now());����ĵڼ���
			select year(now()),month(now()),day(now()),hour(now()),minute(now()),second(now());������ʱ����
			select datediff('2017-03-06','2017-03-02'):�������ʱ���
		</���ں���>
		
		<��������>
			-- �����������ú���
			SELECT VERSION(),CONNECTION_ID();

			SELECT USER(),CURRENT_USER(),SYSTEM_USER(),SESSION_USER();

			-- �õ���һ�������������AUTO_INCREMENT��ֵ
			SELECT LAST_INSERT_ID();

			SELECT MD5('king');
			-- PASSWORD():��������㷨
			SELECT PASSWORD('root');
		</��������>
	</select>
    <PS>
		3.sqlΪ��������
	</PS>
</MySql>

<Spring>

	ioc�������Ĵ������ͷ����ĵ���
	aop��������ļ�ǿ
	jdbc template�������jdbcʹ�ø��ӵ����⣬ʵ���Ͼ���jdbc�ķ�װʹ��
	��������������ύ���񣬳������������
	
</Spring>

<MyBatis>

	MyBatis

	Mybatis��������ݵ����ַ�����JavaBean��Map��@param
	JavaBean
	Map����һ��Map������Ӳ�����#{xx}�е�ֵ����Ϊkeyֵ
	@param����ʵ���Ͼ��ǵײ��װ��Map��@param����xx������ֵΪ#{xx}

	�������Ͳ�������
	������ΪCollection�ӿڣ�ת��ΪMap��Map��KeyֵΪcollection
	������λList�ӿڣ�����Collection��ֵ�⣬list��ΪKey
	�������Ϊ���飬Ҳ��ת��ΪMap��Map�Ĳ���Ϊarray
-06                                                                                                                                                                                                                                                                           �� l *---
			<property name="username" value="root"/>
			<property name="password" value="root"/>
		</bean>                                                                                                                                                                                                                                                                    

</MyBatis>


<BootStrap> 
	<����BootStrap��ַ��https://getbootstrap.com />
	
	<����ʹ��BootStrap�ķ����͵��ò����ʱ����Ҫ����jQuery/>
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			
			<!--ʹie���������ʹ��bootstrap���µ���Ⱦ-->
			<meta http-equiv="X-UA-Compatible" content="IE=edge">  
			
			
			
			
			<!--�ӿڵĿ�����õ��������豸����ʵ�ֱ��ʣ����ó�ʼ���ű���-->
			<meta name="viewport" content="width=device-width, initial-scale=1">
			
			<title>Bootstrap��HTML��׼ģ��</title>   
			<!-- Bootstrap -->
			
			<!--����BootStrap��css��ʽ-->
			<link href="css/bootstrap.min.css" rel="stylesheet">
			
			<!--���Լ�����ʽ�ļ� -->
			<link href="css/your-style.css" rel="stylesheet">   
			
			<!-- �����������������IE8�Լ����°汾�����֧��HTML5Ԫ�غ�ý���ѯ���������Ҫ�ÿ����Ƴ� -->
			<!--[if lt IE 9]>
				<!--bootstrapģ��ΪʹIE6��7��8�汾��IE9���°汾�����������html5�����ı�ǩ-->
				<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
				<!--ͬ��ΪʹIE6��7��8�汾���������css3��ʽ�������������-->
				<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
			<![endif]-->
		</head>
		<body>
			<h1>Hello, world!</h1>
			
			<!-- ���Ҫʹ��Bootstrap��js����������ȵ���jQuery -->
			<script src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
			
			<!-- ��������bootstrap��js������߿��Ը�����Ҫʹ�õ�js������á�-->
			<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
		</body>
	</html>
	
	<.jumbotron����ʹ����һЩ�ȽϺÿ���Ч��/>
	
	<�Ű�>
		<����>
			<����h1~h6ʹ��ʱ��.h1~.h6��ʹ��Ч��һ��/>
				<Example>
					<h6>Hello</h6>��Ч��<div class=��h6��>Hello</div>
				</Example>
			<Small ������h1~h6��ʱռ65%�Ĵ�С/>
				<Example>
					<h1>Bootstrap����һ<small>���Ǹ�����</small></h1>
				</Example>
		<����/>
		<����>
			<ʹ��BootStrap�������Ƚ�����/>
				<Info>
					1��ȫ���ı��ֺ�Ϊ14px(font-size)��

					2���и�Ϊ1.42857143��line-height������
					Լ��20px(��ҿ���һ����С����������ɻ�
					��ʵ����ͨ��LESS��������������ģ���Ȼ
					SassҲ�������Ĺ���)��

					3����ɫΪ���ɫ��#333����

					4������Ϊ"Helvetica Neue", Helvetica, 
					Arial, sans-serif;��font-family������
					��������������������Ĳ���̫���ʣ�����
					ʵ����Ŀ�У���ҿ��Ը����Լ�������������ã�
					�ڴ����ǲ���������������ǻص������
					���ö�������<body>Ԫ���ϣ������⼸������
					���Ǽ̳����ԣ�����Webҳ�����ı�����������pԪ�أ�
					�������ö��������Щ��ʽЧ��
				</Info>
		</����>
		<ǿ������>.leadʹ�ú��������ǩ��<ǿ������/>
		<����>b �� strong </����>
		<б��>i �� em </б��>
		<����></����>
		<����></����>
		<����></����>
		<����></����>
		<����></����>
		
	</�Ű�>
	
</BootStrap>

	


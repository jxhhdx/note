
net start mysql80;
mysql -uroot -proot

select user();
select database();
select version();
select now();

show databases;
show tables;
show create table 表名字;
show create database 数据库名字;
desc 表名字;

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
    update db_name set 字段名称=值, 字段名称2=值2 where 键字段名称=值；
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
<DDL>（create、drop、alter）
	create database if not exists 数据库名字;
	create table if not exists Info(
		id varchar(50),
		password char(10),
		name varchar(50),
		sex enum('男','女','保密'),
		age int(10),
		salary double(8,2),
		info text
	)engine=innodb charset=utf8;
	drop database 数据库名字;
	drop table 数据表名字;
	alter table 表名字 add 属性 属性的约束条件;
</DDL>
<DML>(insert、updat、delete)
	insert 表名字（属性） values （属性值...）;
	insert 表名字 values（属性...）
	insert 表名字 values (属性...),(属性...),...;
	insert 表名字 set 属性=属性值,...
	update 表名字 set 属性=属性值,... where 布尔型
	delete from 表名字 where 布尔型;
<DML/>

<DQL>（select、from、where）
	select 属性 as '别名' from 数据库.表名 where 布尔条件;
	<[not]between and><is [not] null><in><and><or>
	<[not] link '%匹配字段_%'>
	<group by 以什么分组><order by 字段值 asc|desc>
	<count(*)><limit 0,1><having>
	sum(),max(),min(),avg()
	<left right><join> <on>
<DQL/>

<DCL>（grant、roolback、commit）

<DCL/>
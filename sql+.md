
net start mysql80;
mysql -uroot -proot

select user();
select database();
select version();
select now();

show databases;
show tables;
show create table ������;
show create database ���ݿ�����;
desc ������;

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
    update db_name set �ֶ�����=ֵ, �ֶ�����2=ֵ2 where ���ֶ�����=ֵ��
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
<DDL>��create��drop��alter��
	create database if not exists ���ݿ�����;
	create table if not exists Info(
		id varchar(50),
		password char(10),
		name varchar(50),
		sex enum('��','Ů','����'),
		age int(10),
		salary double(8,2),
		info text
	)engine=innodb charset=utf8;
	drop database ���ݿ�����;
	drop table ���ݱ�����;
	alter table ������ add ���� ���Ե�Լ������;
</DDL>
<DML>(insert��updat��delete)
	insert �����֣����ԣ� values ������ֵ...��;
	insert ������ values������...��
	insert ������ values (����...),(����...),...;
	insert ������ set ����=����ֵ,...
	update ������ set ����=����ֵ,... where ������
	delete from ������ where ������;
<DML/>

<DQL>��select��from��where��
	select ���� as '����' from ���ݿ�.���� where ��������;
	<[not]between and><is [not] null><in><and><or>
	<[not] link '%ƥ���ֶ�_%'>
	<group by ��ʲô����><order by �ֶ�ֵ asc|desc>
	<count(*)><limit 0,1><having>
	sum(),max(),min(),avg()
	<left right><join> <on>
<DQL/>

<DCL>��grant��roolback��commit��

<DCL/>
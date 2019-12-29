# Hibernate

## 一、对象与文件

- **五个对象：**
  - SessionFactory对象、Session对象、Transaction对象、Query对象、Criteria对象
- **配置文件：** hibernate.properties、hibernate.cfg.xml

## 二、配置

### 配置文件

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-configuration SYSTEM 
"http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

<hibernate-configuration>
   <session-factory>
<!-- 数据库类型 -->
   <property name="hibernate.dialect">
      org.hibernate.dialect.MySQLDialect
   </property>
<!-- 数据库驱动 -->
   <property name="hibernate.connection.driver_class">
      com.mysql.jdbc.Driver
   </property>
<!-- 数据库URL -->
   <property name="hibernate.connection.url">
      jdbc:mysql://localhost/test
   </property>
   <property name="hibernate.connection.username">
      root
   </property>
   <property name="hibernate.connection.password">
      root123
   </property>
   <!-- 映射配置文件 -->
   <mapping resource="Employee.hbm.xml"/>
</session-factory>
</hibernate-configuration> 
```

### 映射文件

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE hibernate-mapping PUBLIC 
 "-//Hibernate/Hibernate Mapping DTD//EN"
 "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd"> 

<hibernate-mapping>
   <class name="Employee" table="EMPLOYEE">
      <meta attribute="class-description">
         This class contains the employee detail. 
      </meta>
      <id name="id" type="int" column="id">
         <generator class="native"/>
      </id>
      <property name="firstName" column="first_name" type="string"/>
      <property name="lastName" column="last_name" type="string"/>
      <property name="salary" column="salary" type="int"/>
   </class>
</hibernate-mapping>
```



## 三、注解

```java
import javax.persistence.*;

@Entity  // 表示这是以恶搞实体类
@Table(name = "EMPLOYEE")  // 表示对应的数据表的名字
public class Employee {
   @Id @GeneratedValue  // '@id'表示这是一个主键、后者。。
   @Column(name = "id")  // 这是表示该数据段的名字
   private int id;

   @Column(name = "first_name")
   private String firstName;

   @Column(name = "last_name")
   private String lastName;

   @Column(name = "salary")
   private int salary;  

   public Employee() {}
   public int getId() {
      return id;
   }
   public void setId( int id ) {
      this.id = id;
   }
   public String getFirstName() {
      return firstName;
   }
   public void setFirstName( String first_name ) {
      this.firstName = first_name;
   }
   public String getLastName() {
      return lastName;
   }
   public void setLastName( String last_name ) {
      this.lastName = last_name;
   }
   public int getSalary() {
      return salary;
   }
   public void setSalary( int salary ) {
      this.salary = salary;
   }
}
```

## 四、HQL

### SELECT

```java
String hql = "FROM Employee";  // FROM相当于"SELECT * FROM"
String hql = "FROM Employee AS E";  // AS用来取别名，也可以省略它。
String hql = "SELECT E.firstName Employee E"  // SELECT使用之后可以精准控制查询语句
String hql = "FROM Employee E WHERE E.id = 10";  // WHERE使用之后可以进行筛选
String hql = "FROM Employee E WHERE E.id > 10 ORDER BY E.salary DESC, E.salary DESC ";
// ORDER BY使用之后可以进行排序
String hql = "SELECT SUM(E.salary), E.firtName FROM Employee E " +
             "GROUP BY E.firstName";  // 使用之后可以进行分组
Query query = session.createQuery(hql);
List results = query.list();
```

### UPDATE

```JAVA
String hql = "FROM Employee E WHERE E.id = :employee_id";  // 参数传递
Query query = session.createQuery(hql);
query.setParameter("employee_id",10);
List results = query.list();
```

### DELETE

```JAVA
String hql = "DELETE FROM Employee WHERE id = :employee_id";  // 进行删除操作
Query query = session.createQuery(hql);
query.setParameter("employee_id", 10);
int result = query.executeUpdate();
```

### INSERT

```JAVA
String hql = "INSERT INTO Employee(firstName, lastName, salary)"  + 
             "SELECT firstName, lastName, salary FROM old_employee";  // 进行插入操作
Query query = session.createQuery(hql);
int result = query.executeUpdate();
System.out.println("Rows affected: " + result);
```
多选 1.关于多线程并行处理定时任务的情况，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .推荐使用Timer方式处理。

 

B .推荐使用ScheduledExecutorService方式处理。

 

C .Timer运行多个TimeTask时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行。

 

D .ScheduledExecutorService并发运行多个定时任务时，其中某线程抛出异常，不会影响到其它线程的继续运行。

 

 

多选 2.关于数据库中表相关的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .表名、字段名禁止出现数字开头，禁止两个下划线中间只出现数字。

 

B .表名不使用复数名词。

 

C .表必备三字段命名：id, gmt_create, gmt_modify。

 

D .表必备三字段命名：id, gmt_create, gmt_modified。

 

单选3.KV结构的集合，在处理null值的存储上有细微的区别，下列哪些说法是正确的：A

 

A .TreeMap的key不可以为null

 

B .TreeMap的key可以为null

 

C .ConcurrentHashMap的key可以为null

 

D .ConcurrentHashMap的value可以为null

 

注释：HashMap的key/value均可以为null，但是TreeMap的key不能为空，value可以为空

 

 

多选 4.关于二方库依赖的解析命令，下列哪些说法是正确的：ABC

 

A .mvn dependency:resolve 打印出已仲裁依赖的列表。

 

B .mvn dependency:tree 打印工程整个的依赖树结构。

 

C .mvn dependency:tree -Dverbose -Dincludes=commons-lang 打印出与commons-lang相关的详细依赖。

 

D .mvn clean install 打印工程整个的依赖树结构，并部署到本地仓库中。

 

多选 5.关于变量和常量定义，下列哪些符合《阿里巴巴Java开发手册》：AD

 

A .Long a=2L；//大写的L

 

B .Long a=2l; //小写的l

 

C .常量只定义一次，不再赋值，所以不需要命名规范。

 

D .不要使用一个常量类维护所有常量，应该按常量功能进行归类，分开维护。

 

多选 6.关于线程安全，下列哪些说法是正确的：ACD

 

A .SimpleDateFormat 是线程不安全的类。

 

B .SimpleDateFormat 是线程安全的类。

 

C .一般不要定义SimpleDateFormat的static变量，如果定义为static，必须保证线程安全。

 

D .推荐使用Apache封装好的DateUtils和DateFormatUtils工具类，来处理时间日期转换问题。

 

 

多选 7.以下关于格式规约的说法，正确的有哪些：AD

 

A .代码块缩进4个空格，如果使用tab缩进，请设置成1个tab为4个空格；

 

B .代码块缩进5个空格，如果使用tab缩进，请设置成1个tab为5个空格。

 

C .为了保持代码美观，《手册》强烈推荐增加若干空格，使某一行的变量与相邻对应位置的变量对齐。

 

D .方法体内的执行语句组、变量的定义语句组、不同的业务逻辑之间或者不同的语义之间推荐插入一个空行；

 

  相同业务逻辑和语义之间不需要插入空行。

 

 

多选 8.数组使用Arrays.asList转化为集合，下列说法哪些正确的：ACD

 

A .数组元素的修改，会影响到转化过来的集合。

 

B .数组元素的修改，不会影响到转化过来的集合。

 

C .对于转换过来的集合，它的 add/remove/clear 方法会抛出: UnsupportedOperationException。

 

D .Arrays.asList 体现的是适配器模式，只是转换接口，后台的数据仍是数组。

 

 

多选 9.关于异常的处理方式，下列哪些说法是正确的：BD

 

A .为防止obj对象本身空指针异常，书写代码时应该注意加异常捕获处理，例如：try { obj.method() } catch(NullPointerException e){……} 。

 

B .方法签名中，抛给调用者的关键字为throws

 

C .方法内部，抛出异常实例对象为throws

 

D .自定义异常要做到“认知对等”，即：抛出者和接收者要保持对自定义异常的认知统一，接收方需要知道这种异常的含义和对应的处理方案。

 

 

多选 10.Hashtable，HashMap, ConcurrentHashMap都是Map的实现类，它们在处理null值的存储上有细微的区别，下列哪些说法是正确的：ABD

 

 A .Hashtable的KV都不可以为null。

 

 B .HashMap的KV都可以为null。

 

 C .HashMap的K不可以为null，V可以为null。

 

 D .ConcurrentHashMap的KV都不可以为null。

 

 

 

单选 11.关于测试代码的覆盖率，下列哪些说法是正确的？:B

 

A .路径覆盖是最强覆盖，符合路径覆盖且测试全部通过，程序绝对没有问题。

 

B .语句覆盖度是最弱的覆盖度量方式。

 

C .分支覆盖与条件覆盖其实是一回事。

 

D .判定条件覆盖与路径覆盖其实是一回事。

 

 

多选 12.关于checked/unchecked exception，下列哪些说法是正确的：BCD

 

A .继承java.lang.Error的类属于checked exception。

 

B .checked异常继承java.lang.Exception类。

 

C .unchecked异常继承java.lang.RuntimeException类。

 

D .NullPointerException , IllegalArgumentException属于unchecked exception。

 

 

多选 13.以下关于命名规约内容说明，正确的是：BCDE

 

A .【强制】包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词，并且使用复数形式，例如：应用工具类包名为com.alibaba.mpp.utils

 

B .【强制】类名使用UpperCamelCase，必须遵从驼峰形式，但以下情形例外：（领域模型的相关命名）DO / DTO / VO / DAO等。

 

C .【强制】抽象类命名使用Abstract或Base开头；异常类命名使用Exception结尾；测试类命名以它要测试的类的名称开始，以Test结尾。

 

D .【强制】枚举类名建议带上Enum后缀，枚举成员名称需要全大写，单词间用下划线隔开。

 

E . 如果使用到了设计模式，建议在类名中体现出具体模式。例如代理模式的类命名：LoginProxy；观察者模式命名：ResourceObserver。

 

多选 14.关于MySQL性能优化的描述，下列哪些说法是正确的：ABCD

 

A .主键查询优先于二级索引查询。

 

B .表连接有一定的代价，故表连接数量越少越好。

 

C .一般情况下，二级索引扫描优先于全表扫描。

 

D .可以使用通过索引避免排序代价。

 

多选 15.关于生产环境的日志文件，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .异常信息应该包括两类信息：案发现场信息和异常堆栈信息。

 

B .日志文件推荐至少保存15天，因为有些异常具备以“周”为频次发生的特点。

 

C .避免重复打印日志，浪费磁盘空间，务必在log4j.xml中设置additivity=false。

 

D .错误日志和业务日志尽量分开存放。

 

 

多选 16.关于索引的使用，下列哪些说法是正确的：BCD

 

A .查询语句 WHERE a+1 = 5 可以利用a索引。

 

B .查询语句WHERE date_format(gmt_create, ‘%Y-%m-%d’) = '2016-11-11’无法利用gmt_create索引。

 

C .当 c 列类型为 char 时，查询语句 WHERE c = 5 无法利用c索引。

 

D .索引字段使用时不能进行函数运算。

 

多选 17.关于索引的设计，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 

A .对varchar类型的字段建立索引，必须指定索引长度。

 

B .对varchar类型的字段建立索引，不需要指定索引长度，这样索引区分度最好。

 

C .业务上具有唯一特性的字段（含组合字段），必须指定唯一索引。

 

D .建复合索引时，一般选择区分度高的字段放在最左列。

 

多选 18.关于Java的接口描述，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .在接口类中的方法和属性使用public修饰符。

 

B .对于Service类，内部的实现类加Impl的后缀与接口区别。例如：ProductServiceImpl实现ProductService接口。

 

C .对于Service类，基于SOA的理念，是以接口方式暴露服务。

 

D .尽量不在接口里定义变量，如果一定要定义变量，肯定是与接口方法相关，而且是整个应用的基础常量。

 

单选 19.关于类的序列化，下列说法哪些是正确的：D

 

A .类的序列化与serialVersionUID毫无关系。

 

B .如果完全不兼容升级，不需要修改serialVersionUID值。

 

C .POJO类的serialVersionUID不一致会编译出错。

 

D .POJO类的serialVersionUID不一致会抛出序列化运行时异常。

 

多选 20.关于接口使用抛异常还是返回错误码，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .向公司外部提供的http/api接口，推荐使用“错误码”方式返回异常或者错误信息。

 

B .对于应用内部的方法调用，推荐使用“抛出异常”的方式处理异常或者错误信息。

 

C .跨应用的RPC调用，推荐使用将“错误码”和“错误简短信息”封装成Result的方式进行返回。

 

D .对外提供的接口，一定要保证逻辑健壮性：尽量避免空指针等技术类异常；对于业务类异常要做好错误码或者异常信息的封装。

 

多选 21.根据《阿里巴巴Java开发手册》，以下功能必须进行水平权限控制校验的有：ABCD

 

A .订单详情页面。

 

B .类目管理后台。

 

C .店铺装修后台。

 

D .订单付款页面。

 

 

多选 22.关于分页查询，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 

A .分页查询，当统计的count为0时，应该直接返回，不要再执行分页查询语句。

 

B .iBATIS自带的queryForList(String statementName,int start,int size)分页接口有性能隐患，不允许使用。

 

C .定义明确的sql查询语句，通过传入参数start和size来实现分页逻辑。

 

D .可使用存储过程写分页逻辑，提高效率。

 

 

 

 

 

 

第二部分 常见错题

当然错题要相对来说，不好好的背和理解，哪个题对自己来说都是错题，好好理解记忆

 

-------------------------------------以下为第一次考试后，总结的错题和考点------------------------------------------------

 

 

1、【强制】有 try 块放到了事务代码中，catch 异常后，如果需要回滚事务，一定要注意手动回

滚事务。

 

多选 2.关于Java代码的设计和开发注意事项，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 

A .所有的覆写方法，必须是强制加 @Override。

 

B .setter方法中，参数名称与类成员变量名称一致，this.成员名=参数名。

 

C .在getter方法中，尽量不要增加逻辑判断，因为添加了逻辑判断后，会增加排查问题难度。

 

D .避免用BeanUtil进行属性的copy。

 

多选 2.在多线程并发读写的情况下，下列哪些处理方式能保证对象的线程安全：BCD

 

A .使用volatile关键字。

 

B .使用synchronized关键字给对象的读写操作加锁。

 

C .如果是基本类型，推荐使用java.util.concurrent.atomic包下面提供的线程安全的基本类型包装类，例如AtomicInteger。

 

D .如果是集合，推荐使用java.util.concurrent提供的并发集合类，例如：ConcurrentHashMap。

 

备注：

(volatile 解决多线程内存不可见问题。对于一写多读，是可以解决变量同步问题，

但是如果多写，同样无法解决线程安全问题。)

 

多选 3.关于代码书写格式，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .换行时相对上一行缩进2个空格。

 

B .运算符与下文一起换行，方法调用的点符号与下文一起换行。  .append()

 

C .在多个参数超长，逗号后进行换行。

 

D .在括号前不要换行。

 

单选 4.关于使用explain对数据库性能进行优化分析，下列哪些说法符合《阿里巴巴Java开发手册》：A

 

A .SQL性能优化的目标：至少要达到 range 级别，要求是ref级别，如果可以是consts最好。

 

B .index级别走的是扫描索引，所以速度会比ref快。

 

C .range级别是指对表进行范围索引。

 

D .ref级别是指使用主键或者唯一索引。

 

多选 5.关于索引效率，下列哪些说法符合《阿里巴巴Java开发手册》：CD

 

A .使用索引的效率一定高于全表扫描的效率。

 

B .关于explain的结果，type=index的索引效率好于type=ref。

 

C .sql查询条件 where a like ‘%阿里%’ ，不会走索引。

 

D .sql查询条件 where a like ‘阿里%’ ,a列创建了索引，一般会使用索引进行检索。

 

 

多选 6.关于线程池管理线程的好处，下列哪些说法是正确的：AC

 

A .能够减少在创建和销毁线程上所花的时间以及系统资源的开销。

 

B .使用线程池一定能避免OOM问题。

 

C .线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。

 

D .线程池能够根据资源等待情况，自动调整线程优先级并解决死锁问题。

 

 

多选 7.关于MySQL性能优化的描述，下列哪些说法是正确的：ABCD

 

A .主键查询优先于二级索引查询。

 

B .表连接有一定的代价，故表连接数量越少越好。

 

C .一般情况下，二级索引扫描优先于全表扫描。

 

D .可以使用通过索引避免排序代价

 

\8. 【参考】不要对单元测试存在如下误解：

 那是测试同学干的事情。本文是开发手册，凡是本文内容都是与开发同学强相关的。

 单元测试代码是多余的。系统的整体功能与各单元部件的测试正常与否是强相关的。

 单元测试代码不需要维护。一年半载后，那么单元测试几乎处于废弃状态。

 单元测试与线上故障没有辩证关系。好的单元测试能够最大限度地规避线上故障。

 

 

多选 9.关于用日志记录异常信息，下列哪些说法符合《阿里巴巴Java开发手册》：AB

 

A .日志尽量记录案发现场信息和异常堆栈信息。

 

B .如果日志中输出POJO类，POJO类需要重写toString方法，避免只输出hashCode。

 

C .不建议输出任何日志，因为日志记录消耗性能。

 

D .捕获异常后，一律抛给调用者去处理。

 

 

 10、【推荐】使用 CountDownLatch 进行异步转同步操作，每个线程退出前必须调用 countDown

方法，线程执行代码注意 catch 异常，确保 countDown 方法被执行到，避免主线程无法执行

至 await 方法，直到超时才返回结果。

说明：注意，子线程抛出异常堆栈，不能在主线程 try-catch 到

 

 

11、【强制】不得使用外键与级联，一切外键概念必须在应用层解决。 

说明：以学生和成绩的关系为例，学生表中的 student_id是主键，那么成绩表中的 student_id则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。 

 

12、【强制】count(distinct col) 计算该列除 NULL 之外的不重复行数，注意 count(distinct col1, col2) 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。

 

13、mysql使用sum函数注意判空操作

【强制】当某一列的值全是 NULL 时，count(col)的返回结果为 0，但 sum(col)的返回结果为NULL，因此使用 sum()时需注意 NPE 问题。 

正例：可以使用如下方式来避免 sum 的 NPE 问题：SELECT IF(ISNULL(SUM(g)),0,SUM(g)) FROM table; 

 

 

sum(null)=====>null

count(null)=====>0

 

 

 

第三部分 以往考题（参考）

抱着试试的心态，搜了两套，可是为毛要花积分下载，坑逼，以下为两套，当然，我的部分试题也是这里面的，可以拷贝下来针对性的看，对比着看，考点差不多

 

第一套

单选1.KV结构的集合，在处理null值的存储上有细微的区别，下列哪些说法是正确的：A

 

A .TreeMap的key不可以为null

 

B .TreeMap的key可以为null

 

C .ConcurrentHashMap的key可以为null

 

D .ConcurrentHashMap的value可以为null

 

注释：HashMap的key/value均可以为null，但是TreeMap的key不能为空，value可以为空

 

多选 2.数组使用Arrays.asList转化为集合，下列说法哪些正确的：ACD

 

A .数组元素的修改，会影响到转化过来的集合。

 

B .数组元素的修改，不会影响到转化过来的集合。

 

C .对于转换过来的集合，它的 add/remove/clear 方法会抛出: UnsupportedOperationException。

 

D .Arrays.asList 体现的是适配器模式，只是转换接口，后台的数据仍是数组。

 

 

多选 3.关于ORM的规则，下列哪些说法符合《阿里巴巴Java开发手册》：AD

 

A .数据库中，表达是与否概念的字段，必须使用is_xxx的方式命名。

 

B .推荐使用iBATIS自带的queryForList(String statementName,int start,int size)进行分页查询。(不推荐)

 

C .为避免写resultMap，可以直接拿HashMap与HashTable作为查询结果集的输出。

 

D .不要用resultClass当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义。

 

 

多选 4.关于多线程并行处理定时任务的情况，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .推荐使用Timer方式处理。

 

B .推荐使用ScheduledExecutorService方式处理。

 

C .Timer运行多个TimeTask时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行。

 

D .ScheduledExecutorService并发运行多个定时任务时，其中某线程抛出异常，不会影响到其它线程的继续运行。

 

 

多选 5.关于异常的处理方式，下列哪些说法是正确的：BD

 

A .为防止obj对象本身空指针异常，书写代码时应该注意加异常捕获处理，例如：try { obj.method() } catch(NullPointerException e){……} 。

 

B .方法签名中，抛给调用者的关键字为throws

 

C .方法内部，抛出异常实例对象为throws

 

D .自定义异常要做到“认知对等”，即：抛出者和接收者要保持对自定义异常的认知统一，接收方需要知道这种异常的含义和对应的处理方案。

 

 

多选 6.关于注释，下列哪些说法符合《阿里巴巴Java开发手册》：BC

 

A .方法头定义签名上的注释可以使用//（双划线）简单说明，不必要遵守javadoc规范。（/** */）

 

B .类定义开始部分，一般都用Javadoc注释 程序的总体描述以及作者信息。

 

C .方法头定义签名上的注释必须遵守javadoc规范，使用/**回车来生成，不得在方法定义上方使用//（双划线）简单说明。

 

D .方法头定义签名上的注释，可以使用// xxx 的形式

 

多选 7.关于用日志记录异常信息，下列哪些说法符合《阿里巴巴Java开发手册》：AB

 

A .日志尽量记录案发现场信息和异常堆栈信息。

 

B .如果日志中输出POJO类，POJO类需要重写toString方法，避免只输出hashCode。

 

C .不建议输出任何日志，因为日志记录消耗性能。

 

D .捕获异常后，一律抛给调用者去处理。

 

多选 8.关于常量的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .常量命名应该全部大写，单词间用下划线隔开。

 

B .常量的定义要力求语义表达完整清楚，让别人能从常量名称上大致了解含义，例如：MAX_STOCK_COUNT。

 

C .常量命名，可以使用拼音与英文的混合方式。

 

D .在使用缩写时要注意：杜绝不规范的缩写。

 

单选 9.关于类的序列化，下列说法哪些是正确的：D

 

A .类的序列化与serialVersionUID毫无关系。

 

B .如果完全不兼容升级，不需要修改serialVersionUID值。

 

C .POJO类的serialVersionUID不一致会编译出错。

 

D .POJO类的serialVersionUID不一致会抛出序列化运行时异常。

 

 

多选 10.关于二方库使用枚举类型，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .二方库里可以定义。

 

B .二方库里接口的入参可以使用枚举类型。

 

C .二方库里接口的返回值不能使用枚举类型，但可以包含枚举类型。

 

D .二方库里接口的返回值是枚举类型或包含枚举类型时，当二方库的枚举值升级（增加枚举值）时，可能会导致接口调用时出现枚举对象序列化异常。

 

多选 11.关于索引的设计，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 

A .对varchar类型的字段建立索引，必须指定索引长度。

 

B .对varchar类型的字段建立索引，不需要指定索引长度，这样索引区分度最好。

 

C .业务上具有唯一特性的字段（含组合字段），必须指定唯一索引。

 

D .建复合索引时，一般选择区分度高的字段放在最左列。

 

 

多选 12.关于hashcode和equals，下列哪些说法是正确的：BC

 

A .hashcode是Class的方法，equals是Object的方法。

 

B .hashcode决定（如：HashMap）存储位置；equals决定是否需要覆盖（同一hash下）集合元素。

 

C .类重写hashcode，必须重写equals。

 

D .两者是否需要重写，没有必然联系。

 

 

备注：equals 为true，hashcode值相同

   但是hashcode值相同，equals可能为false

 

 

多选 13.关于常量定义，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .跨应用共享常量：放置在二方库中，通常是client.jar中的const目录下。

 

B .应用内共享常量：通常放置在一方库的子模块中的const目录下。

 

C .子工程内部共享常量：即在当前子工程的const目录下。

 

D .类内常量：直接在类内部private static final定义。

 

 

多选 14.针对tcp协议，下列哪些说法是正确的：CD

 

A .tcp链接主动关闭的一方，在完成四次挥手协议后，即会立即关闭并释放socket。

 

B .处于time_wait状态的socket，其实是已经关闭状态，当需要新建连接时，可以被马上复用。

 

C .当大量socket处于time_wait状态时，会导致可用socket资源稀缺，从而导致服务器并发能力下降。

 

D .通过修改/etc/sysctl.conf配置文件，减小time_wait的超时时间，可以降低time_wait状态的socket数量，从而提升服务器并发能力。

 

 

多选 15.关于二方库依赖的解析命令，下列哪些说法是正确的：ABC

 

A .mvn dependency:resolve 打印出已仲裁依赖的列表。

 

B .mvn dependency:tree 打印工程整个的依赖树结构。

 

C .mvn dependency:tree -Dverbose -Dincludes=commons-lang 打印出与commons-lang相关的详细依赖。

 

D .mvn clean install 打印工程整个的依赖树结构，并部署到本地仓库中。

 

 

多选 16.关于Java代码的设计和开发注意事项，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 

A .所有的覆写方法，必须是强制加 @Override。

 

B .setter方法中，参数名称与类成员变量名称一致，this.成员名=参数名。

 

C .在getter方法中，尽量不要增加逻辑判断，因为添加了逻辑判断后，会增加排查问题难度。

 

D .避免用BeanUtil进行属性的copy。

 

 

多选 17.关于变量和常量定义，下列哪些符合《阿里巴巴Java开发手册》：AD

 

A .Long a=2L；//大写的L

 

B .Long a=2l; //小写的l

 

C .常量只定义一次，不再赋值，所以不需要命名规范。

 

D .不要使用一个常量类维护所有常量，应该按常量功能进行归类，分开维护。

 

 

多选 18.关于线程安全，下列哪些说法是正确的：ACD

 

A .SimpleDateFormat 是线程不安全的类。

 

B .SimpleDateFormat 是线程安全的类。

 

C .一般不要定义SimpleDateFormat的static变量，如果定义为static，必须保证线程安全。

 

D .推荐使用Apache封装好的DateUtils和DateFormatUtils工具类，来处理时间日期转换问题。

 

 

多选 19.关于try-catch的使用方式，下列哪些说法是正确的：BD

 

A .推荐用try-catch来做流程控制、条件控制。

 

B .捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。

 

C .对大段代码进行try-catch，利用Throwable来捕捉，万无一失。

 

D .对大段代码进行try-catch，这是不负责任的表现，分清稳定代码和非稳定代码，对非稳定的代码做对应的异常处理。

 

 

多选 20.关于加锁，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .可以只锁代码区块的情况下，就不要锁整个方法体。

 

B .高并发的业务场景下，要考虑加锁及同步处理带来的性能损耗，能用无锁数据结构，就不要用锁。

 

C .能用对象锁的情况下，就不要用类锁。

 

D .加锁时需要保持一致的加锁顺序，否则可能会造成死锁。

 

 

多选 21.在多线程并发读写的情况下，下列哪些处理方式能保证对象的线程安全：BCD

 

A .使用volatile关键字。(volatile 解决多线程内存不可见问题。对于一写多读，是可以解决变量同步问题，

但是如果多写，同样无法解决线程安全问题。)

 

B .使用synchronized关键字给对象的读写操作加锁。

 

C .如果是基本类型，推荐使用java.util.concurrent.atomic包下面提供的线程安全的基本类型包装类，例如AtomicInteger。

 

D .如果是集合，推荐使用java.util.concurrent提供的并发集合类，例如：ConcurrentHashMap。

 

 

多选 22.关于生产环境的日志文件，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .异常信息应该包括两类信息：案发现场信息和异常堆栈信息。

 

B .日志文件推荐至少保存15天，因为有些异常具备以“周”为频次发生的特点。

 

C .避免重复打印日志，浪费磁盘空间，务必在log4j.xml中设置additivity=false。

 

D .错误日志和业务日志尽量分开存放。

 

多选 23.关于系统安全，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .表单、AJAX提交不需要进行CSRF安全过滤。

 

B .表单、AJAX提交必须执行CSRF安全过滤。

 

C .URL外部重定向传入的目标地址必须执行白名单过滤。

 

D .用户输入的SQL参数严格使用参数绑定或者METADATA字段值限定，防止SQL注入，禁止字符串拼接SQL访问数据库。

 

多选 24.关于checked/unchecked exception，下列哪些说法是正确的：BCD

 

A .继承java.lang.Error的类属于checked exception。

 

B .checked异常继承java.lang.Exception类。

 

C .unchecked异常继承java.lang.RuntimeException类。

 

D .NullPointerException , IllegalArgumentException属于unchecked exception。

 

 

多选 25.Hashtable，HashMap, ConcurrentHashMap都是Map的实现类，它们在处理null值的存储上有细微的区别，下列哪些说法是正确的：BD ====> ABD

 

A .Hashtable的KV都不可以为null。

 

B .HashMap的KV都可以为null。

 

C .HashMap的K不可以为null，V可以为null。

 

D .ConcurrentHashMap的KV都不可以为null。

 

多选 26.关于应用与数据库之间的操作，下列哪些说法符合《阿里巴巴Java开发手册》：BC

 

A .对外提供一个大而全的接口进行POJO的update更新，这样比较省事，省代码。

 

B .使用事务回滚的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。

 

C .应用服务器与数据库之间是短连接。

 

D .应用服务器与数据库之间是长连接。

 

多选 27.关于索引的使用，下列哪些说法是正确的：BCD

 

A .查询语句 WHERE a+1 = 5 可以利用a索引。

 

B .查询语句WHERE date_format(gmt_create, ‘%Y-%m-%d’) = '2016-11-11’无法利用gmt_create索引。

 

C .当 c 列类型为 char 时，查询语句 WHERE c = 5 无法利用c索引。

 

D .索引字段使用时不能进行函数运算。

 

多选 28.关于代码书写格式，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .换行时相对上一行缩进2个空格。

 

B .运算符与下文一起换行，方法调用的点符号与下文一起换行。

 

C .在多个参数超长，逗号后进行换行。

 

D .在括号前不要换行。

 

多选 29.关于MySQL性能优化的描述，下列哪些说法是正确的：ABCD

 

A .主键查询优先于二级索引查询。

 

B .表连接有一定的代价，故表连接数量越少越好。

 

C .一般情况下，二级索引扫描优先于全表扫描。

 

D .可以使用通过索引避免排序代价。

 

多选 30.关于Java的接口描述，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 

A .在接口类中的方法和属性使用public修饰符。

 

B .对于Service类，内部的实现类加Impl的后缀与接口区别。例如：ProductServiceImpl实现ProductService接口。

 

C .对于Service类，基于SOA的理念，是以接口方式暴露服务。

 

D .尽量不在接口里定义变量，如果一定要定义变量，肯定是与接口方法相关，而且是整个应用的基础常量。

 

多选 31.关于二方库的依赖处理，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 

A .依赖于一个二方库群时，必须定义一个统一版本变量，避免各子二方库版本号不一致。

 

B .可以允许子项目的pom依赖中出现相同的GroupId，相同的ArtifactId，但是不同的Version。

 

C .所有pom文件中的依赖声明放在语句块中，所有版本仲裁放在语句块中。

 

D .线上应用不要依赖SNAPSHOT版本（安全包除外）。

 

单选 32.sort表示元素在存入集合时进行了排序，数据遍历的结果是按某个排序规则输出的； 而order表示每次遍历的序列都是一样的，元素前后关系每次遍历都是确定的，那么下列哪些集合既是sort，又是order的：D

 

A .HashSet

 

B .LinkedList

 

C .HashMap

 

D .TreeSet

 

多选 33.关于工具类二方库已经提供的，尽量不要在本应用中编程实现，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .json操作使用fastjson。

 

B .md5操作使用commons-codec。

 

C .ArrayUtils、NumberUtils、DateFormatUtils、DateUtils等优先使用org.apache.commons.lang包。

 

D .CollectionUtils优先使用org.apache.commons.collections4包。

 

 

备注：(org.apache.commons.lang3.time.DateFormatUtils)

 

 

多选 34.关于接口使用抛异常还是返回错误码，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .向公司外部提供的http/api接口，推荐使用“错误码”方式返回异常或者错误信息。

 

B .对于应用内部的方法调用，推荐使用“抛出异常”的方式处理异常或者错误信息。

 

C .跨应用的RPC调用，推荐使用将“错误码”和“错误简短信息”封装成Result的方式进行返回。

 

D .对外提供的接口，一定要保证逻辑健壮性：尽量避免空指针等技术类异常；对于业务类异常要做好错误码或者异常信息的封装。

 

 

单选 35.关于测试代码的覆盖率，下列哪些说法是正确的？:B

 

A .路径覆盖是最强覆盖，符合路径覆盖且测试全部通过，程序绝对没有问题。

 

B .语句覆盖度是最弱的覆盖度量方式。

 

C .分支覆盖与条件覆盖其实是一回事。

 

D .判定条件覆盖与路径覆盖其实是一回事。

 

 

多选 36.关于类和方法的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .类名使用UpperCamelCase命名法，但是领域模型命名除外，如：ProductDO的命名是规范的。

 

B .方法名命名应该使用lowerCamelCase命名法，如方法名：getHttpMessage() 是符合命名规范的。

 

C .为了方便理解，方法名或参数名可以使用拼音与英文混合的方式。

 

D .所有编程相关的命名均不能以下划线或美元符号开始，也不能以下划线或美元符号结束。

 

 

多选 *37.对于索引(a, b, c)，下列哪些说法是正确的：ABC

 

A .查询语句 where a between 5 and 10 可以使用该索引。

 

B .查询语句 where a = 5 and b between 5 and 10 可以使用该索引。

 

C .查询语句 where a in (5, 6, 7, 8, 9) and b = 5 可以使用该索引。

 

D .查询语句 where b = 5 and c = 10 可以使用该索引。

 

多选 38.以下关于命名规约内容说明，正确的是：BCD

 

A .【强制】包名统一使用小写，点分隔符之间有且仅有一个自然语义的英语单词，并且使用复数形式，例如：应用工具类包名为com.alibaba.mpp.utils

 

B .【强制】类名使用UpperCamelCase，必须遵从驼峰形式，但以下情形例外：（领域模型的相关命名）DO / DTO / VO / DAO等。

 

C .【强制】抽象类命名使用Abstract或Base开头；异常类命名使用Exception结尾；测试类命名以它要测试的类的名称开始，以Test结尾。

 

D .【强制】枚举类名建议带上Enum后缀，枚举成员名称需要全大写，单词间用下划线隔开。

 

多选 39.关于数据库中表相关的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 

A .表名、字段名禁止出现数字开头，禁止两个下划线中间只出现数字。

 

B .表名不使用复数名词。

 

C .表必备三字段命名：id, gmt_create, gmt_modify。

 

D .表必备三字段命名：id, gmt_create, gmt_modified。

 

 

单选 40.关于使用explain对数据库性能进行优化分析，下列哪些说法符合《阿里巴巴Java开发手册》：A

 

A .SQL性能优化的目标：至少要达到 range 级别，要求是ref级别，如果可以是consts最好。

 

B .index级别走的是扫描索引，所以速度会比ref快。

 

C .range级别是指对表进行范围索引。

 

D .ref级别是指使用主键或者唯一索引。

 

多选 41.关于分页查询，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 

A .分页查询，当统计的count为0时，应该直接返回，不要再执行分页查询语句。

 

B .iBATIS自带的queryForList(String statementName,int start,int size)分页接口有性能隐患，不允许使用。

 

C .定义明确的sql查询语句，通过传入参数start和size来实现分页逻辑。

 

D .可使用存储过程写分页逻辑，提高效率。

 

 

多选 42.根据《阿里巴巴Java开发手册》，以下哪些字段属于表的必备字段：ABD

 

A .id

 

B .gmt_modified

 

C .parent_id

 

D .gmt_create

 

单选 43.单元测试代码写在Java工程的哪个地方最为合适？C

 

A .写在业务代码体里边，方便调试。

 

B .写在业务代码同一个包下，方便归类查找。

 

C .写在src/test/java目录下。

 

D .写在src/java目录下。

 

多选 44.关于索引效率，下列哪些说法符合《阿里巴巴Java开发手册》：CD

 

A .使用索引的效率一定高于全表扫描的效率。

 

B .关于explain的结果，type=index的索引效率好于type=ref。

 

C .sql查询条件 where a like ‘%阿里%’ ，不会走索引。

 

D .sql查询条件 where a like ‘阿里%’ ,a列创建了索引，一般会使用索引进行检索。

 

 

多选 45.关于线程池管理线程的好处，下列哪些说法是正确的：AC

 

A .能够减少在创建和销毁线程上所花的时间以及系统资源的开销。

 

B .使用线程池一定能避免OOM问题。

 

C .线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。

 

D .线程池能够根据资源等待情况，自动调整线程优先级并解决死锁问题。

 

多选 46.编写单元测试代码遵守BCDE原则，以保证被测试模块的交付质量，那么下列说法正确的是：ABC

 

A .Border，边界值测试，包括循环边界、特殊取值、特殊时间点、数据顺序等。

 

B .Correct，正确的输入，并得到预期的结果。

 

C .Design，与设计文档相结合，来编写单元测试。

 

D .Equal， 单元测试环境必须与线上生产环境一致。(Error)

 

多选 47.关于领域模型命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 

A .数据对象命名：xxxDO，xxx即为数据表名，例如：ResellerAccountDO。

 

B .数据传输对象：xxxDTO，xxx为业务领域相关的名称，例如ProductDTO。

 

C .展示层对象：xxxVO，xxx一般为网页名称，例如RecommendProductVO。

 

D .POJO是DO/DTO/BO/VO的统称，命名成xxxPOJO。

 

多选 48.以下关于格式规约的说法，正确的有哪些：AD

 

A .代码块缩进4个空格，如果使用tab缩进，请设置成1个tab为4个空格；

 

B .代码块缩进5个空格，如果使用tab缩进，请设置成1个tab为5个空格。

 

C .为了保持代码美观，《手册》强烈推荐增加若干空格，使某一行的变量与相邻对应位置的变量对齐。

 

D .方法体内的执行语句组、变量的定义语句组、不同的业务逻辑之间或者不同的语义之间推荐插入一个空行；相同业务逻辑和语义之间不需要插入空行。

 

多选 49.根据《阿里巴巴Java开发手册》，以下功能必须进行水平权限控制校验的有：ABCD

 

A .订单详情页面。

 

B .类目管理后台。

 

C .店铺装修后台。

 

D .订单付款页面。

 

 

多选 50.关于客户数据展示，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 

A .客户的密码，密钥及密保问题答案等信息禁止展示。

 

B .客户的银行卡号只显示后四位。

 

C .客户的证件号码只显示第一位和最后一位，在必要业务场景下，经多因子强验证后可完整展示。

 

D .涉及有完整展示客户信息的页面均需要接入防爬系统

 

第二套

多选 1.如何处理单元测试产生的数据，下列哪些说法是正确的？ABC   

 A .测试数据入库时加特殊前缀标识。

 B .测试数据使用独立的测试库。

 C .自动回滚单元测试产生的脏数据。

 D .无须区别，统一在业务代码中进行判断和识别。

 

 

 

 

多选 2.关于并发处理，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 A .线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。

 B .同步处理时，能锁部分代码区块的情况下不要锁整个方法；高并发时，同步调用应该考虑到性能损耗。

 C .创建线程或线程池时，推荐给线程指定一个有意义的名称，方便出错时回溯。

 D .推荐使用Executors.newFixedThreadPool(int x)生成指定大小的线程池。

 

 备注：(线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式)

 

 

 

 

 

多选 3.下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 A .对于“明确停止使用的代码和配置”，如方法、变量、类、配置文件、动态配置属性等要坚决从程序中清理出去，避免造成过多垃圾。

 B .永久弃用的代码段注释掉即可，即不用加任何注释。

 C .对于暂时被注释掉，后续可能恢复使用的代码片断，在注释代码上方，统一规定使用三 个斜杠(///)来说明注释掉代码的理由。

 D .不要在视图模板中加入任何复杂的逻辑。

 

 

 

 

多选 4.关于分页查询，下列哪些说法符合《阿里巴巴Java开发手册》：ABC

 A .分页查询，当统计的count为0时，应该直接返回，不要再执行分页查询语句。

 B .iBATIS自带的queryForList(String statementName,int start,int size)分页接口有性能隐患，不允许使用。

 C .定义明确的sql查询语句，通过传入参数start和size来实现分页逻辑。

 D .可使用存储过程写分页逻辑，提高效率。

 

 

 

 

多选 5.根据《阿里巴巴Java开发手册》，以下功能必须进行水平权限控制校验的有：ABCD

 A .订单详情页面。

 B .类目管理后台。

 C .店铺装修后台。

 D .订单付款页面。

 

 

 

 

多选 6.关于数据库中NULL的描述，下列哪些说法符合《阿里巴巴Java开发手册》：BD

 A .NULL=NULL的返回结果为true。

 B .NULL与任何值的比较结果都为NULL。

 C .NULL<>1的返回结果为true。

 D .当某一列的值全是NULL时，sum(col)的返回结果为NULL。

 

 

 

 

多选 7.关于接口使用抛异常还是返回错误码，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .向公司外部提供的http/api接口，推荐使用“错误码”方式返回异常或者错误信息。

 B .对于应用内部的方法调用，推荐使用“抛出异常”的方式处理异常或者错误信息。

 C .跨应用的RPC调用，推荐使用将“错误码”和“错误简短信息”封装成Result的方式进行返回。

 D .对外提供的接口，一定要保证逻辑健壮性：尽量避免空指针等技术类异常；对于业务类异常要做好错误码或者异常信息的封装。

 

 

 

 

单选 8.关于类的序列化，下列说法哪些是正确的：D

 A .类的序列化与serialVersionUID毫无关系。

 B .如果完全不兼容升级，不需要修改serialVersionUID值。

 C .POJO类的serialVersionUID不一致会编译出错。

 D .POJO类的serialVersionUID不一致会抛出序列化运行时异常。

 

 

 

 

多选 9.关于Java的接口描述，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 A .在接口类中的方法和属性使用public修饰符。

 B .对于Service类，内部的实现类加Impl的后缀与接口区别。例如：ProductServiceImpl实现ProductService接口。

 C .对于Service类，基于SOA的理念，是以接口方式暴露服务。

 D .尽量不在接口里定义变量，如果一定要定义变量，肯定是与接口方法相关，而且是整个应用的基础常量。

 

 备注：

 【推荐】接口类中的方法和属性不要加任何修饰符号（public 也不要加），保持代码的简洁

 性，并加上有效的 Javadoc 注释。尽量不要在接口里定义变量，如果一定要定义变量，肯定是

 与接口方法相关，并且是整个应用的基础常量。

 正例：接口方法签名 void commit();

 接口基础常量 String COMPANY = "alibaba";

 反例：接口方法定义 public abstract void f();

 说明：JDK8 中接口允许有默认实现，那么这个 default 方法，是对所有实现类都有价值的默

 认实现。

 

单选 10.集合在遍历过程中，有时需要对符合一定条件的元素进行删除，下列哪些说法是正确的：B

 A .在 foreach 循环里进行元素的 remove操作。

 B .使用Iterator方式，如果有并发，需要对Iterator对象加锁。

 C .Iterator进行元素的删除操作，绝对是线程安全的。

 D .Java无法实现在遍历时，进行删除元素操作。

 

 

 

 

多选 11.关于基本数据类型与包装数据类型的使用标准，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .所有的POJO类属性必须使用包装数据类型。

 B .RPC方法的返回值和参数必须使用包装数据类型。

 C .因为JAVA的自动装箱与拆箱机制，不需要根据场景来区分数据类型。

 D .所有的局部变量推荐使用基本数据类型。

 

 

 

 

多选 12.关于索引的设计，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 A .对varchar类型的字段建立索引，必须指定索引长度。

 B .对varchar类型的字段建立索引，不需要指定索引长度，这样索引区分度最好。

 C .业务上具有唯一特性的字段（含组合字段），必须指定唯一索引。

 D .建复合索引时，一般选择区分度高的字段放在最左列。

 

 

 

 

多选 13.关于二方库版本号的命名方式，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .版本号命名格式：主版本号.次版本号.修订号。

 B .主版本号:产品方向改变，或者大规模API不兼容，或者架构不兼容升级。

 C .次版本号:保持相对兼容性，增加主要功能特性，影响范围极小的API不兼容修改。

 D .修订号:保持完全兼容性，修复BUG、新增次要功能特性等。

 

 

 

 

多选 14.关于索引的使用，下列哪些说法是正确的：BCD

 A .查询语句 WHERE a+1 = 5 可以利用a索引。

 B .查询语句WHERE date_format(gmt_create, '%Y-%m-%d') = '2016-11-11'无法利用gmt_create索引。

 C .当 c 列类型为 charchar 时，查询语句 WHERE c = 5 无法利用c索引。

 D .索引字段使用时不能进行函数运算。

 

 

 

 

多选 15.关于生产环境的日志文件，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .异常信息应该包括两类信息：案发现场信息和异常堆栈信息。

 B .日志文件推荐至少保存15天，因为有些异常具备以“周”为频次发生的特点。

 C .避免重复打印日志，浪费磁盘空间，务必在log4j.xml中设置additivity=false。

 D .错误日志和业务日志尽量分开存放。

 

 

 

 

多选 16.关于代码注释，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .特殊注明标记人与标记时间。

 B .待办事宜（TODO）:（ [标记人，标记时间，[预计处理时间]）

 C .在注释中用FIXME标记某代码虽然实现了功能，但是实现的方法有待商榷，希望将来能改进

 D .在注释中用FIXME标记某代码是错误的，而且不能工作，需要及时纠正的情况

 

 

 

 

多选 17.关于MySQL性能优化的描述，下列哪些说法是正确的：ABCD

 A .主键查询优先于二级索引查询。

 B .表连接有一定的代价，故表连接数量越少越好。

 C .一般情况下，二级索引扫描优先于全表扫描。

 D .可以使用通过索引避免排序代价。

 

 

 

多选 18.关于索引的设计和使用，下列哪些说法是正确的：AD     ----  ABCD

 A .若查询条件中不包含索引的最左列，则无法使用索引。

 B .对于范围查询，只能利用索引的最左列。

 C .对于order by A或group by A语句，在A上建立索引，可以避免排序。

 D .对于多列排序，需要所有所有列排序方向一致，才能利用索引。

 

 备注：

  设计高效索引：

   查询，更新，删除where条件中必须有索引，处理行数不能超过1w

   若查询条件中不包含索引的最左列， 无法使用索引

   对于范围查询， 只能利用索引的最左列

   对于group by/order by A语句，在A上建立索引， 可以避免排序

   对于多列排序， 需要所有所有列排序方向一致， 才能利用索引。

 

 

多选 19.关于类命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .抽象类命名使用Abstract或Base开头。

 B .异常类命名使用Exception结尾。

 C .测试类命名以它要测试的类的名称开始，以Test结尾。

 D .如果使用到了设计模式，建议在类名中体现出具体模式。例如代理模式的类命名：LoginProxy；观察者模式命名：ResourceObserver。

 

 

 

 

多选 20.关于数据库模糊检索的描述，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .绝对禁止左模糊。

 B .绝对禁止全模糊。

 C .绝对禁止右模糊。

 D .全模糊或左模糊查询需求，优先使用搜索引擎。

 

 

多选 21.关于代码注释，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 A .所有的抽象方法（包括接口中的方法）必须要用javadoc注释。

 B .所有的方法，包括私有方法，最好都增加注释，有总比没有强。

 C .过多过滥的注释，代码的逻辑一旦修改，修改注释是相当大的负担。

 D .我的命名和代码结构非常好，可以减少注释的内容。

 

 

多选 22.关于checked/unchecked exception，下列哪些说法是正确的：BCD

 A .继承java.lang.Error的类属于checked exception。

 B .checked异常继承java.lang.Exception类。

 C .unchecked异常继承java.lang.RuntimeException类。

 D .NullPointerException , IllegalArgumentException属于unchecked exception。

 

 

 

 

单选 23.关于Map类型集合的遍历方式，下列哪些说法是正确的：D

 A .Map类型的实现类都同时实现了Iterator接口。

 B .使用foreach进行遍历。

 C .推荐使用keySet进行遍历。

 D .推荐使用entrySet进行遍历。

 

 

 

 

多选 24.关于变量、方法名、包的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .POJO类中的任何布尔类型的变量，都不要加is，因为部分框架解析时有可能会出现序列化错误。

 B .包名统一使用单数形式，如：com.alibaba.mpp.util。

 C .中括号是数组类型的一部分，数组定义如下：String[] args; 不要误写为String args[]；

 D .Service/DAO层方法命名可以参考规约，例如：删除的方法推荐使用remove或delete做前缀。

 

 

 

 

多选 25.关于常量定义，下列哪些说法符合《阿里巴巴Java开发手册》：AC

 A .不允许出现任何魔法值（即未经预先定义的常量）直接出现在代码中。

 B .魔法值是指程序中随意定义并赋值的变量值，如果代码编写者明白变量值意义是可以任意使用的，例如在代码中写if(status == 3) return error;符合规范。

 C .如果变量值仅在一个范围内变化推荐用Enum类。

 D .在程序中，一律禁止使用枚举类型。

 

 

 

 

多选 26.关于maven依赖、仲裁、规则，下列哪些说法是正确的：ACD

 A .<dependencies>的依赖会默认传递给子项目。

 B .<dependencies>的依赖绝对不会传递给子项目。

 C .在<dependencyManagement>中指定版本号。

 D .避免在不同的子项目，声明同一个二方库的不同版本号。

 

 

 

 

单选 27.关于二方库升级，下列哪些说法是正确的：B

 A .升级二方库只是改个版本号，不需要关联功能的回归。

 B .升级二方库需要比对仲裁结果的差异，谨慎评估。

 C .升级二方库，绝对不会影响到其它二方库的版本号。

 D .只要此二方库负责人保证说不会有任何影响，即可大胆升级，直接发布上线。

 

 

 备注：【强制】二方库的新增或升级，保持除功能点之外的其它 jar 包仲裁结果不变。如果有改变，

必须明确评估和验证，建议进行 dependency:resolve 前后信息比对，如果仲裁结果完全不一

致，那么通过 dependency:tree 命令，找出差异点，进行<excludes>排除 jar 包。

 

 

 

多选 28.关于表字段和索引，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .表字段注释，如果修改字段含义或对字段表示的状态追加时，需要及时更新。

 B .合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。

 C .针对表的每个字段都增加索引，加快查询速度。

 D .字段的区分度越高，索引的查找速度越快。

 

 

 

 

单选 29.关于测试代码的覆盖率，下列哪些说法是正确的？B

 A .路径覆盖是最强覆盖，符合路径覆盖且测试全部通过，程序绝对没有问题。

 B .语句覆盖度是最弱的覆盖度量方式。

 C .分支覆盖与条件覆盖其实是一回事。

 D .判定条件覆盖与路径覆盖其实是一回事。

 

 

 

 

多选 30.Hashtable，HashMap, ConcurrentHashMap都是Map的实现类，它们在处理null值的存储上有细微的区别，下列哪些说法是正确的：ABD

 A .Hashtable的KV都不可以为null。

 B .HashMap的KV都可以为null。

 C .HashMap的K不可以为null，V可以为null。

 D .ConcurrentHashMap的KV都不可以为null。

 

 备注：HashMap kv都可以为null，

​    TreeMap的v可以为null

​     

​     

​     

​     

 

多选 31.关于数据库命名规则，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 A .数据库库名和表名没有规定，可任意取名，只要方便记忆即可。

 B .库名应该尽量与应用名称保持一致，表的命名最好是业务名称_表名的方式。

 C .无论是库名还是表名都禁用保留字，如desc、match、range等。

 D .表名、字段名必须使用小写字母或数字。

 

 

 

 

多选 32.关于异常的处理方式，下列哪些说法是正确的：BD

 A .为防止obj对象本身空指针异常，书写代码时应该注意加异常捕获处理，例如：try { obj.method() } catch(NullPointerException e){……} 。

 B .方法签名中，抛给调用者的关键字为throws

 C .方法内部，抛出异常实例对象为throws

 D .自定义异常要做到“认知对等”，即：抛出者和接收者要保持对自定义异常的认知统一，接收方需要知道这种异常的含义和对应的处理方案。

 

 

 备注：【强制】Java 类库中定义的可以通过预检查方式规避的 RuntimeException 异常不应该通过

catch 的方式来处理，比如：NullPointerException，IndexOutOfBoundsException 等等。

说明：无法通过预检查的异常除外，比如，在解析字符串形式的数字时，不得不通过 catch

NumberFormatException 来实现。

 

 

多选 33.数组使用Arrays.asList转化为集合，下列说法哪些正确的：ACD

 A .数组元素的修改，会影响到转化过来的集合。

 B .数组元素的修改，不会影响到转化过来的集合。

 C .对于转换过来的集合，它的 add/remove/clear 方法会抛出: UnsupportedOperationException。

 D .Arrays.asList 体现的是适配器模式，只是转换接口，后台的数据仍是数组。

 

 

 

 

多选 34.关于文件编码和格式的设定，下列哪些说法符合《阿里巴巴Java开发手册》：BC

 A .IDE的text file encoding设置为GBK格式。

 B .IDE的text file encoding设置为UTF-8格式。

 C .IDE中文件的换行符使用unix格式。

 D .IDE中文件的换行符使用windows格式。

 

 

 

 

多选 35.关于数据库是与否概念的列的命名方式，下列哪些说法符合《阿里巴巴Java开发手册》：BD

 A .对于是与否概念的列名，必须使用can_abc 来表示。

 B .对于是与否概念的列名，必须使用is_abc 来表示。

 C .数据类型是varchar(1)（ Y表示是，N表示否）。

 D .数据类型是unsigned tiny int.（ 1表示是，0表示否）。

 

 

 

 

多选 36.以下关于格式规约的说法，正确的有哪些：AD

 A .代码块缩进4个空格，如果使用tab缩进，请设置成1个tab为4个空格；

 B .代码块缩进5个空格，如果使用tab缩进，请设置成1个tab为5个空格。

 C .为了保持代码美观，《手册》强烈推荐增加若干空格，使某一行的变量与相邻对应位置的变量对齐。

 D .方法体内的执行语句组、变量的定义语句组、不同的业务逻辑之间或者不同的语义之间推荐插入一个空行；相同业务逻辑和语义之间不需要插入空行。

 

 

 

 

多选 37.通过集合A.subList()获取子集合B，下列说法哪些是正确的：ABD

 A .返回的集合B没有实现Serializable接口，不能被序列化，所以不能应用于RPC场景。

 B .在B集合中添加某个元素，那么A集合也会添加进去此元素。

 C .集合A中元素的修改不会影响到集合B的任何操作。

 D .对A元素个数的修改，会导致集合B的遍历产生ConcurrentModificationException 异常。

 

 

 

 

多选 38.关于捕获异常和抛异常，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 A .如果需要捕获不同类型异常，为了方便处理，可以使用catch(Exception e){...}。

 B .不要捕获异常后不处理，丢弃异常信息。

 C .捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。

 D .异常定义时区分unchecked / checked 异常，避免直接使用RuntimeException抛出。

 

 

 

 

多选 39.关于线程安全，下列哪些说法是正确的：ACD

 A .SimpleDateFormat 是线程不安全的类。

 B .SimpleDateFormat 是线程安全的类。

 C .一般不要定义SimpleDateFormat的static变量，如果定义为static，必须保证线程安全。

 D .推荐使用Apache封装好的DateUtils和DateFormatUtils工具类，来处理时间日期转换问题。

 

 

 

 

多选 40.为了更方便地进行单元测试，被测试的业务代码应避免以下哪些情况？ABCD

 A .构造方法中做的事情过多。

 B .存在过多的全局变量和静态方法。

 C .存在过多的外部依赖。

 D .存在过多的条件语句。

 

 

 

 

多选 41.关于控制语句，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .推荐 if-else的方式可以改写成卫语句的形式。

 B .尽量减少try-catch 块内的逻辑，定义对象、变量、获取数据库连接等操作可以移到try-catch块外处理

 C .if ( condition) statements; 单行语句不需要使用大括号。

 D .在一个switch块内，都必须包含一个default语句并且放在最后，即使它什么代码也没有。

 

 

 

 

多选 42.关于参数有效性验证，下列哪些说法符合《阿里巴巴Java开发手册》：ABCD

 A .防止page size过大导致内存溢出。

 B .防止正则输入源串拒绝服务ReDOS。

 C .防止任意重定向。

 D .预防 SQL 注入。

 

 

 

 

多选 43.关于变量和常量定义，下列哪些符合《阿里巴巴Java开发手册》：AD

 A .Long a=2L；//大写的L

 B .Long a=2l; //小写的l

 C .常量只定义一次，不再赋值，所以不需要命名规范。

 D .不要使用一个常量类维护所有常量，应该按常量功能进行归类，分开维护。

 

 

 

 

单选 44.在定义DO/DTO/VO/等POJO类时，对属性默认值的设定，下列哪些说法符合《阿里巴巴Java开发手册》：D

 A .String类型的默认值设定为空字符串。

 B .Date类型的默认值设定为new Date()。

 C .集合类型的默认值设定为Collections.EMPTY_LIST。

 D .不要设定任何属性默认值。

 

 备注: 【强制】定义 DO/DTO/VO 等 POJO 类时，不要设定任何属性默认值。

反例：POJO 类的 gmtCreate 默认值为 new Date()，但是这个属性在数据提取时并没有置入具

体值，在更新其它字段时又附带更新了此字段，导致创建时间被修改成当前时间。

 

 

 

多选 45.关于二方库依赖的解析命令，下列哪些说法是正确的：ABC

 A .mvn dependency:resolve 打印出已仲裁依赖的列表。

 B .mvn dependency:tree 打印工程整个的依赖树结构。

 C .mvn dependency:tree -Dverbose -Dincludes=commons-lang 打印出与commons-lang相关的详细依赖。

 D .mvn clean install 打印工程整个的依赖树结构，并部署到本地仓库中。

 

 

 

 

单选 46.KV结构的集合，在处理null值的存储上有细微的区别，下列哪些说法是正确的：A

 A .TreeMap的key不可以为null

 B .TreeMap的key可以为null

 C .ConcurrentHashMap的key可以为null

 D .ConcurrentHashMap的value可以为null

 

 

 

 

多选 47.关于数据库中表相关的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ABD

 A .表名、字段名禁止出现数字开头，禁止两个下划线中间只出现数字。

 B .表名不使用复数名词。

 C .表必备三字段命名：id, gmt_create, gmt_modify。

 D .表必备三字段命名：id, gmt_create, gmt_modified。

 

 

 

 

多选 48.关于多线程并行处理定时任务的情况，下列哪些说法符合《阿里巴巴Java开发手册》：BCD

 A .推荐使用Timer方式处理。

 B .推荐使用ScheduledExecutorService方式处理。

 C .Timer运行多个TimeTask时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行。

 D .ScheduledExecutorService并发运行多个定时任务时，其中某线程抛出异常，不会影响到其它线程的继续运行。

 

 

 

 

多选 49.关于Java代码的设计和开发注意事项，下列哪些说法符合《集合开发规约》：ABCD

 A .禁止将URL、文件名、系统参数、数据库连接地址、业务规则的可变参数，硬编码在工程中。

 B .long或者Long初始赋值时，必须是大写的L，不能小写。

 C .当一个类有多个构造方法，或是多个同名方法，这些方法应该按顺序放置在一起，便于阅读。

 D .相同参数类型，同等业务含义，才可以使用Java的可变参数，参数的类型尽量避免使用Object。

 

 

 

 

多选 50.关于数据库索引的命名，下列哪些说法符合《阿里巴巴Java开发手册》：ACD

 A .主键索引(primary key)，字段类型为unsigned bigint、单表时推荐自增、步长为1。

 B .主键索引(primary key)，字段类型为unsigned bigint、单表时推荐自增、步长为2。

 C .唯一索引（unique key），命名规则为uk_字段名（如果多个字段继续下划线）。

 D .普通索引(normal index)，标记成idx_字段名（如果多个继续下划线）。
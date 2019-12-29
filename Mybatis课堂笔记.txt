动态SQL、缓存、插件-pageHelper

动态Sql: 
    
sql语句IN的使用，后台封装数据于数组中

批量操作数据，把操作的数据封装在数组中

Mybatis入参处理
	单参数传递（会自动处理）直接赋值于#{id }
	多参数传递（会自动封装在Map中，key为为参数名）
		多参数处理：1）JavaBean传递参数 2）Map接口
		3）注解@param
	Collection、List、Array作为参数，也封装为Map

foreach标签
	collection代表你要遍历的数组的名字
	item 代表你要遍历的对象
	index 当前遍历的索引
	open 
	close
	separator 分隔
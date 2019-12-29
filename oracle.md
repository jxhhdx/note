<oracle>
    <oracle常用命令>
        1> sqlplus sys/Oracle@orcl as sysdba
	2> describe mysql 【查看表结构】
        3> @ e:\oracle.sql 
        或者 @ e:\start.sql 【切记 @@ oracle.sql】 
        或者start e:\oralce.sql 【该命令支持http】

        4> get e:\oracle.sql 输入 run 【表示查看后运行】
        5> edit e:\oracle.sql 【编辑sql文件】
        6> spool e:\oracle.sql
           从这里开始会将结果输入到oracle.sql文件之中即使是错误的命令
           spool off;
	7> 临时变量 && 或者 & 【&在一段语句中只能是使用一次，&&可以使用多次】
        8> define 定义默认变量查看默认变量。
        9> 格式化输出
    </oracle常用命令>

    <知识点>
        第一范式（属性不能再分）：即是属性不能有多重含义，不能有相同含义的属性，列不能是其它列的计算结果；
        第二范式（必须符合第一范式）：表中的每一列都要与主键相关    
        第三范式（必须符合第二范式）：非关键列对任一主键的不存在传递函数依赖。
        关系数据结构、关系操作、关系完整性约束
    </知识点>
</oracle>
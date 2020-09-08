# IDEA使用教程

## 搜索快捷键

> `Ctrl`+`N` 全局文件检索
>
> `Ctrl`+`F`文件内搜索
>
> `Ctrl`+`R`替换
>
> `Ctrl`+`F12`类的结构（方法等）

## 显示快捷键

> `Ctrl`+`E` 显示最近编辑的文件
>
> `Ctrl`+`H`继承层级
>
> `Ctrl` +`P`显示方法的参数信息

## 代码生成快捷键

> `Alt`+`Insert`生成构造方法
>
> `Ctrl`+`Alt`+`T`生成try-catch

## 多个光标

> `Shift`+`Alt`

## 自动导包

> `settings`-> 搜索`import`->`Auto import `选中`Add`和`Optimize`开头的两个。

## lombok插件的导入

> 应用市场市场搜索`lombok`插件
>
> 导入`pom`文件中导入`lombok`依赖

### Free Mybatis plugin

> 应用市场搜索

## 默认注释模板

>  `File`-->`settings`-->`Editor`-->`File and Code Templates`-->`Files` 

## 大小写转换

> `Ctrl`+`shift`+`U`

## 自动去除不使用的包

> `Ctrl`+`Alt`+`O` `手动去除不使用的import`
>
> `File`+`Setting`+`General`+`Auto Import+Optimize imports on the fly` `自动去除不使用的包`

## tomcat乱码问题

> ## `-Dfile.encoding=UTF-8` 

```shell
# 修改 tomcat/conf/logging.properties 文件中的 java.util.logging.ConsoleHandler.encoding = UTF-8
# 修改为 java.util.logging.ConsoleHandler.encoding = GBK

# 修改 tomcat/bin/catalina.bat 中 216行 set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%
# 修改为 set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS% -server -Dfile.encoding=GBK"
```


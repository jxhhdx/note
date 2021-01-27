# Linux

## 资源管理命令

```shell
# 查看内核版本
cat /proc/version
uname -srm 
cat /etc/issue
# 查看CPU
# 查看内存
# 查看硬盘
df -lh
# 查看应用占用资源
ps aux # CPU 内存占比 虚拟内存kb 物理内存kb
top 
#top - 21:54:34 up 75 days,  9:33,  1 user,  load average: 0.00, 0.03, 0.05 (1,5,15分钟)
#Tasks:  93 total,   1 running,  92 sleeping,   0 stopped(停止进程),   0 zombie(僵尸进程)
#%Cpu(s):  0.3 us(用户),  0.7 sy(系统),  0.0 ni, 98.7 id(空闲),  0.3 wa,  0.0 hi,  0.0 si,  0.0 st
#KiB(内存) Mem :  1882192 total,    73180 free,(空闲)   571040 used,  1237972 buff/cache
#KiB Swap:        0 total,        0 free,        0 used.  1119552 avail Mem 
```



## 目录管理命令行
- **目录查看、切换、显示当前目录**
  	

  ```shell
  ls [-al] [文件或者目录]		
  cd [目录名称]“~”//家目录 “-”//上次的目录 “.”//本地目录 “..”//上级目录
  pwd
  ```

- **目录创建与删除**
  	

  ```shell
  mkdir [-p//递归建立所需] 目录名称
  rmdir [-p//递归删除所需] 目录名称
  ```
## 文件操作命令
- **快捷方式创建**
  ​	 

  ```shell
  ln  [-s//建立软链接（类似于快捷方式），否则硬链接（硬链接就是相当于复制，但是二者内容永远一样）] 源文件 目标文件。
  ```

- **文件创建与查看**

  ```shell
  touch #文件名 
  stat #[文件//查看文件状态]
  ```

- **文件查看**
  
  ```shell
  cat/more/less/head/tail/...
  ```

## 目录及文件管理命令
- **复制、移动、删除**

```shell
cp [-r] 源文件 目标文件
mv 源文件 目标文件
rm [-rf] 文件或目录
```
- **查找**

```shell
which 命令名 #查找命令
whereis 文件或目录 
find 目录 [-name/user/size] 参数
```

## 用户管理命令
- **用户管理**
```shell
who  # 查看用户命令
useradd [-g 群组] 用户名  #添加用户命令
passwd 用户名  # 添加用户密码
userdel [-r] 用户名  # 删除用户
```
- **群组管理**
```shell
groups [用户名]  # 查看用户群组
groupadd 群组名  # 创建群组
groupdel 群组名  # 删除群组
usermod [-g 群组] 用户名  #用户群组修改
```

## 权限管理命令

- **权限、角色的设置**

```shell
chown [-R] 用户名 文件或目录  # 修改所有者
chown [-R] 用户名：组名 文件或目录  # 修改所有者和组
chgrp组名 文件或目录  # 修改说是组
chmod [-R] xyz 文件或目  # x：4ugoa；y：2+-=；z1rwx 修改权限
```

## 压缩命令、解压缩命令
```shell
zip [-r//压缩目录] 压缩名 源文件
unzip [-d //指定压缩位置][文件位置] 源文件

gzip [-r//压缩目录] 源文件
gunzip 要解压的文件

bzip2 [-k//保留源文件 v显示压缩信息] 源文件
bunzip2 要解压文件

tar [-cvf //打包 -xvf //解包 -tf 
//查看压缩 -zcvf //gz格式压缩 -jcvf //bz2格式压缩] [指定压缩名] 源文件
```

## 软件的安装与卸载

- 源码包安装
  > 下载源码包(curl 、wget)
  > 解压（tar）
  > 进入到该目录
  > 编译前配置
  > 编译
  > 编译安装
  > 删除make clean 然后直接删除目录
  > rpm包安装
  
- 下载rpm安装包
  > rpm -ivh软件包
  >  -i安装 -v显示详细信息 -h显示进度
  >  查询包信息 rpm -q 安装包
  >  查询包信息 rpm -qi 安装包
  >  查询安装位置 rpm -ql 安装包
  >  卸载 rpm -e 安装包
  
- yum安装管理rpm包
  > 查询可以安装的软件包yum
  > 安装 yum [-y] install 软件包
  > -y 自动回答 yes

# vim编辑器
```shell
# vi编辑器：命令模式（可以向其它模式转换）、编辑模式(可以进行文件编辑)、最后行模式
```

# JDK环境的部署与项目发布
```shell
# 应用的上传 没有的话使用yum -y install lrzsz
rz
# 或下载
wget https://imcfile.oss-cn-beijing.aliyuncs.com/shizhan/file/liaoshixiong/jdk-8u231-linux-x64.tar.gz
# 解压
tar zxvf jdk-8u231-linux-x64.tar.gz
# 移动到/usr/local/目录之下
mv jdk1.8.0_231 /usr/local/

vim .bash_profile
JAVA_HOME=/usr/local/jdk1.8.0_231
PATH=$PATH:$JAVA_HOME/bin
source .bash_profile
java -version
# JDK环境的配置
 
# 下载文件后给予777权限
# 拷贝到/opt目录下
# 解压jdk
# 解压后进入jdk目录
# 拷贝jdk目录
vim /etc/profile
# JAVA_HOME=
# CLASSPATH=.:$JAVA_HOME/lib
# PATH=$PATH:&JAVA_HOME/bin

export JAVA_HOME CLASSPATH PATH
source profile  # 使文件生效 
java -version javac  # 检查是否正常
```

+ 如果项目之中已经存在openJDK，使用如下方式卸载

```shell
rpm -qa|grep openjdk -i # 检查
rpm -e --nodeps 需要删除的软件
```




## 发布java项目

+ tomcat运行项目

```shell
# tomcat下载linux版服务器、安装、启动
# 普通项目直接打包war之后放入webapp
# springboot war打包
## [1] 修改打包方式为war
## [2] 排除springboot自带的tomcat，添加servlet包
#<dependency>
#    <groupId>javax.servlet</groupId>
#    <artifactId>javax.servlet-api</artifactId>
#    <version>3.1.0</version>
#    <scope>provided</scope>
#</dependency>
## [3] 修改入口类
#public class WarStarterApplication extends SpringBootServletInitializer {
#    @Override
#    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
#        return builder.sources(WuancakeApiApplication.class);
#    }
#}
## [4] mvn clean pakcage -Dmaven.test.skip=true
```

+ service方式运行

> `/etc/systemd/system/mall.service`,如下是配置示例

```shell
[Unit]
Description=mall
After=syslog.target
[Service]
User=root
ExecStart=/usr/local/jdk1.8.0_231/bin/java -jar -Dspring.profiles.active=prod /root/mall.jar
[Install]
WantedBy=multi-user.target

[Unit]
Description=wuancake_api
After=syslog.target
[Service]
User=root
ExecStart=/usr/local/jdk1.8.0_231/bin/java -jar -Dlogging.path=/root/logs/mall/ /root/wuancake_api.jar
[Install]
WantedBy=multi-user.target
```


# mysql安装

```shell
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
vi /etc/my.cnf    #编辑文件，找到[mysqld]，在下面添加一行skip-grant-tables
service mysqld restart
update mysql.user set password=password('123456') where User="root" and Host="localhost";
flush privileges;  #刷新系统授权表
grant all on *.* to 'root'@'localhost' identified by '123456' with grant option;
# 注释掉skip-grant-tables，重启mysql
# use mysql; 
# update user set host='%' where user='root' and host='localhost'; 
# select host,user from user; flush privileges;
```

```shell
# 开放3306端口
firewall-cmd --permanent --add-port=3306/tcp
#重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload
```

# nodejs安装

```shell
sudo apt-get install nodejs # 安装nodejs
sudo apt-get install npm    # 安装npm管理器
npm install webpack -g      # 安装webpack
npm install vue-cli -g      # 安装vue-cli脚手架
npm install -g cnpm --registry=https://registry.npm.taobao.org # 使用淘宝镜像
```

```shell
# 指定URL
export TF_BINARY_URL=https://storage.googleapis.com/tensorflow/li
nux/gpu/tensorflow_gpu-2.0.0-cp36-cp36m-linux_x86_64.whl 
# 使用指定的URL从pip管理器下载安装tensorflow
pip3 install --upgrade $TF_BINARY_URL 
```

# node安装

```shell
# wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz    // 下载
# tar xf  node-v10.9.0-linux-x64.tar.xz       // 解压
# cd node-v10.9.0-linux-x64/                  // 进入解压目录
# ./bin/node -v                               // 执行node命令 查看版本
# v10.9.0                                     // 结果
# ln -s /usr/software/nodejs/bin/npm   /usr/local/bin/                  // 设置命令软链接
# ln -s /usr/software/nodejs/bin/node   /usr/local/bin/
```

```json
This is a test . <eos>
[90, 13, 9, 689, 4, 2]
INFO:tensorflow:Restoring parameters from ./seq2seq_ckpt-9000
[  1  10   7   9  12 411 271   6   2]
<sos> 这 是 一 个 测 试 。 <eos>
```

| 名称    | 类型 | 是否填 | 作用           |
| ------- | ---- | ------ | -------------- |
| From    | TEXT | 否     | 指定翻译的语言 |
| To      | TEXT | 否     | 翻译的目标语言 |
| src     | TEXT | 否     | 原文           |
| dst     | TEXT | 是     | 译文           |
| error   | TEXT | 是     | 错误代码       |
| status  | TEXT | 是     | 状态           |
| context | TEXT | 否     | 内容           |
| other   | TEXT | 否     | 其它           |

# 防火墙的配置

## iptables防火墙

```shell
一、iptables防火墙
1、基本操作

# 查看防火墙状态
service iptables status  

# 停止防火墙
service iptables stop  

# 启动防火墙
service iptables start  

# 重启防火墙
service iptables restart  

# 永久关闭防火墙
chkconfig iptables off  

# 永久关闭后重启
chkconfig iptables on　　

2、开启80端口
vim /etc/sysconfig/iptables
# 加入如下代码
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
保存退出后重启防火墙
service iptables restart

```

## firewall防火墙

```shell
二、firewall防火墙
1、查看firewall服务状态

systemctl status firewalld

出现Active: active (running)切高亮显示则表示是启动状态。

出现 Active: inactive (dead)灰色表示停止，看单词也行。
2、查看firewall的状态

firewall-cmd --state
3、开启、重启、关闭、firewalld.service服务

# 开启
service firewalld start
# 重启
service firewalld restart
# 关闭
service firewalld stop
4、查看防火墙规则

firewall-cmd --list-all
5、查询、开放、关闭端口

# 查询端口是否开放
firewall-cmd --query-port=8080/tcp
# 开放80端口
firewall-cmd --permanent --add-port=80/tcp
# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp
#重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload

# 参数解释
1、firewall-cmd：是Linux提供的操作firewall的一个工具；
2、--permanent：表示设置为持久；
3、--add-port：标识添加的端口；
```

# nginx 安装及配置、使用



```shell
# 下载
wget https://imcfile.oss-cn-beijing.aliyuncs.com/shizhan/file/liaoshixiong/nginx-1.16.1.tar.gz 
# 解压
tar zxvf nginx-1.16.1.tar.gz
# 解压之后进入目录
cd nginx-1.16.1/

## 更新yum
yum update
## 安装插件
yum install -y zlib-devel openssl openssl-devel
# 设置安装目录
./configure --prefix=/usr/local/nginx
# 编译安装
make
make install
# 启动nginx
nginx
# 配置快捷
cd ~
vim .bash_profile
# 进行如下配置PATH=$PATH:/usr/local/nginx/sbin
source .bash_profile
# 查看运行状态
ps -ef | grep nginx
```

+ nginx.conf配置结构

```shell
# main 全局配置
# events 配置工作模式以及连接数
# http http相关配置
  ## server 配置虚拟主机，可以有多个
     ### location路由规则，表达式
     ### upstream 集群，内网服务器、负载均衡
```

* main配置

```shell
#user  nobody; 指定运行的用户，默认是nobody
worker_processes  1; # cpu数
# debug info notice warn error crit
#error_log  logs/error.log; 错误日志 默认
#error_log  logs/error.log  notice; 日志级别
#error_log  logs/error.log  info;

#pid        logs/nginx.pid; 进程号
```

+ nginx日志切割

 1. 创建一个可执行文件`cut_my_log.sh`，进行日志分割,文件内容如下

```shell
# ! /bin/bash
LOG_PATH="/var/log/nginx/"
RECORD_TIME=$(date -d "yesterday" +%Y-%m-%d+%H:%M)
PID=/var/run/nginx/nginx.pid
mv ${LOG_PATH}/access.log ${LOG_PATH}/access.${RECORD_TIME}.log
mv ${LOG_PATH}/error.log ${LOG_PATH}/error.${RECORD_TIME}.1og
#向Nginx主进程发送信号，用于重新打开日志文件
kill -USR1 `cat $PID`
```

2. 授予权限后执行即可进行日志手动分割,`chmod +x cut_my_log.sh`

# redis安装

```shell
tar zxvf redis-5.0.5.tar.gz
cd redis-5.0.5/
yum install gcc-c++
make 
make install
mkdir utils
cd utils
cp redis_init_script /etc/init.d/
cp redis.conf /usr/local/redis
mkdir /usr/local/redis
cd /usr/local/redis
vim /usr/local/redis/redis.conf
## 对配置文件进行如下修改
# port 6379 修改端口
# bind 0.0.0.0 修改可以访问的ip
# daemonize yes 是否可以客户端访问
# dir /usr/local/redis/working 设置工作空间
# requirepass 9H8J3um2 设置密码
## 修改redis脚本
vim /etc/init.d/redis_init_script 
# CONF="/usr/local/redis/redis.conf" 设置配置文件的位置
chmod 777 redis_init_script
./redis_init_script start 
## 如果需要redis跟随服务器启动进行如下配置
vim /etc/init.d/redis_init_script 
# #chkconfig: 22345 10 90 设置自启动
# #description: Start and Stop redis 设置自启动
chkconfig redis_init_script on # 设置自启动

```



# docker安装

```shell
 # 下载docker
 curl -fsSL https://get.docker.com | bash -s docker 
 # 启动docker
 systemctl restart docker
 # 安装 rabbitmq
 docker run -d -p 5672:5672 -p 15672:15672 registry.cn-shanghai.aliyuncs.com/springcloud-imooc/rabbitmq:3.8.2-management
 
 
 
```

> 更多docker资料见`./docker`


# 实战题

1. 查看正在执行的的进程
> ps aux | cat
2. 拆查询指定进程ID（27380）打开的文件
> ps aux | grep 27380
3. 杀死指定PID的进程
> kill -s 9 PID
4. 计算文件的行数，字数或字符数
> wc
5. 显示进程并实时更新
> top
6. 调用top命令的`-H` 选项会列出所有的linux进程
7. 查看username的进程所打开的文件
> lsof
8. 在ps命令中，`-T`选项可以开启线程查看，下面的命令列出了由进程号为的进程创建的所有线程
> 
9. 比较两个文件
10. 后台执行，通过在shell中输入exit来退出终端
11. 查看正在执行的任务
12. 多线程执行
13. 查看进程和线程的树形结构关系
14. ps命令`-L`参数显示进程，并尽量显示其LWP（线程ID）和NLWP（线程的个数）
15. ps命令查看线程在那个CPU上运行
16. 取出文件的前几行
17. 动态查看文件变化
18. 退出`tail -f`
19. tail程序放到后台等处理完其它事情再用fg命令转到前台
20. 查看文件夹和子目录的大小
21. 设定定时任务
22. 重命名文件和文件夹
23. 复制剪切清空和删除文件
24. Linux通信




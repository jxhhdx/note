## 安装

>  https://www.runoob.com/docker/docker-install-ubuntu.html 

## 基本使用

+ docker版本管理

```shell
# 查看版本
docker version 或 docker info 
# 查找镜像
docker search [name]
```
+ image镜像管理
```shell
# 查看镜像仓库
docker images 或 docker image ls
# 删除镜像
docker image rm [imageName] 简写： docker rmi
# 下载镜像
docker image pull hello-world
# 编译镜像
docker build
```
+ 容器管理container

```shell
# 运行容器
docker container run [containerName] 简写：docker run 
# 删除容器
docker container rm [containID] 简写： docker rm
# 杀死容器
docker container kill [containID]
# 查看容器
docker container ls 或者 docker container ls --all 简写: docker ls 或者 docker ls -a
# host拷贝到容器
docker cp
# 保存拷贝之后的镜像
docker commit
```
```shell

# 后台运行
docker run -itd --name 自定义名字 镜像名字 /bin/bash
# 进入容器
docker exec -it id或者名称 /bin/bash
```

## Dockerfile

```shell
# 编译dockerfile文件
docker build -t runoob/centos:6.7 .
```


## Dockerfile常用命令

| 命令       | 用途                                                         |
| :--------- | ------------------------------------------------------------ |
| FROM       | 基础镜像（base image）                                       |
| RUN        | 执行命令                                                     |
| ADD        | 添加文件                                                     |
| COPY       | 拷贝文件                                                     |
| CMD        | 执行命令（CMD和RUN的区别在于CMD只能有一个，RUN可以有多个，CMD是在容器创建完成之后执行，RUN是在容器创建之后执行） |
| EXPOSE     | 暴露端口                                                     |
| 命令       | 用途                                                         |
| WORKDIR    | 指定路径                                                     |
| MAINTAINER | 维护者                                                       |
| ENV        | 设置环境变量                                                 |
| ENTRYPOINT | 容器入口                                                     |
| USER       | 指定用户                                                     |
| VOLUME     | 挂载节点                                                     |

## Volume

+ 提供独立于容器之外的持久化存储

## volume的三种方法

1. docker run -d --name nginx_a -v /usr/share/nginx/html nginx


## 命令大全

>  https://www.runoob.com/docker/docker-command-manual.html 

## 镜像、资料

>   [Docker 资源汇总](https://www.runoob.com/docker/docker-resources.html)
>   [Docker 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html) 


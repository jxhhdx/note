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
docker image rm [imageName]
# 下载镜像
docker image pull hello-world
```
+ 容器管理container

```shell
# 运行容器
docker container run [containerName]
# 删除容器
docker container rm [containID]
# 杀死容器
docker container kill [containID]
# 查看容器
docker container ls 或者 docker container ls --all
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

## 命令大全

>  https://www.runoob.com/docker/docker-command-manual.html 

## 镜像、资料

>  https://www.runoob.com/docker/docker-resources.html 
>
>   [Docker 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html) 
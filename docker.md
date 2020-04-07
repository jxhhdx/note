## 安装

>  https://www.runoob.com/docker/docker-install-ubuntu.html 

## 基本使用

```shell
# 查看镜像仓库
docker images  
# 后台运行
docker run -itd --name 自定义名字 镜像名字 /bin/bash
# 停止容器
docker stop
# 重启容器
docker restart
# 进入容器
docker exec -it id或者名称 /bin/bash
# 查看容器
docker ps -a 
# 查看docker信息 /etc/docker/daemon.json
docker info 
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
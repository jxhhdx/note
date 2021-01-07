# Electron

+ 使用JavaScript、HTML、CSS构建跨平台桌面应用

## 配置环境

> 安装Git、Node，搭建环境参考Electron官网；

## Electron进程

1. 主进程-Main Process

+ 可以使用和系统对接的Electron API - 创建菜单上传文件等等
+ 创建 渲染进程 - Renderer Process
+ 全面支持Node.js
+ 唯一性，作为程序的入口点

2. 渲染进程 - Renderer Process

+ 可以使用一部分Electron提供的API
+ 每一个都是单独的进程
+ 全面支持Node.js和DOM API
+ 可以使用一部分Electron提供的API


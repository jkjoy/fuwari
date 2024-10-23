---
title: 如何在Fly.io部署typecho
published: 2023-09-06
description: 这篇文章介绍了如何在FLY.IO上部署Typecho博客系统，使用的是jkjoy/typecho:latest镜像，该镜像包含nginx、php7.4、sqlite和Typecho 1.2.1。文章详细说明了注册FLY.IO、安装flyctl工具、新建APP、编辑FLY.TOML文件、添加持久卷以及部署过程。此外，还提供了进阶操作指南，包括如何通过SSH连接到容器、使用apt命令、下载主题和插件等。
tags: ['typecho']
category: 默认
slug: how-to-deploy-typecho-in-fly.io
draft: false
---
 
## 使用镜像

jkjoy/typecho:latest

`latest` 内置`testore`插件

`nginx` + `php7.4` + `sqlite` + `typecho 1.2.1`
## 准备工作

- 注册FLY.IO 
用以部署typecho

## 安装flyctl
Install flyctl 
以WINDOWS为例
```
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```
其他系统请参照官方
## 新建APP
初始化
```
flyctl launch
```
按照提示选择会生成一个FLY.TOML文件

## 编辑FLY.TOML
添加以下
```
# fly.toml app configuration file generated for gotos on 2023-08-12T19:36:14+08:00
#
# See https://fly.io/docs/reference/configuration/ for information about how to use this file.
#

app = "typecho"
primary_region = "hkg"

[experimental]
  vm = true

[build]
  image = "jkjoy/typecho:latest"

[env]
  PHP_MAX_EXECUTION_TIME = 600
  PHP_TZ = "Asia/Shanghai"
  
[[mounts]]
  source = "typecho_data"
  destination = "/usr/share/nginx/html/usr/"

[http_service]
  internal_port = 80
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 1
  processes = ["app"]
```
## 添加持久卷
```
flyctl volumes create typecho_data --region hkg --size 1
```
## 部署
```
flyctl deploy
```
## 演示地址

https://avnvu.fly.dev/

## 进阶
在`fly.toml`的文件同目录下执行

```
fly ssh console
```

此时会自动连接到此 APP 容器的 SSH 服务
由于我所使用的镜像是由`Ubuntu`构建,可以使用 apt 命令

此处列出 typecho 所在目录`/usr/share/nginx/html/`
此为 nginx 默认的网站目录

在`github`上找到自己需要的`主题`或者`插件`可以使用

```
git clone
```

来下载到网站的相应目录下,即可

当然你也可以打包好所有的插件和模板为 zip 格式
使用`wget`的方式在容器内解压缩
使用`unzip`命令即可

为了不让 app 重启后丢失数据 我建议映射`/usr/share/nginx/html/`下的`usr`目录.

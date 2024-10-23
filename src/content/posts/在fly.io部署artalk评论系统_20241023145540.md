---
title: 在fly.io部署artalk评论系统
published: 2023-08-15
description: 这篇文章介绍了如何在Fly.io平台上使用其提供的免费服务，包括安装flyctl命令行工具、创建应用、分配1G硬盘空间以及编辑FLY.TOML文件来设置管理员账号和重启服务的步骤。Fly.io提供三个256MB内存的服务器和总3G硬盘空间，但需要绑定信用卡以防止滥用。
tags: ['artalk']
category: 默认
slug: deploy-the-artalk-review-system-in-fly.io
draft: false
---
众所周知`Fly.io`是一个免费的SAAS平台
提供三个内存为256MB的服务器,总3G硬盘空间.
为防止滥用,需要绑定信用卡.
## 准备
安装官方的命令行工具flyctl

## 初始化
```
flyctl launch
```
根据提示创建一个app

## 创建一个1G的硬盘
1G的硬盘用来储存评论数据绰绰有余了
```
flyctl volumes create artalk_data --region hkg --size 1
```
## 编辑FLY.TOML

```
#根据自动生成的FLY.TOML文件修改
app = "atim"  
primary_region = "hkg"

[build]
  image = "artalk/artalk-go"

[http_service]
  internal_port = 23366
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[mounts]]
  source = "artalk_data"
  destination = "/data"

[experimental]
  vm = true
```
## 在 fly.toml 文件目录执行
```
flyctl ssh console
```
创建一个管理员账号
```
./artalk admin
```
如需重启则执行
```
flyctl apps restart
```

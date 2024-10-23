---
title: 在fly.io部署Alist
published: 2024-01-27
description: 这篇文章介绍了如何在Windows系统上安装FLYCTL工具，并详细说明了初始化、创建应用、设置参数、编辑配置文件、部署应用以及获取管理员密码的步骤。文章通过图文结合的方式，展示了每一步的操作流程，并提供了一个演示链接以供参考。
tags: ['部署', 'Alist']
category: 分享
slug: deploy-alist-in-fly.io
draft: false
---

## 安装flyctl
此处以Windows安装为例
```bash
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

## 初始化
```bash
flyctl launch
```
按照提示创建一个app
![image](https://images.loliko.cn/2024/01/QQ%E6%88%AA%E5%9B%BE20240127183905.png)
选择`N`会跳出网页要求填写
![image](https://images.loliko.cn/2024/01/QQ%E6%88%AA%E5%9B%BE20240127184113.png)
`APP name` 自己设置
`port` 为5244
`RAM`选择`256MB`

## 创建一个1G的可持久卷
```
flyctl volumes create alist_data --region hkg --size 1
```
## 编辑fly.toml
参照以下内容编辑
```yaml
app = "alist"
primary_region = "hkg"

[build]
  image = "xhofe/alist:latest"

[env]
  PUID = "0"
  PGID = "0"
  UMASK = "022"

[[mounts]]
  source = "alist_data"
  destination = "/opt/alist/data"

[http_service]
  internal_port = 5244
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[vm]]
  cpu_kind = "shared"
  cpus = 1
  memory_mb = 256
```
## 部署
```bash
flyctl deploy
```
等待完成,会得到一个网址


## 演示
https://so4.fly.dev

## 获取管理员密码

进入SSH
```bash
flyctl ssh console
```
执行
```bash
./alist admin set NEW_PASSWORD
```
`NEW_PASSWORD`为自己设置的密码

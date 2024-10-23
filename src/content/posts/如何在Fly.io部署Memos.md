---
title: 如何在Fly.io部署Memos
published: 2023-08-15
description: 这篇文章介绍了如何在FLY.IO上部署memos应用，并使用Backblaze B2云存储进行数据库备份。文章详细说明了注册FLY.IO和Backblaze B2的步骤，安装flyctl工具，创建和配置FLY.TOML文件，添加持久卷和密钥，最后进行应用部署。此外，还提供了演示地址和绑定域名的示例。
tags: ['Memos']
category: 默认
slug: how-to-deploy-memos-in-fly.io
draft: false
---
 
## 项目
https://github.com/hu3rror/memos-on-fly
## 准备工作

- 注册FLY.IO 
用以部署memos
- 注册B2C 
https://www.backblaze.com/cloud-storage
 用以同步备份memos数据库
 新建BUCKET,并获取`<keyId>`和`<applicationKey>`


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
[build]
  image = "ghcr.io/hu3rror/memos-litestream:latest"
#如果不需要备份数据库则可以选择官方的docker镜像ghcr.io/usememos/memos:latest
#使用官方镜像可以删掉env的部分
[env]
  # Details see: https://litestream.io/guides/backblaze/
  LITESTREAM_REPLICA_BUCKET = "B2C桶名称"     # change to your litestream bucket name
  LITESTREAM_REPLICA_ENDPOINT = "s3.us-east-005.backblazeb2.com"     # change to your litestream endpoint url
  LITESTREAM_REPLICA_PATH = "memos_prod.db"     # keep the default or change to whatever path you want

[[mounts]]
  source = "memos_data"
  destination = "/var/opt/memos"

[http_service]
  internal_port = 5230
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 0
```
## 添加持久卷
```
flyctl volumes create memos_data --region hkg --size 1
```
## 密钥
将B2存储的密钥添加到fly的密钥存储中,使用官方镜像可以忽略此步骤
```
flyctl secrets set LITESTREAM_ACCESS_KEY_ID="<keyId>" LITESTREAM_SECRET_ACCESS_KEY="<applicationKey>"
```
## 部署
```
flyctl deploy
```
## 演示地址
https://memosim.fly.dev/
绑定域名演示
https://imad.top

---
title: 在fly.io部署Gotosocial
published: 2023-08-17
description: 这篇文章介绍了如何安装和配置GoToSocial，一个轻量级的ActivityPub联邦社交网络程序。文章详细说明了注册Fly.io和Cloudflare账户的步骤，安装FLYCTL的方法，以及如何在不同操作系统上进行操作。此外，还涵盖了创建应用、储存卷、编辑配置文件、部署应用、创建用户和管理员账户的具体步骤，并提供了演示链接和下载数据库的方法。
tags: ['Gotosocial', 'fly.io', '部署']
category: 分享
slug: deploy-gotosocial-in-fly.io
draft: false
---

## 关于Gotosocial

GoToSocial 是一个十分轻量（轻量到甚至没有用户界面，需要使用第三方程序登录、兼容 Mastodon 应用进行使用）的 ActivityPub 联邦社交网络程序，自建 GoToSocial 可以避免您的信息因为所在实例倒闭、不可抗力等原因化为乌有。

## 准备

- 注册 Fly.io 账号，并绑卡（避免滥用）；
- 注册 Cloudflare 并启用 R2，启用 R2 需要绑卡。新建一个储存桶并创建一个 API 令牌。

## 安装 flyctl

- Linux

```
curl -L https://fly.io/install.sh | sh
```

- macOS

```
curl -L https://fly.io/install.sh | sh
```

- Windows，需要开启 RemoteSigned: 管理员运行

```
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

## 登录

```
flyctl auth login

# 若登录失败使用
# flyctl auth login -i 
# 输入账号密码进行登录
```

## 创建APP

`YOURAPPNAME`更改为自己希望设置的名称

```
flyctl launch --name YOURAPPNAME --image=superseriousbusiness/gotosocial:latest --region hkg --no-deploy
```

## 创建储存卷

```
flyctl volumes create social_data --region hkg --size 1
```

## 编辑配置

编辑根目录下的 `fly.toml` 配置文件，参考下方

```
app = "gotos" ## 自定义名称
primary_region = "hkg" ##服务器节点,当前为香港

[experimental]
  vm = true

[build]
  image = "superseriousbusiness/gotosocial:latest"

[env]
  GTS_DB_ADDRESS = "/gotosocial/storage/sqlite.db"
  GTS_DB_TLS_MODE = "enable"
  GTS_DB_TYPE = "sqlite"
  GTS_HOST = "GTS的域名"
  GTS_LETSENCRYPT_ENABLED = "false"
  GTS_STORAGE_BACKEND = "s3"
  GTS_STORAGE_S3_BUCKET = "BUCKET名称"
  GTS_STORAGE_S3_ENDPOINT = "#S3 API"
  GTS_STORAGE_S3_ACCESS_KEY = "#api-tokens"
  GTS_STORAGE_S3_SECRET_KEY = "#api-tokens"
  GTS_STORAGE_S3_PROXY = "true"
  # 添加时区为UTC+8
  TZ = "Asia/Chongqing"

[[mounts]]
  source = "social_data"
  destination = "/gotosocial/storage"

[http_service]
  internal_port = 8080
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 1
  processes = ["app"]
```

以上配置中`GTS_STORAGE_S3_ENDPOINT`不需要带`https:`和最后的`/BUCKET名称`

## 部署

```
flyctl deploy
```

启动成功后会显示一个URL,能成功访问则代表部署成功。

## 创建用户和管理员

在 `fly.toml `文件目录执行

```
flyctl ssh console
```

-  创建用户

```
/gotosocial/gotosocial admin account create --username YOUR_USERNAME --email YOUR@EMAIL.COM --password 'SOME_VERY_GOOD_PASSWD'
```

`YOUR_USERNAME`为用户名
`YOUR@EMAIL.COM`为邮箱
`SOME_VERY_GOOD_PASSWD`为密码,需设置足够复杂,太简单会提示密码不够安全,需重新设置

- 设置管理员

```
/gotosocial/gotosocial admin account promote --username YOUR_USERNAME
```

## 演示

https://m.ima.cm

https://m.ima.cm/@jkjoy

## 下载数据库
在 `fly.toml `文件目录执行
```
flyctl sftp get /gotosocial/storage/sqlite.db
```

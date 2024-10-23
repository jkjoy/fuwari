---
title: 使用cloudflare Tunnels实现内网穿透
published: 2024-10-10
description: 这篇文章介绍了如何使用Cloudflare Tunnels实现内网穿透的详细步骤。首先，需要准备一个顶级域名并更改DNS解析服务器。接着，通过Cloudflare的Tunnels页面创建一个新的Tunnel，并为其命名。文章以群晖为例，说明了如何在Docker中启动服务，并在ROOT权限下执行相关命令。最后，配置Subdomain、Domain、Path、Type和URL等参数，保存设置后即可通过演示地址访问内网服务。
tags: ['cloudflare']
category: 默认
slug: use-cloudflare-tunnels-to-implement-internal-network-penetration
draft: false
---
## 使用cloudflare Tunnels实现内网穿透

### 准备工作

* 一个顶级域名
* 更改DNS解析服务器
* 等待生效

### 打开 [Tunnels](https://one.dash.cloudflare.com/165012cc0f623729405e26de2fb3f876/access/tunnels)

![](https://blog.dasbid.com//upload/image.png)

### 点击**create a Tunnels**

![](https://blog.dasbid.com/upload/image-bvkn.png)![](https://blog.dasbid.com//upload/image.png)

### 随意输入一个名称用以区分

![](https://blog.dasbid.com//upload/image-qzcq.png)

选一个服务端软件\~用以启动\~

### 以群晖为例

群晖就选择**docker**

![](https://blog.dasbid.com//upload/image-jjnh.png)复制命令行启动\~

#### **群晖要在root权限下执行**

#### 获取root只需要

```bash

sudo su
```

![](https://blog.dasbid.com//upload/image-jsyd.png)

#### 按需填写

**Subdomain** 随便一个A记录

**Domain **选择一个域名

**Path **可以为空

**Type**可以填写HTTP或者HTTPS

**URL **填写localhost加上端口号

保存即可\~

#### 演示地址

[https://h.imsun.pw](https://h.imsun.pw)

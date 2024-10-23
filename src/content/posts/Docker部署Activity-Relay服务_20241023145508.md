---
title: Docker部署Activity-Relay服务
published: 2023-10-03
description: 这篇文章介绍了在CentOS 7.9环境下部署一个项目的过程，包括安装必要的软件（如git、openssl、nginx、docker和docker-compose），从仓库拉取代码，编辑配置文件，生成RSA证书，构建并运行Docker镜像，查看容器状态，以及停止服务的步骤。同时还提到了Ubuntu和CentOS在生成证书时的不同命令，以及权限设置和Nginx配置的相关参考。
tags: ['Docker']
category: 默认
slug: docker-deploy-activity-relay-service
draft: false
---
- 经过测试国内部署会有无法通讯的问题.
## 测试环境
centos7.9
## 准备工作
- git
- openssl
- nginx
- docker
- docker-compose
## 从仓库Pull a repository
```
git clone https://github.com/yukimochi/Activity-Relay.git -b v2.0.0
```
 

## 复制编辑config.yml
进入`Activity-Relay`目录
```
cd Activity-Relay
cp config.yml.example config.yml
```
修改相关配置
```
vim config.yml
```
## 生成actor RSA 证书 ./actor.pem
ubuntu使用
```
openssl genrsa -traditional | tee actor.pem
```
centos使用
```
openssl genrsa -out actor.pem 1024 | tee actor.pem
```
赋予权限600
```
chmod 600 actor.pem
```
## 构建镜像与运行服务

```
docker-compose build
docker-compose up -d
```
## 查看容器运行状态

```
docker-compose ps
```
## 停止服务

```
docker-compose down
```

## 相关参考
docker-compose配置

```
version: "2.3"
services:
  redis:
    restart: always
    image: redis:alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
    volumes:
      - "./redisdata:/data"

  worker:
    container_name: worker
    build: .
    image: yukimochi/activity-relay
    working_dir: /var/lib/relay
    restart: always
    init: true
    command: relay worker
    volumes:
      - "./actor.pem:/var/lib/relay/actor.pem"
      - "./config.yml:/var/lib/relay/config.yml"
    depends_on:
      - redis

  server:
    container_name: relay
    build: .
    image: yukimochi/activity-relay
    working_dir: /var/lib/relay
    restart: always
    init: true
    ports:
      - "8080:8080"
    command: relay server
    volumes:
      - "./actor.pem:/var/lib/relay/actor.pem"
      - "./config.yml:/var/lib/relay/config.yml"
    depends_on:
      - redis

```



Nginx设置

```
upstream relay {
    server 127.0.0.1:8080;
  }
  server {
    server_name relay.example.com;

    location / {
      root /var/lib/relay;
      try_files $uri $uri/index.html =404;
    }

    location /inbox {
      rewrite ^/inbox(.*) /$1 break;
      proxy_pass http://relay/;
      proxy_pass_request_headers on;
      proxy_set_header Host $http_host;
    }

    location /actor {
      rewrite ^/inbox(.*) /$1 break;
      proxy_pass http://relay/;
      proxy_pass_request_headers on;
      proxy_set_header Host $http_host;
    }

  }

```
---
title: 测试xiuno2Sforum中遇到的各种问题
published: 2023-10-06
description: 这篇文章介绍了如何将XiunoBBS数据转换为SForum的过程，使用的是SForum v2.2.2版本。文章详细描述了测试环境配置，包括Ubuntu 22.0.4、PHP8.0、MariaDB10.6、Composer、Redis和Nginx或Apache的安装与配置。此外，还涉及了PHP扩展ZIPARCHIVE的安装问题解决，以及通过Composer安装Medoo类库，创建和导入MariaDB数据库，安装Redis和Nginx，最后完成SForum v2.2.2的安装步骤。
tags: ['SForum']
category: 默认
slug: test-various-problems-encountered-in-xiuno2sforum
draft: false
---
想把`xiuno`bbs数据转换成`SForum`,由于最新版本的`SForum`没有转换工具支持
于是采用`Sforum` v2.2.2测试

# 测试环境

- Ubuntu 22.0.4
- php8.0
- mariadb10.6
- composer
- redis
- nginx or apache

## 测试程序
sforum v2.2.2

xiuno2sforum v2.2.2
## PHP
###  安装PPA 源
需要使用 PPA 源安装：
```
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
```
#### 安装php8.0

```
apt install php8.0
```
```
apt install -y php8.0-dev
```
#### 安装拓展
```
apt install php8.0-curl php8.0-xml php8.0-gd php8.0-mbstring php8.0-redis php8.0-swoole php8.0-bcmath php-intl -y
```

### 查看php版本
```
php -v
```
查看拓展
```
php -m
```

### 切换PHP版本
```
update-alternatives --config php
```
切换到
```
update-alternatives --set php /usr/bin/php8.0
```


### PHP 扩展 ZipArchive
上传压缩包提示500错误,打开日志发现是缺少组件

#### 服务器上存在多个php版本，手动指定php-config文件
```
./configure --with-php-config=/www/server/php/73/bin/php-config
```
#### 安装ZipArchive扩展
##### 编译`ZipArchive`
```
cd ~
wget http://pecl.php.net/get/zip
tar -zxvf zip
cd zip-x.x.x
phpize
./configure
make
make install
```

#### 成功安装zip之后会返回一个路径：
类似
```
Installing shared extensions:     /www/server/php/8/lib/php/extensions/no-debug-non-zts-20180731/
```
#### 加到php.ini中：
```
extension=/www/server/php/8/lib/php/extensions/no-debug-non-zts-20180731/zip.so
```
或
在` php.ini `中添加
```
 extension=zip.so
```
#### 提示`checking for libzip... not found`
##### 编译`libzip`
```
wget https://libzip.org/download/libzip-1.3.2.tar.gz
tar xvf libzip-1.3.2.tar.gz
cd libzip-1.3.2
./configure
make
make install
export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig/" 
```

### 在使用插件转换数据中一直报错无法使用的class medoo
所以使用cpmposer安装
```
composer require catfan/Medoo
```
## mariadb

### 创建数据库

[Mariadb创建数据库、用户及授权](https://blog.loliko.cn/2023/dfdf0a76.html)
### 数据导入
导入sql备份文件

进入数据库
```
mysql -uroot -p
```
使用数据库bbs
```
use bbs
```
导入sql路径
```
source /root/bbs.sql;
```
## 安装 Redis
```
apt install redis-server
```
## 安装 Nginx
```
apt install nginx
```
##  安装composer
```
apt install git zip unzip
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
```
## 安装SForum v2.2.2
```
composer create-project zhuchunshu/sforum=v2.2.2 sforum
```
进入安装目录，
```
cd sforum
```
按照提示，连续执行命令即可完成安装（启动服务也是此命令）：
```
php CodeFec CodeFec
```

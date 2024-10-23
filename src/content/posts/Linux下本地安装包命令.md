---
title: Linux下本地安装包命令
published: 2022-07-27
description: 这篇文章介绍了在CENTOS系统下如何安装RPM安装包，以及在UBUNTU系统下如何安装DEB安装包。文章可能详细说明了安装步骤和命令，帮助用户在不同Linux发行版上进行软件包的安装。
tags: ['命令', 'linux']
category: 默认
slug: local-installation-package-command-under-linux
draft: false
---
## centos下安装RPM安装包

```bash
sudo yum localinstall file.rpm
```

## ubuntu下安装deb安装包

```bash
 sudo dpkg -i 安装包名称.deb
```

---
title: centos在yum时出现Determining fastest mirrors
published: 2023-10-05
description: 这篇文章介绍了两个关于Yum使用中的问题及其解决方法。第一个问题是yum makecache时卡在Determining fastest mirrors，解决方法是禁用fastestmirror插件，通过修改/etc/yum/pluginconf.d/fastestmirror.conf和/etc/yum.conf文件实现。第二个问题是无法访问ELRepo镜像列表，解决方法是更新ELRepo软件仓库镜像，通过替换/etc/yum.repos.d/elrepo.repo文件中的mirrorlist地址来实现。
tags: ['centos']
category: 默认
slug: centos-appears-at-yum
draft: false
---
## 问题1
在`yum makecache`时，停在`Determining fastest mirrors`，一直在判断最快镜像，由于已经指定了yum源，所以不需要些插件，可以用动禁用。

解决方法：

修改`/etc/yum/pluginconf.d/fastestmirror.conf`里面的`enabled=0`；

修改`/etc/yum.conf`里面的`plugins=0`

问题解决。

## 问题2
Could not retrieve mirrorlist http://mirrors.elrepo.org/mirrors-elrepo.el7 error was
12: Timeout on http://mirrors.elrepo.org/mirrors-elrepo.el7: (28, 'Connection timed out after 30001 milliseconds')

镜像列表http://mirrors.elrepo.org/mirrors-elrepo.el7 的地址无法访问

解决方法

更新ELRepo 软件仓库镜像
首先按照官网的安装说明，配置 ELRepo：
```
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```
按照你的系统版本，运行：
```
yum install https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm
```
接下来是换源，建议先备份 `/etc/yum.repos.d/elrepo.repo` ：
```
cp /etc/yum.repos.d/elrepo.repo /etc/yum.repos.d/elrepo.repo.bak
```
然后编辑` /etc/yum.repos.d/elrepo.repo` 文件，在 `mirrorlist= `后的地址替换为
```
https://mirrors.tuna.tsinghua.edu.cn/elrepo
```
最后，更新软件包缓存
```
yum makecache
```

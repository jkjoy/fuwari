---
title: centos7 ssh连接慢的解决方法
published: 2022-08-12
description: 这篇文章介绍了在Linux系统中修改SSH配置文件的步骤，包括取消注释并修改UseDNS选项为no，以及将GSSAPIAuthentication选项也改为no，最后保存并退出编辑器，重启系统以应用更改。
tags: ['centos']
category: 默认
slug: the-solution-of-the-cantos7-ssh-connection-is-slow
draft: false
---


```bash
vim /etc/ssh/sshd_config
```
按i编辑插入
找到
`UseDNS`去掉前面的#号 改为 no

`GSSAPIAuthentication` 改为 no

然后`：wq `保存退出

```bash
systemctl restart sshd
```
重启
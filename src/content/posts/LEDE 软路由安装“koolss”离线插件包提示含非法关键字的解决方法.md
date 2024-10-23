---
title: LEDE 软路由安装“koolss”离线插件包提示含非法关键字的解决方法
published: 2024-10-10
description: 这篇文章介绍了如何通过SSH登录到软路由，并指导用户安装一个名为koolss的科学上网插件。具体步骤包括下载插件文件，其链接为[https://blog-1312096806.cos.ap-guangzhou.myqcloud.com/halo/koolss_2.2.2.tar.gz]。
tags: ['openwrt', 'lede', '软路由', '科学上网']
category: 默认
slug: lede-soft-routing-installation-koolss-offline-plug--in-package-prompts-to-solve-illegal-keywords
draft: false
---
用SSH登录软路由

```
ssh root@192.168.1.1
```

然后输入

```
sed -i 's/\tdetect_package/\t# detect_package/g' /koolshare/scripts/ks_tar_install.sh
```

再安装科学上网插件即可

[koolss](https://blog-1312096806.cos.ap-guangzhou.myqcloud.com/halo/koolss_2.2.2.tar.gz)


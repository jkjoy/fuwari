---
title: NEC VK22 黑苹果opencore引导
published: 2021-10-10
description: 这篇文章介绍了如何在安装黑苹果前解锁CFGLock，以及使用NVME固态硬盘的优化方法。通过将U盘格式化为FAT32并复制OC引导文件，设置U盘为第一启动项，可以提升读写速度且不需修改BIOS。文章还提到了笔记本黑苹果安装中的难点，如注入EDID，并分享了已驱动的硬件列表和EFI文件下载链接。
tags: ['macos', '黑苹果', 'opencore', '笔记本', 'clover', 'edid', 'hackintool']
category: 默认
slug: nec-vk22-black-apple-opencore-guide
draft: false
---


 

## 关于解锁

安装之前要解锁cfglock

## 关于nvme固态的使用

思路就是用一个U盘格式化成FAT32格式

把oc引导复制在U盘中。

在BIOS中把U盘启动设为第一启动项

这样做得好处是不用修改BIOS直接使用nvme的固态提升读写速度

坏处就是占用一个USB口

## 其他

笔记本黑苹果的难点就在于注入edid。

我的做法是在clover下安装好macos之后再用hackintool注入EDID，然后再转为opencore引导。

其他都很简单我就不多说了。

附上EFI文件，三码自己改

## 已驱动

显卡
声卡
网卡 （已更换DW1820A）
读卡器
USB
触摸板
 
 ## 下载

[请打赏后下载][2]


  
  [2]: https://blogcdn.asbid.cn/2021/12/03/1638521042.zip
---
title: NEC M700黑苹果OC0.9.4引导
published: 2023-10-01
description: 这篇文章介绍了如何在NEC M700笔记本上安装黑苹果，使用OpenCore 0.9.4引导。文章详细列出了笔记本的硬件配置，包括CPU、主板、内存、硬盘、无线网卡、有线网卡和声卡。此外，还提到了安装前的准备工作，如使用U盘、解锁CFG LOCK工具、ami BIOS提取工具和OCAT。具体步骤包括在Windows系统下提取BIOS文件，并通过UEFI TOOL打开并查找cfg lock项。
tags: ['黑苹果']
category: 默认
slug: nec-m700-black-apple-oc0.9.4-guide
draft: false
---

## NEC M700黑苹果OC0.9.4引导
### 配置
CPU QHPW 2.2Ghz 四核心八线程I7es魔改
主板NEC
内存8GB DDR4 2666Mhz
硬盘512GB SSD
无线网卡BCM943224pcieBT拆机
有线网卡INTEL
声卡ALC235
### 准备工作
U盘 16G以上
解锁CFG LOCK工具
ami BIOS提取工具
opencore
OCAT
### 解锁CFG LOCK
在WINDOWS系统下通过工具提取出BIOS.
通过`UEFI TOOL`打开提取出的BIOS文件,查找`cfg lock`

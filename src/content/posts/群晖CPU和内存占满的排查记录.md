---
title: 群晖CPU和内存占满的排查记录
published: 2023-07-07
description: 这篇文章介绍了作者在使用群晖NAS时遇到的CPU和内存满载问题，最初怀疑是迅雷NAS版导致的，但重装后问题依旧。通过资源监控发现虚拟机和video station的异常占用，最终通过卸载video station的刮削补丁解决了问题。文章总结指出，安装第三方补丁可能会带来不必要的麻烦，建议保持NAS的稳定性，避免不必要的折腾。
tags: ['群晖']
category: 默认
slug: investigation-records-of-synological-cpu-and-memory-are-full
draft: false
---
## 起因 
最近一段时间群晖老是CPU和内存满载,桌面安装的套件自动停止 
一开始我认为是迅雷NAS版的问题,可是重装几次问题依旧.
## 排查 
打开菜单-`资源监控`-`任务管理器` 
发现虚拟机的CPU占用了80%,于是卸载虚拟机的套件.重启.
问题依旧.
继续查看`任务管理器`.
发现`video station`内存占用9G以上,回想起自己曾经安装过`video station`的刮削补丁.
于是,卸载补丁,重启
完美解决.
## 总结
不要安装一些以为很有用的第三方补丁.
其实没什么用.
还会造成一些莫名其妙的问题.
NAS还是稳定为主,不折腾了.

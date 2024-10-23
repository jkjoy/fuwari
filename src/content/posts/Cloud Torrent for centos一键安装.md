---
title: Cloud Torrent for centos一键安装
published: 2017-05-27
description: 这篇文章介绍了如何安装和使用Cloud Torrent，一个支持BT和磁力链接下载、离线下载及边下边播的工具。文章详细说明了系统需求、脚本版本、特点、安装步骤、使用说明以及注意事项。Cloud Torrent通过Web UI提供可视化界面，支持搜索磁力链接，但主要针对国外资源。文章还提到了使用该工具时可能遇到的网络问题和版权风险。
tags: ['torrent', '磁力', '下载', 'cloud torrent', 'centos']
category: 默认
slug: cloud-torrent-for-centos-one--click-installation
draft: false
---


支持 离线下载 BT和磁力链接和边下边播 的老司机坐骑 —— Cloud Torrent
声明：本文章仅提供 BT/磁力链接 下载工具的安装方法和说明，任何使用此工具 下载版权侵权文件或导致任何经济损失，皆和本人无任何关系！如果你不同意或有异议，请关闭这个网页！
![10-1.png][1]
 - 系统需求
CentOS / Debian / Ubuntu 都可以，因为是 Go语言写的
- 脚本版本：
Ver: 1.0.3

- Cloud Torrent特点
支持 BT下载
支持 磁力链接下载
支持 搜索磁力链接
支持 离线下载
支持 边下边播( 格式限制：mp4/wbem/ogg，同时需要手动输入链接)
可视化界面 Web UI
- 安装步骤


    wget -N --no-check-certificate https://www.xuanlove.download/sh/cloudt.sh && chmod +x cloudt.sh && bash cloudt.sh


下载运行完毕脚本，就会直接开始安装 Cloud Torrent ，安装过程中如果出现让你选择Y和N的，都选Y。
安装完成之后，就会提醒你，输入要开放的端口（推荐：默认 8000）
启动后，访问 http://VPS_IP:8000 即可看到Web UI界面了。
- 脚本使用说明

   

     bash cloudt.sh
        #可以直接输入这个命令，会自动判断是否需要 安装/启动/停止 Cloud Torrent
         
        bash cloudt.sh install
        #安装 Cloud Torrent
         
        bash cloudt.sh start
        #启动 Cloud Torrent
         
        bash cloudt.sh stop
        #停止 Cloud Torrent
         
        bash cloudt.sh tail
        #查看 Cloud Torrent 日志
         
        bash cloudt.sh uninstall
        #卸载 Cloud Torrent


- Cloud Torrent使用说明
Cloud Torrent可以直接在输入中输入 磁力链接 或者 在线的BT种子（不支持本地上传），点击下面的 蓝色的按钮，就会开始解析资源。
--- 

按钮说明
----

成功解析后，就会显示如下的界面，开始下载。
Files 是查看正在下载的文件列表， Start 是启动下载（默认解析后直接启动下载）， Stop 是停止下载。
还有，如果你下载完毕或者点了 Stop 停止下载，那么 Stop 就会变成 Remove 删除任务的按钮了。

搜索磁力链接
----------

Cloud Torrent支持搜索磁力链接，在输入栏中直接输入你要搜索的文件名称，同时点击 绿色的按钮 选择一个搜索源，然后点击 蓝色的Search 按钮就可以搜索了。
注意：Cloud Torrent是国外人写的，所以这些搜索源均是国外的磁力链接网站，搜索到的资源基本没有中文的，所以非特殊需求的这个功能就没什么卵用了。

注意事项
------

BT和磁力链接的速度是和， 磁力链接/BT 的用户上传共享量 和 中心服务器的宽带质量，以及你下载 磁力链接/BT 的VPS的宽带有关系。
这种软件在某些程度上比不上 国内的迅雷，毕竟迅雷 用户了很大共享了很多的上传速度，而且还有缓存的中心服务器，所以才会那么快。
如果你是国外的VPS，特别是美国的，一定要注意下载 BT/磁力链接 容易遇到蜜罐，然后被投诉封VPS。建议使用欧洲的罗马尼亚，那里的VPS无视版权，当然拉回本地，速度肯定也不会多快
# 无法访问你的 http://IP:端口
可能是防火墙规则的问题，使用下面这个命令来开放端口

    iptables -I INPUT -p tcp --dport 端口 -j ACCEPT


  [1]: https://xy07-1251893119.costj.myqcloud.com/2017/05/27/823290012.png






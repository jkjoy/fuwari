---
title: 利用 Github Actions 自动部署 Hexo 博客
published: 2024-05-08
description: 这篇文章介绍了如何使用Github Actions实现CI/CD工作流，包括自动化测试、打包和部署等操作。文章详细说明了在已有hexo博客、github账户和项目的基础上，如何创建.github/workflows/main.yml文件，并设置Personal access tokens以实现hexo项目main分支更新时自动更新gh-pages分支的功能。
tags: ['Github', 'Hexo', '自动化']
category: 博客
slug: use-github-actions-to-automatically-deploy-hexo-blog
draft: false
---
##  Github Actions 简介
Github Actions 可以很方便实现 CI/CD 工作流，类似 Travis 的用法，来帮我们完成一些工作，比如实现自动化测试、打包、部署等操作。当我们运行 Jobs 时，它会创建一个容器 (runner)，容器支持：Ubuntu、Windows 和 MacOS 等系统，在容器中我们可以安装软件，利用安装的软件帮我们处理一些数据，然后把处理好的数据推送到某个地方。

## 前提

1.您已经创建了hexo博客
2.您已经注册了github的账户
3.您已经创建了github项目并上传了hexo源码

### 创建

在项目根目录下创建`.github/workflows/main.yml`

1.[点击此处](https://github.com/settings/tokens)申请 Personal access tokens (classic)

2.在`Settings`-`secrets and variables`-`Actions`下设置`HEXOBLOG`为上一步得到的`Personal access tokens`

![1.png](https://image.blog.hb.cn/2024/05/08/663b110f9680f.png!style:webp)

3.可以把以下内容粘贴进去
```yaml
run-name: Deploy 
 
on: 
  push:
    branches:
      - main 
  
  release:
    types:
      - published 
 
  workflow_dispatch: 
 
jobs:
  build:
    runs-on: ubuntu-latest
 
    steps:
    - name: Checkout 
      uses: actions/checkout@v2
      with:
        ref: main
 
    - name: Setup Node 
      uses: actions/setup-node@v1
      with:
        node-version: "18.x"
 
    - name: Install Hexo 
      run: |
        npm install hexo-cli -g

    - name: Cache Modules 
      uses: actions/cache@v1
      id: cache-modules
      with:
        path: node_modules
        key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}
        
    - name: npm Install
      run: | 
        npm install    
        
    - name: Generate 
      run: |
        hexo clean
        hexo generate
        hexo deploy
        
    - name: Deploy 
      uses: peaceiris/actions-gh-pages@v3
      with: 
        personal_token: ${{ secrets.hexoblog }} 
        PUBLISH_BRANCH: gh-pages 
        PUBLISH_DIR: ./public 
        commit_message: ${{ github.event.head_commit.message }}
```
### 实现的功能

在hexo项目`main`分支有更新时,会自动更新仓库下分支`gh-pages`

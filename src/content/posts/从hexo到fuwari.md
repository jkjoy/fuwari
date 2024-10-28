---
title: 从Hexo到Astro
published: 2024-10-28
description: '本文简单讲述了如何从从Hexo到Astro的过程,并使用脚本转换Front-matter'
image: ''
tags: [Hexo, fuwari, Astro]
category: '分享'
draft: false 
lang: ''
slug: from-hexo-to-astro
---
很多人在向`Astro`转移,咱也跟风一波.
主要是很喜欢`fuwari`的这个主题模板,曾经也移植到了`Typecho`平台.

## 步骤
### 安装`Astro`

1. 从这个模板生成一个新的存储库或分叉这个存储库。
https://github.com/saicaca/fuwari/generate

2. 要在本地编辑你的博客，克隆你的存储库，运行
```bash
pnpm install
```
```bash
pnpm add sharp
```
安装依赖项。如果你没有安装pnpm 则执行
```bash
npm install-g pnpm
```

3. 编辑配置文件`src/config.ts`以自定义你的博客。

4. 创建一个新帖子
运行
```bash
pnpm new-post <filename>
```
并在`src/content/post/`中进行编辑。

5. 按照指南将你的博客部署到`Vercel`、`Netlify`、`GitHub Pages`等。

部署前需要在`astro.config.mjs`中编辑站点配置。

### 迁移

由于`HEXO`和`Astro`的`Front-matter`存在差异会导致无法正常生成页面
所以就利用`deepseek`写了个`python`的脚本用以实现以下功能

1. 自动生成slug 利用谷歌翻译
2. 自动更改文件名为文章名. 这个是历史遗留问题.从`wordpress`转过来时留下的.
3. 自动更改`date`为`published`.由于hexo的使用过程中有很多种譬如时间戳 譬如 YYYY-MM-DD这一种在HEXO下本来兼容的现在到了`Astro`下就都报错了.如果出现无法转换则使用默认日期.避免转换过程中出现中断.
4. 更改`category` 与 `tags` 

https://gist.github.com/jkjoy/459deed2048a432f8147abde2a334082

脚本 122 行`posts_dir = '_posts'`为hexo文章路径.

把转换好的文章 复制进 `src/content/post/` 下.

### 上传

可以上传到`Vercel`、`Netlify`、`GitHub Pages` 这些都不赘述了.

玩过`Hexo`基本都知道怎么操作了


## 总结

`Astro`的`Front-matter`太骚了.

几乎每个模板的定义还不一样.
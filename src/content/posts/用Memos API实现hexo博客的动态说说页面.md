---
title: 用Memos API实现hexo博客的动态说说页面
published: 2023-06-13
description: 这篇文章介绍了如何修改Memos/index.md文件的内容，并提到代码来源于网络。
tags: ['memos', 'Hexo']
category: 默认
slug: use-memos-api-to-implement-the-dynamic-page-of-the-hexo-blog
draft: false
---
新建一个页面
```bash
hexo new page Memos
```
修改`Memos/index.md`内容为
```markdown
---
title: Memos
comments: false
date: 2023-06-07 14:17:13
---
<link href="https://blogcdn.loliko.cn/memos/css/memo.css?0.0.5" rel="stylesheet" />
<div id="bber"></div>
<script type="module" src="https://immmmm.com/emaction.js?v=230811"></script>
<script src="https://fastly.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/Lately/lately.min.js"></script>
<script src="https://cdn.staticfile.org/twikoo/1.6.32/twikoo.all.min.js"></script>
<script type="text/javascript">
  var bbMemos = {
    memos : 'https://memos.loliko.cn/',//修改为自己部署 Memos 的网址，末尾有 / 斜杠
    limit : '20',//默认每次显示 10 条
    creatorId:'1' ,//早期默认为 101 用户，新安装是 1； https://demo.usememos.com/u/101
    domId: '',//默认为 bber
    twiEnv:'https://t.loliko.cn',//启开 twikoo 评论，默认 https://metk.edui.fun/
  }
</script>
<script src="https://blogcdn.loliko.cn/memos/js/memo.js?0.0.2"></script>
```
即可~

代码来源于网络~

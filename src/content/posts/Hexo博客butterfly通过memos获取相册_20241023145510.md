---
title: Hexo博客butterfly通过memos获取相册
published: 2024-06-22
description: 这篇文章介绍了如何创建一个新的相册页面，并提供了相关代码作为参考。文章还提到了参照本站的其他资源来辅助完成相册页面的建设。
tags: ['hexo', 'butterfly', 'memos']
category: 分享
slug: hexo-blog-butterfly-obtained-the-album-through-memos
draft: false
---

新建相册页面

```bash
hexo new page photos
```

参照以下代码
```html
<div class="gallery-items">
<div class="gallery-photos"></div>
</div>

<script>
async function loadImages() {
    try {
        let url = 'https://memos.imsun.org' // 修改api 适用于memos版本小于0.22.0
        let response = await fetch(url + '/api/v1/memo?creatorId=1&tag=照片'); //tag为#照片 用户id为1
        let data = await response.json();
        let html = '';
        let imgs = [];
        data.forEach(item => {
            let ls = item.content.match(/\!\[.*?\]\(.*?\)/g)
            if (ls) imgs = imgs.concat(ls)
            if (item.resourceList.length) {
                item.resourceList.forEach(t => {
                    if (t.externalLink) imgs.push(`![](${t.externalLink})`)
                    else imgs.push(`![](${url}/o/r/${t.id}/${t.publicId}/${t.filename})`)
                })
            }
        })

        if (imgs) imgs.forEach(item => {
            let img = item.replace(/!\[.*?\]\((.*?)\)/g, '$1'),
                time, title, tat = item.replace(/!\[(.*?)\]\(.*?\)/g, '$1')
            if (tat.indexOf(' ') != -1) {
                time = tat.split(' ')[0]
                title = tat.split(' ')[1]
            } else title = tat

            html += `<figure class="gallery-group"> 
                            <a href='${img}' data-fancybox="gallery" data-caption="${title}"> <img data-grid-maintained-target="true" src='${img}' alt="Group Image Gallery" >
                            <figcaption><p> ${title}</p></figcaption> </a>
                    </figure>`
        })

        document.querySelector('.gallery-photos').innerHTML = html
    } catch (error) {
        console.error('Failed to load images:', error);
    }
}

if (1) {
    loadImages();
}
</script>
```

参照本站 
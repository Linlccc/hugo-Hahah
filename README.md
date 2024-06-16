# Hahah

> Hugo PaperMod is a theme based on [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod/).
> The goal of this project is to add more features and customization to the og theme.

## Features

- [x] 深色/浅色/自动主题
- [x] manifest
- [x] 多语言
- [x] 按需引入 css
- [x] 自定义 css
- [x] 经典/简介模式主页
- [x] giscus
- [x] fuse 搜索

## Installation

```bash
git submodule add git@github.com:Linlccc/hugo-Hahah.git themes/Hahah
```

## Configuration

### 基础配置

```yaml
Params:
  # 默认主题  [auto, dark, light]
  defaultTheme: auto
  # 禁用主题切换
  disableThemeToggle: false
  # 禁用滚动到顶部
  disableGoToTop: false
  # 是否启用 manifest (安装到桌面)
  isEnableManifest: true
  # 多语言切换显示完整语言名称
  displayFullLangName: false
  # 列表页中显示 Rss 按钮
  showRssButtonInSectionTermList: true
  # Rss 显示全部内容
  showFullTextinRSS: false
```

### 站点配置

```yaml
Params:
  # 站点作者
  author:
    name: your name
    email: you email

  # logo 信息
  logo:
    text:
    image:
    imageHeight:

  # 隐藏页脚
  hideFooter: false
  # 网站开始使用年份
  startYear: 2023
  # 提供商信息
  powereds:
    - name: Hugo
      url: https://gohugo.io/

  # 网站图标
  favicon:
    dark:
      favicon: /favicon/dark/favicon.ico
      icon: /favicon/dark/favicon.svg
      favicon_16: /favicon/dark/favicon-16x16.png
      favicon_32: /favicon/dark/favicon-32x32.png
      favicon_180: /favicon/dark/favicon-180x180.png
      favicon_192: /favicon/dark/favicon-192x192.png
      favicon_512: /favicon/dark/favicon-512x512.png
    light:
      favicon: /favicon/light/favicon.ico
      icon: /favicon/light/favicon.svg
      favicon_16: /favicon/light/favicon-16x16.png
      favicon_32: /favicon/light/favicon-32x32.png
      favicon_180: /favicon/light/favicon-180x180.png
      favicon_192: /favicon/light/favicon-192x192.png
      favicon_512: /favicon/light/favicon-512x512.png

  # 自定义 meta 标签
  customMetas:
    # Google 站点验证
    - name: google-site-verification
      content: 123
    # 百度 站点验证
    - name: baidu-site-verification
      content: 123
    # bing 站点验证
    - name: msvalidate.01
      content: 123

  # 关键词
  keywords:
    - Blog

  # css 配置
  css:
    # 是否按需引入 css
    isImportDemand: false

  # 在档案页显示所有页面
  showAllPagesInArchive: true
```

### Home 页配置

```yaml
Params:
  # 经典模式信息
  classicInfo:
    # 启用
    enabled: true
    # 标题
    title: 😀😃😄😁
    # 内容
    content: 😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😶‍🌫️😏😒🙄😬😮‍💨🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾

  # 简介模式信息
  profileInfo:
    # 标题
    title: 😀😃😄😁
    # 内容
    content: 😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😶‍🌫️😏😒🙄😬😮‍💨🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾
    # 图片
    image:
      url: /favicon/dark/favicon-192x192.png
      title: Hahah
      width: 120
      height: 120
    # 按钮
    buttons:
      - name: Posts
        url: posts

  # Home 页显示的文章类型(内容文章目录名或文章的 type 配置)
  homeShowTypes:
    - posts
    - games

  # 社交图标
socialIcons:
  - name: github
    url:
  - name: email
    url:
  - name: rss
    url: index.xml
```

### 列表页配置

```yaml
Params:
  # 列表页头部显示面包屑
  listShowBreadCrumbs: false
  # 隐藏摘要
  hideSummary: false
```

### 文章页配置

```yaml
Params:
  # 页面显示面包屑导航
  showBreadCrumbs: true
  # 显示原文章信息，用于显示转载自哪里
  showCanonicalLink: true

  # 文章编辑链接信息
  editPost:
    # 链接
    url: https://github.com/[youKey]/[repo]/edit/master/src/content
    # 将文件路径附加到编辑链接
    appendFilePath: true
    # 禁用编辑
    disabled: false

  # 显示目录
  showToc: true
  # 目录打开
  tocOpen: true

  # 禁用锚点标题
  disableAnchoredHeadings: false

  # 显示帖子导航链接
  showPostNavLinks: true

  # 禁用分享功能
  disableShare: false
  # 是否使用自定义分享按钮
  customShare: true
  # 自定义分享按钮
  customShareButtons:
    - x
    - linkedin
    - reddit
    - facebook
    - whatsapp
    - telegram
    - ycombinator

  # giscus 评论信息, 配置 see:https://giscus.app/
  giscusComments:
    enabled: true
    conf:
      data-repo:
      data-repo-id:
      data-category: Announcements
      data-category-id:
      data-mapping: pathname
      data-strict: 1
      data-reactions-enabled: 1
      data-emit-metadata: 0
      data-input-position: bottom
      data-lang: zh-CN
      data-loading: lazy
      crossorigin: anonymous
```

### 搜索页配置

```yaml
Params:
  # fuse搜索配置 see:https://fusejs.io/api/options.html
  fuseOptions:
    # 区分大小写
    isCaseSensitive: false
    # 排序
    shouldSort: true
    # 位置
    location: 0
    # 距离
    distance: 1000
    # 阈值,匹配算法在什么时候放弃匹配,0-1之间,越小越严格
    threshold: 0.4
    # 最小匹配字符长度
    minMatchCharLength: 0
    # 匹配键
    keys:
      - title
      - permalink
      - summary
      - content
```

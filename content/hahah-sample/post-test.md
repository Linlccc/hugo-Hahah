---
# 标题
title: "Test Article"
# 描述
description: "This is a test article"
# 标签
tags:
  - test
# 显示权重（越小显示越靠前）
weight: 1
# 草稿
draft: true

# 撰写日期
date: 2024-06-15 22:47:30
# 到期日期
expiryDate: 2000-10-01 01:00:00
---

## Hide current page

> 设置一下任意一项当前页面都将不会再 Home 页出现\
> If you set any of the following options, the current page will no longer appear on the Home page.
>
> ```yaml
> # 构建过期
> buildExpired: false
> # 构建草稿
> buildDrafts: false
>
> # Home 页显示的文章类型(内容文章目录名或文章的 type 配置)
> # Params.homeShowTypes 配置中移除 hahah-sample
> Params:
>   homeShowTypes:
>     - hahah-sample
> ```

## markdown Test

> Test from <https://github.com/suan/github-flavored-markdown-test>

### This README can be used as a reference for github-flavored-markdown styling (and possibly behavior)

---

<!-- # H1

followed by some text -->

## H2

followed by some text

### H3

followed by some text

#### H4

followed by some text

##### H5

followed by some text

###### H6

followed by some text

Auto-detected link: <http://www.france.com>

Some Ignored_multiple_underscore_italics here

A line of normal text with `inline code` and _italics_, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.

Followed by another line of normal text with `inline code` and _italics_, **strong font**, and even some μ†ℱ ╋ℯ╳╋. Followed by lots of Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id sem purus, eu commodo tortor. Donec malesuada ultricies dolor a eleifend. In hac habitasse platea dictumst. Vivamus a faucibus ligula. Nullam molestie tristique arcu, eu elementum metus ultricies sed. Aenean luctus congue lectus, vitae semper erat rhoncus non. Nulla facilisi.

Thin horizontal rule:

--

Thick horizontal rule:

---

| Table Header 1 | Table Header 2       |
| -------------- | -------------------- |
| Content        | <http://example.org> |
| Content        |                      |

Text right below table. Follows is a table with an empty cell, and unaligned indenting.

| Table Header 1 | Table Header 2 |
| -------------- | -------------- |
| Content        | Cntent         |
| Content        |                |

Empty line between table and this text

def this_is
puts "some #{4-space-indent} code"
end

<code>
def this_is
  puts "some #{code tag} code"
end
</code>

<pre>
def this_is
  puts "some #{pre tag} code"
end
</pre>

```
def this_is
  puts "some #{fenced} code"
end
```

```ruby
class Classy
  def this_is
    puts "some #{colored} ruby code with ruby syntax highlighting"
    @someobj.do_it(1, 2)
  end
end
```

```javascript
var test = function this_is() {
  console.log("some" + colored + "javascript code with javascript syntax highlighting really long");
};
```

```clojure
(defproject myproject "0.5.0-SNAPSHOT"
  :description "Some clojure code with syntax highlighting."
  :dependencies [[org.clojure/clojure "1.5.1"]]
  :plugins [[lein-tar "3.2.0"]])
```

```js
var test = function this_is() {
  console.log("language declared as 'js' instead");
};
```

```bogus_language
var test = function this_is(){
  console.log("language declared as bogus_language");
}
```

> here is blockquote

[Relative image link](../afu.png)

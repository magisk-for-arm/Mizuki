---
title: "使用cloudflare搭建博客"
description: "使用cloudflare page + mizuki搭建博客"
published: 2025-09-20
licenseName: "CC BY 4.0"
---

## 什么是 Mizuki？
Mizuki（或 Mizuka）是一个基于现代前端技术栈构建的、优雅且高性能的静态博客模板。它的核心是：

-  Astro：一个主打“岛屿架构”的前端框架。它允许在项目中混合使用 React, Vue, Svelte 等组件，但最终会编译成轻量、高效的静态 HTML 和 CSS，从而实现极快的页面加载速度和出色的搜索引擎优化（SEO）。

-  Tailwind CSS：一个实用优先的 CSS 框架。它提供了大量可组合的低级类，能直接在 HTML/JSX 中快速、灵活地构建自定义设计。

得益于这两个技术的结合，Mizuki 模板天生具备静态站点的所有优点：速度快、安全性高、成本低（几乎可以免费托管），且非常易于管理和部署。这也是我选择它的原因（~~才不是好看呢~~）

## 我踩过的坑：EdgeOne 与 Cloudflare 的选择
在部署平台的选择上，我最初尝试了腾讯云的 EdgeOne。它的全球加速网络听起来非常吸引了我，但我遇到了

-  实名认证限制：在认证过程中，不知道为什么，地区选项只能选择“中国台湾”，我无法完成实名，导致我无法使用其全球加速服务。

我最终放弃了 EdgeOne，转而选择了 Cloudflare Pages。它提供无限的带宽、全球 CDN、自动 HTTPS 以及完美的全球访问体验，并且完全免费对于个人博客这类项目来说绰绰有余。（cf永远的神）

## 搭建过程  （以下内容是ai写的，~~才不是我不会写~~）
-  第一步：获取模板代码
Fork 项目：访问 Mizuki 项目的 GitHub 仓库，点击右上角的 Fork 按钮。这会在的GitHub 账户下创建一个完整的副本，这样可以自由修改而不影响原项目。
克隆到本地

-  第二步：部署到 Cloudflare Pages
这是最简单也是最神奇的一步，全程可视化操作。进入 Cloudflare Dashboard：登录 Cloudflare 账户，在侧边栏找到 “Workers & Pages” 并点击进入。
-  创建应用程序 -> 创建 Pages。
-  连接 Git：选择 fork 后并修改后的 Mizuki 仓库。
-  框架预设：Cloudflare Pages 非常智能，通常能自动检测出 Astro 项目。
-  构建命令：自动填充为 pnpm run build。
-  构建输出目录：Astro 项目默认是 dist。
-  点击“部署站点”：接下来，Cloudflare 就会自动完成所有工作第四步：访问与后续更新

部署成功后，Cloudflare 会提供一个以 .pages.dev 结尾的临时域名。可以在 Pages 的设置中绑定自己的自定义域名。
以后更新博客：只需要在本地写好新的文章（通常是 src/content/ 目录下的 .md 或 .mdx 文件），然后用 git 推送到 GitHub 的 main 分支上。Cloudflare Pages 会自动侦听到这次推送，并触发一次全新的构建和部署，实现持续集成（CI/CD）。所要做的只是 git push，剩下的全部自动化完成。

## 总结
虽然最初在平台选择上遇到了小波折，但整个搭建过程得益于 Astro 的简洁和 Cloudflare Pages 的强大自动化能力，变得异常顺畅。从 Fork 项目到博客上线，只需要点几次按钮和进行简单的配置即可。
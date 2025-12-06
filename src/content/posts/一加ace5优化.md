---
title: "一加Ace5使用的模块"
description: "一加Ace5（骁龙8Gen3）ColorOS 流畅省电和游戏性能优化指南"
category: "教程"
published: 2025-10-12
licenseName: "CC BY-SA 4.0"
tags: [Moudle, Phone]
---

# 一加Ace5（骁龙8Gen3）ColorOS 流畅省电和游戏性能优化指南

并不只限于一加ace5，理论上ColorOS15通用，

## 一、核心优化方案

### 1. 内核选择

- **优先推荐：官方内核**
稳定性最佳，是后续优化的基础，适合追求原生体验的用户。

- **GKI模式用户**：Xinran大佬优化内核（支持BBR/SusFS，6.1内核专用，@Xinran_StarBai 查看链接或者秋刀鱼内核（6.6内核专用）
其他内核请参考 @一只小小w 的内核

- **LKM模式/magisk用户**：潘多拉内核（r4p1/r2p2版本，内存管理优秀，游戏/日用兼顾，[链接]查看链接

### 2. 温控模块

#### 方案二选一，不可共存

- **ColorOS满血核心（Caelifall 捐赠版）**
无卸载残留，推荐设置“静态模式+ColorOS墓碑完全体”，温控与流畅度平衡最佳

- **二改Extreme GT模块（基于Scene）**

### 3. 墓碑与后台管理

- **NoActive Pro**
需付费+LSPosed，零配置，后台管控效果好，兼顾省电与应用留存。

- **官方墓碑**
原生稳定，无需额外模块，适合不喜欢折腾的用户。

### 4. 线程优化（降功耗关键）

使用前需在Scene中关闭“核心分配”和“辅助调速器”，避免冲突。

- **日用+游戏通用**：牛头大佬捐赠版内置线程优化，无需额外配置，@我是牛头 ，适配官调体质差机型。

- **JZzzRiching线程模块**（适配8Gen3，无需配置。
Asoul线程模块（游戏专属，选plus版本，可搭配西门飞雪）

## 二、辅助优化（进一步降功耗）

### 1. 双限频模块（按需选择）

选用JZzzRiching大佬双限频模块，按场景匹配版本：

- 纯日用：小省电版/临界不卡省电版；
- 小游戏（荒野乱斗/明日方舟）：小甜点版；
- 中大型游戏（王者/和平精英）：大甜点版/小性能版；
- 大型游戏（原神/绝区零）：大性能版。

## 三、体验增强

- **振动增强**：慨miru的欧真加振动增强模块”，支持0916/0809马达，可选“纯粹清脆”或“弹簧性清脆”风格。

- **去广告**：春梦无痕大佬“AdGuard Home模块”，拦截B站/抖音/游戏广告，减少广告唤醒功耗。

- **主题与字体**：使用MFGA字体模块与伞姨的莫奈取色。

- **支付指纹修复模块**，root机可能导致无法使用微信指纹支付（解锁bootloader后soter key丢失，导致微信指纹无法使用），可以用此模块来实现指纹支付(目前微信风控较严，建议暂时不要使用)

- **LuckyTool** 功能很多，就不多说了

### 目前我在用的模块

- [x] Adguard Home For Android 作者:春梦无痕
- [x] coloros满血核心 作者:Caelifall
- [x] MFGA 苹方+SFpro  作者:systemai
- [x] 8gen3线程优化 作者:JZzz
- [x] 欧加真马达震动增强[复生版]  作者:慨miru
- [x] Themed Icon Completion Project 作者:天伞桜
- [x] Unlock CN GMS 作者:fei-ke
- [x] Youtube Revanced  作者:j-hc
- [x] zygisk-detach 作者：j-ch
- [x] Play integrity Fix 作者:chiteroman
- [x] Tricky Store  作者:5ec1cff
- [x] Zygisk Next  作者:5ec1cff
- [x] Shamiko 作者:Lsposed Developers
- [x] Lsposed IT 作者:Lsposed Developers
- [x] 音量键极速救砖 作者:小白杨
- [x] 爱玩机工具箱 作者:小白杨
- [x] Scene附加 作者:嘟嘟ski
- [ ] Zygisk-指纹支付-微信 作者:Jason Eric

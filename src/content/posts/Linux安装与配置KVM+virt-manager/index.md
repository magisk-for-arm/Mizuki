---
title: Linux安装与配置KVM+virt-manager
published: 2025-12-14
description: ''
image: ''
tags: []
category: ''
draft: true 
lang: ''
---

# Arch Linux 图形化安装与配置 KVM + virt-manager

## 安装准备

1. **检查虚拟化支持**p
打开终端，检查CPU虚拟化支持

```
grep -E --color '(vmx|svm)' /proc/cpuinfo
zgrep CONFIG_KVM /proc/config.gz
```

2. 安装yay
```
sudo pacman -S yay
```

3. 安装所有相关包

```
yay -S virt-manager qemu-desktop libvirt edk2-ovmf dnsmasq iptables-nft virt-viewer spice-vdagent ebtables iptables
```

## 配置

1. 启用和启动服务

```
sudo systemctl enable --now libvirtd  # 开机启动libvirtd
sudo usermod -aG libvirt $(whoami)  #把自己添加到libvirt用户组
```
2. 重启

## 启动

3. 配置虚拟网络
使用 virt-manager 图形化配置：

启动 virt-manager


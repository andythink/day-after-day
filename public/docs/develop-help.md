# 开发帮助文档

- order: 4
- category: arale

---

这篇文档主要介绍组件开发环境的搭建。

## 添加host
将如下内容添加到host文件中:
```
223.252.220.53  modules.epay.163.com
```

## 安装node.js

1. 安装最新版node.js

2. 配置环境变量
    NODE_PATH=C:\Users\"USERNAME"\AppData\Roaming\npm

3. 运行如下命令，检验是否安装成功
```
node --version
```
**注：如果最新版的node.js使用过程中发现问题，卸载重新安装v0.10.35(http://nodejs.org/dist/v0.10.35/x64/node-v0.10.35-x64.msi)**

---

## 安装spm

1. 在命令行中运行如下代码：
```
npm install -g spm
```
2. 运行如下命令，检验是否安装成功
```
spm --version
```
3. 在家目录中的.spm文件夹里新建**spmrc-3x**文本文件（没有文件后缀），将```registry = http://modules.epay.163.com:3000```添加到里面。

---

## 安装git

1. 在<http://git-scm.com/downloads>下载安装文件，下载完成后一路next即可。

2. 配置git环境变量，在path中增加```"git安装目录"\bin\```

3. 运行如下命令，配置git：
    ```bash
    git config --global user.name "你的中文名"

    git config --global user.email  工作邮箱(username@corp.netease.com)

    git config --global push.default simple
    ```

4. 登陆<https://git.hz.netease.com>上配置ssh key，登陆帐号为邮箱前缀

# 开发一个组件的流程

- order: 3
- category: arale

---

开始组件开发之前，需要安装开发工具 [点击这里查看如何安装](/docs/develop-help.html) 。


## 初始化组件

1. 在本地磁盘新建文件夹，文件夹名称为组件名称，名称要符合 [a-z\d\-\.]，并以英文字母开头，首选合适的英文单词， **禁止使用驼峰** 。注意我们的组件名称统一以epay为前缀，避免组件名称产生冲突。

2. 下面以epay-module1为例，说明组件初始化过程。
```
$ mkdir epay-module1
$ cd epay-module1
$ spm init
Creating a spm package:
[?] Package name: epay-module1
[?] Version: 0.0.0
[?] Description:
[?] Author:
Initialize a spm package Succeccfully!
```

3. 初始化完成后会生成一个骨架，在这个基础上进行开发更方便。
```
epay-module1
   ├── examples           组件演示
   │   └── index.md
   ├── HISTORY.md         版本更新说明
   ├── index.js           组件的主要入口文件
   ├── package.json       版本等元信息
   ├── README.md          组件总体说明，包括功能描述、api文档
   └── tests              单元测试
       └── index-spec.js
```
4. 提交组件源代码到网易git仓库。

    打开<https://git.hz.netease.com>，鼠标点击右上角的加号，选择New repository，Repository name的第一项选择epay-modules,第二项填写epay-module1,点击create repository

    在命令行中运行如下代码：
    ```
    git init
    git add .
    git commit -m 'first commit'
    git remote add origin ssh://hzzujianguo@git.hz.netease.com:22222/epay-modules/epay-module1.git
    git push origin master
    ```

## 进行开发

首先分析组件的依赖，比如需要 `jquery`。

可以使用 `spm install` 下载依赖。

```bash
$ spm install jquery --save

```

这样 spm 会自动在 `package.json` 中添加依赖，你也可以手动添加并 install 。

```js
"spm": {
  "dependencies": {
    "jquery": "1.7.2"
  }
}
```

并且，所有依赖的模块都会被下载到 spm_modules 下。

修改 `index.js` 进行开发

```js
var $ = require('jquery')

var epayModule1 = function(){
    this.info = 'hello module1'
};
module.exports = epayModule1
```

启动本地服务进行调试。

```bash
$ spm install
$ spm doc
```

通过浏览器访问 <http://127.0.0.1:8000/>

## 本地调试

examples 也使用 md 编写，这样写起来非常方便。

在 `examples/index.md` 添加实例化代码，可以直接 use。

```javascript
seajs.use('../index', function(Module1) {
  var module1 = new Module1()
  console.log(module1.info)
});
```

也可以用 require 来调用模块。

```javascript
var Module1 = require('index');

```

通过四个 "````" 所包裹的代码不仅会显示成代码片段，也会插入 HTML 中进行实际运行，这样你调试好代码后，演示页面的文档也同时生成好了。

spm doc 支持 livereload，只要通过 `spm doc` 启动服务，修改文件后都会自动构建。

## 修改组件元信息
修改 `package.json` 配置打包方式
```js
"spm": {
  "main": "index.js"
}
```

这样 `spm build` 将打包 `index.js` 文件，并将这个文件中的本地依赖文件也打包进来。

接下来就可以开始打包，build 后会在 dist 目录生成打包的文件和 -debug 文件。

```bash
$ spm build
```

### 发布组件

你的组件发布后可以很方便的被其他组件调用。通过 `spm publish` 命令将会把你的组件发布到服务器上。

```bash
$ spm publish
```

## 发布组件文档

```bash
$ spm doc publish
```

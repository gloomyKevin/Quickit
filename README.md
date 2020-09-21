<h1 align="center">
  <img src="https://i0.hdslb.com/bfs/album/d72f47cd98c9fb6287d7eaf002695de4f53de6f2.png" height="200" width="200"/>
  <p align="center" style="font-size: 0.5em">A lightweight and sophisticated React-based H5 video player</p>
</h1>

[![GitHub](https://img.shields.io/github/license/vortesnail/qier-player)](https://github.com/vortesnail/qier-player/blob/master/LICENSE) [![Travis (.org)](https://img.shields.io/travis/vortesnail/qier-player)]() [![npm package](https://img.shields.io/npm/v/qier-player)](https://www.npmjs.com/package/qier-player) [![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/qier-player/1.2.8)](https://www.npmjs.com/package/qier-player) [![GitHub stars](https://img.shields.io/github/stars/vortesnail/qier-player)](https://github.com/vortesnail/qier-player/stargazers)

[简体中文](https://github.com/vortesnail/qier-player/blob/master/README-zh-Hans.md) &#124; English

## Todo
- [x] 基本结构 :dart:
- [x] 增强模板通用性 :dart:
- [x] 引入mixin :dart:
- [x] 集合API :dart:
- [ ] 数组API :dart:


# 开发笔记

- [生态](#生态)
- [必须收藏的资源](#必须收藏的资源)
- [快速入门](#快速入门)
  - [安装](#安装)
  - [用法](#用法)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [感谢](#感谢)
- [License](#license)

## Introduction

For these to work, the player must be in focus.

- 纯JavaScript开发, 但没有继承任何的JavaScript内置对象, 通过统一的 全局接口 , 可以让自己可以更方便地在JavaScript中实现 函数式编程
-	有选择地参考 underscore 设计思想, 模拟日常使用中常见的JavaScript API, 数量达到 十几个
-	在常规API之上,设计一系列 辅助函数
-	参考underscore中 mixin 的设计思想, 实现用户 主动添加扩展方法 的功能
-	为项目中的工具函数添加大量使用实例, 并进行了详细的说明, 帮助使用者更快更好地上手


Here is an [official demo site](https://vortesnail.github.io/qier-player-demo/) showing the player in use.


## Quick Start

### Install

```bash
npm install --save quickit
```

### Use

```js

import po from 'quickit';

```

## API
| Parameter  |  Description | Types  | Defaults  |
| ------------ | ------------ | ------------ | ------------ |
| `width`  | setting the video width (e.g. `740` or `"100%"`) | number &#124; string  |  740 |
| `height`  | setting the video height (e.g. `420` or `"100%"`)  | number &#124; string  |  420 |
| `language`  | language: 'en' is English and  'zh' is Chinese  | "en" &#124; "zh"  |  'en' |
| `themeColor`  | theme color (only supports hexadecimal color)  | string  |  '#f23300' |
| `src480p`  | 480p source URL | boolean &#124; string   | false  |
| `src1080p`  |  1080p source URL | boolean &#124; string   | false  |
| `src720p`  | 720p source URL | boolean &#124; string   | false  |
| `src2k`  |  2K source URL | boolean &#124; string   | false  |
| `src4k`  |  4K source URL | boolean &#124; string   | false  |
| `srcOrigin`  |  origin source URL (set this if not using specific resolution sources) | boolean &#124; string   | false  |

## Recent update history

### 1.2.3 (2019-11-06)
- Added `width` and `height` api for setting your own video width and height

### 1.2.2 (2019-11-04)
- Added theme colour modification interface
- Added language change API, 'en' is English, 'zh' is Chinese

### 1.1.2 (2019-11-01)
-	Added auto hide function：When the mouse is hovering over the video page, the controller and mouse are hidden after 1.8s.

### 1.1.1 (2019-10-29)
- Added the prompt "Sorry! The video could not be found (. ́< ̀.)" when the video source URL is not found
- Added a hint animation "Buffering..." while the video is loading
- Fixed a bug where custom shortcuts conflicted with browser shortcuts

## 贡献者们

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/gloomyKevin"><img width="60px" src="https://avatars1.githubusercontent.com/u/47132374?s=460&u=a4cddb370a56c1c4253607dcf5ba96b524c6a989&v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## 维护者

- [gloomyKevin](https://github.com/gloomyKevin)


## License

- [MIT](https://opensource.org/licenses/MIT)


正在收集工作区信息# BambooSword UI 组件库

BambooSword 是一个基于 React 和 TypeScript 打造的现代组件库。它旨在提供高质量的 UI 组件，帮助开发者快速构建漂亮的 Web 应用。

[![Build Status](https://travis-ci.com/cheeseburgertony/bamboosword.svg?branch=main)](https://travis-ci.com/cheeseburgertony/bamboosword)
[![npm version](https://img.shields.io/npm/v/bamboosword.svg)](https://www.npmjs.com/package/bamboosword)
[![License](https://img.shields.io/npm/l/bamboosword.svg)](https://github.com/cheeseburgertony/bamboosword/blob/main/LICENSE)

## 安装

通过 npm 或 yarn 安装:

```bash
npm install bamboosword --save
# 或
yarn add bamboosword
```

## 使用

```jsx
// 引入样式
import 'bamboosword/dist/index.css';
// 引入组件
import { Button } from 'bamboosword';

function App() {
  return (
    <Button btnType="primary">点击我</Button>
  );
}
```

## 特性

- 🎨 精心设计的 UI 组件
- 📦 开箱即用的高质量 React 组件
- 🔧 使用 TypeScript 开发，提供完整的类型定义
- 📃 详细的文档和示例
- 📱 响应式设计

## 组件

该组件库包含以下组件:

- **Button**: 按钮组件，支持多种类型和尺寸
- **Menu**: 菜单组件，支持横向纵向两种模式和下拉菜单
- **Icon**: 图标组件，基于 FontAwesome 图标
- **Input**: 输入框组件
- **AutoComplete**: 自动完成组件
- **Upload**: 文件上传组件，支持拖拽上传
- **Progress**: 进度条组件
- **Form**: 表单组件，支持数据验证
- **Select**: 选择器组件
- **Alert**: 警告提示组件
- **Tabs**: 标签页组件

## 文档和示例

查看我们的 [Storybook 文档](https://cheeseburgertony.cn/bamboosword/) 获取详细的使用示例和 API 文档。

## 开发

### 项目结构

```
bamboosword/
  ├── src/               # 源代码
  │   ├── components/    # 组件目录
  │   ├── styles/        # 样式文件
  │   └── hooks/         # 自定义 Hooks
  ├── dist/              # 构建输出目录
  ├── rollup/            # Rollup 配置
  ├── .storybook/        # Storybook 配置
  └── public/            # 静态文件
```

### 本地开发

克隆仓库并安装依赖:

```bash
git clone https://github.com/cheeseburgertony/bamboosword.git
cd bamboosword
npm install
```

启动开发服务器:

```bash
npm start
```

运行 Storybook:

```bash
npm run storybook
```

### 构建

```bash
# 构建组件库
npm run build

# 构建 Storybook 静态文件
npm run build-storybook
```

### 测试

```bash
# 运行测试
npm test

# 运行测试覆盖率
npm test -- --coverage
```

## 浏览器支持

- 现代浏览器
- Chrome
- Firefox
- Safari
- Edge

## 贡献

欢迎贡献代码、报告问题或提出新功能建议！

1. Fork 仓库
2. 创建你的特性分支: `git checkout -b feature/amazing-feature`
3. 提交你的更改: `git commit -m 'Add some amazing feature'`
4. 推送到分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

## 许可证

[MIT](https://github.com/cheeseburgertony/bamboosword/blob/main/LICENSE)

## 作者

[cheeseburgertony](https://github.com/cheeseburgertony)
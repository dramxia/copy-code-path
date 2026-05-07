# Copy Code Path

一个 VSCode 插件，用于快速复制选中代码的文件路径和行号。

## 功能

选中代码后，按快捷键即可将文件路径和行号复制到剪贴板。

格式示例：
- 单行：`@src/index.js#L10`
- 多行：`@src/components/App.tsx#L25-50`

## 快捷键

- Windows/Linux: `Ctrl+Shift+C`
- macOS: `Cmd+Shift+C`

## 使用方法

1. 在编辑器中选中代码
2. 按快捷键 `Ctrl+Shift+C` (或 `Cmd+Shift+C`)
3. 路径已复制到剪贴板

## 开发

### 安装依赖

```bash
npm install
```

### 调试

1. 在 VSCode 中打开此项目
2. 按 `F5` 启动调试
3. 在新打开的 VSCode 窗口中测试插件

### 打包

```bash
npm install -g @vscode/vsce
vsce package
```

这将生成 `.vsix` 文件，可以手动安装到 VSCode 中。

## 安装

### 方式一：从 .vsix 文件安装

1. 打包插件：`vsce package`
2. 在 VSCode 中：`Extensions` -> `...` -> `Install from VSIX...`
3. 选择生成的 `.vsix` 文件

### 方式二：开发模式

1. 将此项目复制到 VSCode 插件目录：
   - Windows: `%USERPROFILE%\.vscode\extensions`
   - macOS/Linux: `~/.vscode/extensions`
2. 重启 VSCode

## License

MIT

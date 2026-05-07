# Copy Code Path

一个轻量级的 VS Code 插件，用于快速复制选中代码的文件路径和行号到剪贴板。

## 功能特性

- 快速复制文件相对路径和行号
- 支持单行和多行选择
- 未选中内容时复制文件路径
- 自动计算工作区相对路径
- 一键操作，提升协作效率

## 输出格式

- **仅文件路径**（无选中内容）：`@src/index.js`
- **单行选择**：`@src/index.js#L10`
- **多行选择**：`@src/components/App.tsx#L25-50`

## 使用方法

1. 在编辑器中选中需要引用的代码（可选）
2. 按快捷键：
   - **Windows/Linux**: `Ctrl+Shift+C`
   - **macOS**: `Cmd+Shift+C`
3. 路径已自动复制到剪贴板

也可以通过命令面板（`Ctrl+Shift+P` / `Cmd+Shift+P`）搜索 `Copy Code Path with Line Numbers` 执行。

## 使用场景

- 在代码审查中快速引用具体代码位置
- 在团队协作时精确指出问题代码
- 在文档中添加代码引用链接
- 在 Issue 或 PR 中标注相关代码

## 安装

### 方式一：从 VSIX 文件安装

1. 打包插件：
   ```bash
   npm install -g @vscode/vsce
   vsce package
   ```

2. 在 VS Code 中安装：
   - 打开扩展面板（`Ctrl+Shift+X` / `Cmd+Shift+X`）
   - 点击右上角 `...` 菜单
   - 选择 `Install from VSIX...`
   - 选择生成的 `.vsix` 文件

### 方式二：开发模式

1. 将项目克隆到 VS Code 插件目录：
   - **Windows**: `%USERPROFILE%\.vscode\extensions\copy-code-path`
   - **macOS/Linux**: `~/.vscode/extensions/copy-code-path`

2. 安装依赖：
   ```bash
   npm install
   ```

3. 重启 VS Code

## 开发

### 环境要求

- Node.js 20+
- VS Code 1.80.0+

### 本地调试

1. 克隆项目并安装依赖：
   ```bash
   git clone <repository-url>
   cd copy-code-path
   npm install
   ```

2. 在 VS Code 中打开项目

3. 按 `F5` 启动调试，会打开一个新的 VS Code 窗口

4. 在新窗口中测试插件功能

### 代码检查

```bash
npm run lint
```

## 技术栈

- VS Code Extension API
- Node.js

## License

MIT

const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('copy-code-path.copyPath', function () {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showWarningMessage('没有打开的编辑器');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        // 获取文件路径
        const filePath = document.uri.fsPath;

        // 获取工作区根目录
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        let relativePath = filePath;

        if (workspaceFolder) {
            // 计算相对路径
            relativePath = filePath.replace(workspaceFolder.uri.fsPath, '');
            // 移除开头的斜杠
            if (relativePath.startsWith('/') || relativePath.startsWith('\\')) {
                relativePath = relativePath.substring(1);
            }
        }

        // 获取选中的行号（VSCode 行号从 0 开始，需要 +1）
        const startLine = selection.start.line + 1;
        const endLine = selection.end.line + 1;

        // 构建路径字符串
        let pathString;
        if (startLine === endLine) {
            // 单行选择
            pathString = `@${relativePath}#L${startLine}`;
        } else {
            // 多行选择
            pathString = `@${relativePath}#L${startLine}-${endLine}`;
        }

        // 复制到剪贴板
        vscode.env.clipboard.writeText(pathString).then(() => {
            vscode.window.showInformationMessage(`已复制: ${pathString}`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

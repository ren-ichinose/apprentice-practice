## デバッガーを活用しよう

### 手順
1. VsCodeで F5 keyを押下する
2. Node.jsを選択する
3. launch.jsonの設定をする
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch TypeScript",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "cwd": "${workspaceFolder}",
      "program": "${file}",
    }
  ]
}
```
4. ターミナル > 規定のビルドタスクの構成 > tsc: ビルド - tsconfig.json > tasks.jsonが自動生成される
5. tasks.jsonの設定
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": ["$tsc"],
      "group": "build",
      //launch.jsonのpreLaunchTaskと合わせる。
      "label": "tsc: build - tsconfig.json" 
    }
  ]
}
```
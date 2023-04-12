## コーディング規約と静的解析ツールの理解を深めよう

### 手順
1. ESLintのインストールおよび構成を決定する
```bash
npm init @eslint/config
```

2. Airbnb のスタイルガイドのパッケージを追加する
```bash
yarn add --dev eslint-config-airbnb-base
# Reactの設定を含むパッケージは以下の通り
yarn add --dev eslint-config-airbnb eslint-config-airbnb-typescript
```

3. フォーマット実行
```bash
npx eslint
```

<!-- todo airbnbの設定を使いたいがエラーが発生してしまう。 -->
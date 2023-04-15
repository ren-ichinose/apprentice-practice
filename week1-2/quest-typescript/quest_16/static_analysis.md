## コーディング規約と静的解析ツールの理解を深めよう

### 手順

1. ESLint のインストールおよび構成を決定する。

```bash
npm init @eslint/config
```

2. Prettier 関連のパッケージをインストール。

```bash
yarn add --dev prettier eslint-config-prettier @trivago/prettier-plugin-sort-imports
```

3. eslintrc.js の設定

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist'],
  rules: {},
};

```

4. .prettierrc の設定

```json
{ "singleQuote": true }
```

6. フォーマット実行

```bash
npx eslint
```

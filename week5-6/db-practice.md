# DataBase Practice  


## データベース関連の基本的な用語への理解を深める  

### データベースとは
データの集まり。

### DBMSとは
データベースを管理するシステム。

### RDBMSとは
二次元表の形式でデータを管理するシステム。

### 主要なRDBMSの製品
- Oracle Database
- PostgreSQL
- MySQL

### SQLとは
データベースを操作するための言語。

### テーブルとは
- 二次元表の形式でデータを管理するもの。
- 属性を表すカラムと、1件のデータであるレコードで構成されている。

### カラム
- テーブルの列に相当する。
- 属性（意味）をもっている。

### レコードとは
- テーブルの行に相当する。
- 1件のデータ。

### クエリ
- データベースへの命令のこと。


## データベースの作成・指定・削除を理解する

### データベースへの接続
RootでMySQLへ接続
```bash
mysql -u root -p
```

### データベースの作成
```bash
CREATE DATABASE practice;
```

### データベースの表示
```bash
SHOW DATABASES;
```

### データベースの指定
```bash
USE practice;
```

### 指定されているデータベースを確認
```bash
SELECT DATABASE();
```

### データベースを削除
```bash
DROP DATABASE pracitice;
```

### sample
```bash

```

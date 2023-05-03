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
```sql
mysql -u root -p
```

### データベースの作成
```sql
CREATE DATABASE practice;
```

### データベースの表示
```sqlshoq
SHOW DATABASES;
```

### データベースの指定
```sql
USE practice;
```

### 指定されているデータベースを確認
```sql
SELECT DATABASE();
```

### データベースを削除
```sql
DROP DATABASE pracitice;
```


## ユーザーの作成・権限付与・削除を理解する

### ユーザーの作成
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'mysql';
```

### ユーザーの表示
```sql
SELECT user, host FROM mysql.user;
```

### ユーザーの権限の確認
```sql
SHOW GRANTS FOR 'user'@'localhost';
```

### ユーザーへの権限付与
```sql
GRANT ALL ON *.* TO 'user'@'localhost';
```

### ユーザーの権限の剥奪
```sql
REVOKE ALL ON *.* FROM 'user'@'localhost';
```

### 権限のリロード
```sql
FLUSH PRIVILEGES;
```

### ユーザーの削除
```sql
DROP USER 'user'@'localhost';
```


## テーブルの作成・修正・削除を理解する

### テーブルの作成
```sql
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL );
```

### テーブルの表示
```sql
SHOW TABLES;
```

### カラムの追加
```sql
ALTER TABLE users ADD email VARCHAR(50);
```

### カラムの表示
```sql
SHOW COLUMNS FROM users;

```

### カラムの削除
```sql
ALTER TABLE users DROP COLUMN age;
```

### テーブルの削除
```sql
DROP TABLE users;
```


## データの登録・検索・更新・削除を理解する

### データの登録
```sql
INSERT INTO users(id, name, email) VALUES(1, '鈴木', 'xxx@sample.com');
```

### データの検索
```sql
SELECT * FROM users;
```

### データの更新
```sql
UPDATE users SET name = '鈴木' WHERE id = 1;
```

### データの削除
```sql
DELETE FROM users;
```
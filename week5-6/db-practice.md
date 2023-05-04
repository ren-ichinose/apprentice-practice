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
UPDATE users SET name = '佐藤' WHERE id = 1;
```

### データの削除
```sql
DELETE FROM users;
```


## データの検索を理解する

### 全カラムの取得
```sql
SELECT * FROM dept_manager;
```

### カラムの選択
```sql
SELECT emp_no FROM dept_manager;
```

### カラム名の別名
```sql
SELECT emp_no AS employee_no FROM dept_manager;
```

### 重複行の削除
```sql
SELECT DISTINCT dept_no FROM dept_manager;
```


## データの絞り込みを理解する
### 指定した行数のみ取得
```sql
SELECT * FROM employees LIMIT 10;
```

### 等しいデータの絞り込み
```sql
SELECT * FROM employees WHERE gender = 'F' LIMIT 10;
```

### 等しくないデータの絞り込み
```sql
SELECT * FROM employees WHERE NOT gender = 'F' LIMIT 10;
```

### より大きいデータの絞り込み
```sql
SELECT * FROM employees WHERE birth_date >= '1960-01-01' LIMIT 10;
```

### あいまいな条件の絞り込み
```sql
SELECT * FROM employees WHERE first_name LIKE '%vi%' LIMIT 10;
```

### 特定の範囲の絞り込み
```sql
SELECT * FROM employees WHERE birth_date BETWEEN '1960-01-01' AND '1960-01-31' LIMIT 10;
```

### かつ
```sql
SELECT * FROM employees WHERE first_name = 'Mary' AND gender = 'F';
```

### または
```sql
SELECT * FROM employees WHERE first_name = 'Mary' OR last_name = 'Peck' LIMIT 10;
```

### 含まれる
```sql
SELECT * FROM employees WHERE emp_no IN (10011, 10021, 10031);
```

### 抽出するカラムを絞る
```sql
SELECT first_name, last_name FROM employees WHERE emp_no = 20000;
```

### あいまいなデータの検索
```sql
SELECT * FROM employees WHERE birth_date LIKE '1959-01%';
```


## 検索結果の並び替え

### 昇順の並び替え
```sql
SELECT * FROM employees ORDER BY birth_date ASC LIMIT 10;
```

### 降順の並び替え
```sql
SELECT * FROM employees ORDER BY birth_date DESC LIMIT 10;
```

### 複数条件の並び替え
```sql
SELECT * FROM employees ORDER BY birth_date ASC, hire_date DESC, emp_no ASC LIMIT 30;
```
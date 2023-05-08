# SQL Practice  


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


## データの集計を理解する

### 列の合計値
```sql
SELECT SUM(salary) FROM salaries;
```

### 列の平均値
```sql
SELECT AVG(salary) FROM salaries;
```

### 四捨五入
```sql
SELECT ROUND(AVG(salary)) FROM salaries;
```

### 列の最大値
```sql
SELECT MAX(salary) FROM salaries;
```

### 列の最小値
```sql
SELECT MIN(salary) FROM salaries;
```

### 行数
```sql
SELECT COUNT(*) FROM salaries;
```

### 絞り込みとの組み合わせ
```sql
SELECT MAX(salary) FROM salaries WHERE from_date = '1986-06-26';
```

### 少数第1桁
```sql
SELECT ROUND(AVG(salary), 1) FROM salaries WHERE to_date = '1991-06-26';
```


## データのグルーピングを理解する

### グルーピング
```sql
SELECT emp_no, COUNT(*) FROM salaries GROUP BY emp_no LIMIT 10;
```

### グルーピングと集計関数
```sql
SELECT emp_no, MIN(salary), MAX(salary)
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10010
GROUP BY emp_no;
```

### グルーピングと集計関数2
```sql
SELECT emp_no, min(from_date), max(to_date)
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10010 
GROUP BY emp_no;
```

### 絞り込み(HAVING)
```sql
SELECT emp_no, MAX(salary)
FROM salaries
GROUP BY emp_no
HAVING MAX(salary) > 140000;
```

### 最小給与(HAVING)
```sql
SELECT emp_no, MIN(salary)
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10100 
GROUP BY emp_no
HAVING MIN(salary) < 40000;
```

### 最終勤務日(HAVING)
```sql
SELECT emp_no, MAX(to_date)
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10100 
GROUP BY emp_no
HAVING MAX(to_date) < '9999-01-01';
```


## テーブルの結合を理解する

### 内部結合
```sql
SELECT *
FROM dept_manager
INNER JOIN employees
ON dept_manager.emp_no = employees.emp_no;
```

###  列の選択
```sql
SELECT dept_manager.dept_no, dept_manager.emp_no, employees.first_name, employees.last_name
FROM dept_manager
INNER JOIN employees
ON dept_manager.emp_no = employees.emp_no;
```

### 複数の内部結合
```sql
SELECT dept_manager.dept_no, departments.dept_name, dept_manager.emp_no, employees.first_name, employees.last_name
FROM dept_manager
INNER JOIN departments
ON dept_manager.dept_no = departments.dept_no
INNER JOIN employees
ON dept_manager.emp_no = employees.emp_no;
```

### 絞り込み
```sql
SELECT dept_manager.dept_no, departments.dept_name, dept_manager.emp_no, employees.first_name, employees.last_name
FROM dept_manager
INNER JOIN departments
ON dept_manager.dept_no = departments.dept_no
INNER JOIN employees
ON dept_manager.emp_no = employees.emp_no
WHERE dept_manager.to_date = '9999-01-01';
```

### 絞り込み
```sql
SELECT employees.first_name, employees.last_name, salaries.from_date, salaries.to_date, salaries.salary
FROM employees
INNER JOIN salaries
ON employees.emp_no = salaries.emp_no
WHERE employees.emp_no BETWEEN 10001 AND 10010;
```

### 内部結合と外部結合の違い
- 違い
  - 内部結合は共通して存在するデータのみを取得する。
  - 外部結合は共通していないデータも含めて取得する。
- 使い分け
  - 内部結合は共通して存在するデータのみを取得したい場合に使用。
  - 外部結合は共通していないデータも含めて取得したい場合に使用


## サブクエリを理解する

### サブクエリ
```sql
SELECT emp_no, salary
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10010
AND salary > (SELECT AVG(salary) FROM salaries);
```

### 重複なし
```sql
SELECT DISTINCT emp_no
FROM salaries
WHERE salary > 2  * (SELECT AVG(salary) FROM salaries);
```

### 最大給与
```sql
SELECT emp_no, MAX(salary)
FROM salaries
WHERE emp_no BETWEEN 10001 AND 10010
AND salary > (SELECT AVG(salary) FROM salaries)
GROUP BY emp_no;
```


## 条件分岐を理解する

### CASE
```sql
SELECT emp_no, to_date,
  CASE 
    WHEN to_date = '9999-01-01' THEN 'employed'
    ELSE 'unemployed'
  END AS employment_status
FROM salaries
WHERE emp_no BETWEEN 10100 AND 10200;
```

### 年代
```sql
SELECT emp_no, birth_date,
  CASE
    WHEN birth_date BETWEEN '1950-01-01' AND '1959-12-31' THEN '50S'
    WHEN birth_date BETWEEN '1960-01-01' AND '1969-12-31' THEN '60s'
    ELSE 'other'
  END
FROM employees
WHERE emp_no BETWEEN 10001 AND 10050;
```

### 年代
```sql
SELECT 
  CASE
    WHEN birth_date BETWEEN '1950-01-01' AND '1959-12-31' THEN '50S'
    WHEN birth_date BETWEEN '1960-01-01' AND '1969-12-31' THEN '60s'
    ELSE 'other'
  END AS age_range, MAX(salaries.salary) AS max_salary
FROM employees
INNER JOIN salaries ON employees.emp_no = salaries.emp_no
GROUP BY age_range;
```


## 実行計画を理解する

### SQL における実行計画とは何か
- どうしたらより最短で実行できるか、オプティマイザによって計算して導き出された具体的な計画。

### 実行計画を確認すると何が良いのか
- よりパフォーマンスを高めるために、どのように改善すれば良いか、手がかりを見つけることができる。

### 実行計画の確認
```sql
EXPLAIN SELECT * FROM salaries WHERE salary = 70575;
```

### 実行時間の確認
```sql
EXPLAIN ANALYZE SELECT * FROM salaries WHERE salary = 70575;
```

### 前者のクエリよりも実行時間が短い理由
- 前者のクエリは全行をスキャンする必要があるが、後者のクリエはインデックスを使用して検索をしているため効率が良い。


## N+1問題を理解する

### N+1問題とは
- 無駄に沢山のSQLを発行してパフォーマンスを下げてしまうデータの取得方法の問題。

### N+1問題の対策
- Eager Loading
  - アプリケーションが必要とする全ての関連データを一度にデータベースから取得する方法。
  - データベースへのアクセス回数を減らすことができ、パフォーマンスの向上に繋がる。
- Lazy Loading
  - アプリケーションが必要とするデータだけを必要な時に取得する方法。
  - データベースへの負荷が少なくなるが、必要になった時にデータベースにアクセスするため、アプリケーションの処理が遅くなる可能性がある。
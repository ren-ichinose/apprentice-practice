# ITV Documentation

<details>
<summary><h2>STEP01：テーブル設計</h2></summary>　　


<h3>テーブル：programs</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | BIGINT |  | PRIMARY |  | YES |
| title | VACHAR(255) |  |  |  |  |
| description | TEXT |  |  |  |  |

<h3>テーブル：genres</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| name | VACHAR(255) |  |  |  |  |

`ユニークキー制約：nameに対して設定`  

<h3>テーブル：program_genres</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| program_id | BIGINT |  | INDEX |  |  |
| genre_id | INT |  | INDEX |  | YES |

`ユニークキー制約：program_idとgenre_idの複合ユニークキーを設定`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  
`外部キー制約：genre_idはgenresテーブルのidカラムを参照`  

<h3>テーブル：channels</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| name | VACHAR(255) |  |  |  |  |

`ユニークキー制約：nameに対して設定`  

<h3>テーブル：programs_seasons</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | BIGINT |  | PRIMARY |  | YES |
| program_id | BIGINT |  |  | INDEX |  |
| season_number | INT | YES |  |  |  |

`ユニークキー制約：season_numberとprogram_idの複合ユニークキーを設定`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  

<h3>テーブル：episodes</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | BIGINT |  | PRIMARY |  | YES |
| episode_number | INT | YES |  |  |  |
| title | VACHAR(255) |  |  |  |  |
| description | TEXT |  |  |  |  |
| duration | INT |  |  |  |  |
| release_date | DATE |  |  |  |  |
| views | BIGINT |  |  | 0 |  |
| program_seasons_id | BIGINT |  | INDEX |  |  |

`ユニークキー制約：episode_numberとprogram_seasons_idの複合ユニークキーを設定`  
`外部キー制約：program_seasons_idはprograms_seasonsテーブルのidカラムを参照`  


<h3>テーブル：program_slots</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| start_time | DATETIME |  |  |  |  |
| end_time  | DATETIME |  |  |  |  |
| channel_id | INT |  |  |  |  |
| episode_id | BIGINT |  | INDEX |  |  |
| views | BIGINT |  |  | 0 |  |

`ユニークキー制約：start_timeとend_timeとchannel_idの複合ユニークキーを設定`  
`外部キー制約：channel_idはchannelsテーブルのidカラムを参照`  
`外部キー制約：episode_idはepisodesテーブルのidカラムを参照`  

</details>

---

<details>
<summary><h2>STEP02：データベースの構築からサンプルデータの挿入まで</h2></summary>　　

### データベースの構築 

1. 現在のディレクトリから`docker-compose.yml`がある階層に移動します。  
2. コンテナの構築・起動をします。  
`docker compose up -d` 
3. コンテナに接続します。  
`docker compose exec db bash`  
4. MySQLに接続します。  
`mysql -u [username] -p`  
5. `docker-compose.yml`の記述によって、データベース(`internet_tv`)が作成されていることを確認します。  
`SHOW DATABASES;`  

### テーブルの作成

MySQLに接続した状態で`itv_create-table.sql`を実行しテーブルを作成します。  
`source /internet-tv/setup-sql/itv_create-table.sql` 

### サンプルデータの挿入

MySQLに接続した状態で`itv_create-table.sql`を実行しサンプルデータを挿入します。  
`source /internet-tv/setup-sql/itv_insert-data.sql` 

</details>

---

<details>
<summary><h2>STEP03：データを抽出するクエリ</h2></summary>　　

### エピソード視聴数トップ3のエピソードタイトルと視聴数を取得する。
```mysql
SELECT title, views
FROM episodes
ORDER BY views DESC
LIMIT 3;
```

### エピソード視聴数トップ3の番組タイトル、シーズン数、エピソード数、エピソードタイトル、視聴数を取得する。
```mysql
SELECT
  p.title AS program_title,
  ps.season_number  AS season_number, 
  e.episode_number AS episode_number,
  e.title AS episode_title,
  e.views  AS viwes
FROM episodes e
JOIN programs_seasons ps ON e.program_season_id = ps.id
JOIN programs p ON ps.program_id = p.id
ORDER BY views DESC
LIMIT 3;
```

### 本日放送される全ての番組に対して、チャンネル名、放送開始時刻(日付+時間)、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を取得する。
```mysql
SELECT 
  c.name AS channel_name, 
  psl.start_time, 
  psl.end_time, 
  ps.season_number, 
  e.episode_number,
  e.title AS episode_title, 
  e.description AS episode_description
FROM program_slots psl
JOIN channels c ON psl.channel_id = c.id
JOIN episodes e ON psl.episode_id = e.id
JOIN programs_seasons ps ON e.program_season_id = ps.id
WHERE psl.start_time BETWEEN '2023-01-01 00:00:00' AND '2023-01-01 23:59:59'
ORDER BY psl.start_time;
```

### `Channel A`に対して、放送開始時刻、放送終了時刻、シーズン数、エピソード数、エピソードタイトル、エピソード詳細を本日から一週間分取得する。
```mysql
SELECT
  psl.start_time, 
  psl.end_time, 
  ps.season_number, 
  e.episode_number,
  e.title AS episode_title, 
  e.description AS episode_description
FROM program_slots psl
JOIN channels c ON psl.channel_id = c.id
JOIN episodes e ON psl.episode_id = e.id
JOIN programs_seasons ps ON e.program_season_id = ps.id
WHERE c.name = 'Channel A' AND psl.start_time BETWEEN '2023-01-01 00:00:00' AND '2023-01-07 23:59:59'
ORDER BY psl.start_time
```

### 直近一週間に放送された番組の中で、エピソード視聴数合計トップ2の番組に対して、番組タイトル、視聴数を取得する。
```mysql
SELECT
  p.title AS program_title,
  SUM(psl.views) AS total_views 
FROM program_slots psl
JOIN episodes e ON psl.episode_id = e.id
JOIN programs_seasons ps ON e.program_season_id = ps.id
JOIN programs p ON ps.program_id = p.id
WHERE psl.start_time BETWEEN '2023-01-01 00:00:00' AND '2023-01-07 23:59:59'
GROUP BY p.id
ORDER BY total_views DESC
LIMIT 2;
```

<!-- ### 番組の視聴数ランキングはエピソードの平均視聴数ランキングとします。ジャンルごとに視聴数トップの番組に対して、ジャンル名、番組タイトル、エピソード平均視聴数を取得する。
```mysql

SELECT g.name, avg_gi.top_episode_views
FROM genres g
JOIN (
  SELECT pg.genre_id, MAX(avg.avg_episode_views) AS top_episode_views
  FROM program_genres pg
  JOIN genres g ON pg.genre_id = g.id
  JOIN (
    SELECT 
      AVG(e.views) AS avg_episode_views,
      ps.program_id AS program_id
    FROM episodes e
    JOIN programs_seasons ps ON e.program_season_id = ps.id
    GROUP BY ps.program_id
    ORDER BY avg_episode_views DESC) avg
  ON pg.program_id = avg.program_id
  GROUP BY pg.genre_id) avg_gi
ON g.id = avg_gi.genre_id;
``` -->

</details>




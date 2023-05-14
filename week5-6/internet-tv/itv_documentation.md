# ITV Documentation

<details>
<summary><h2>STEP01：テーブル設計</h2></summary>　　


<h3>テーブル：programs</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | BIGINT |  | PRIMARY |  | YES |
| title | VACHAR(100) |  |  |  |  |
| description | TEXT |  |  |  |  |

<h3>テーブル：genres</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| name | VACHAR(100) |  |  |  |  |

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
| name | VACHAR(100) |  |  |  |  |

`ユニークキー制約：nameに対して設定`  

<h3>テーブル：seasons</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| season_number | INT |  |  |  |  |
| program_id | BIGINT |  | INDEX |  |  |

`ユニークキー制約：season_numberとprogram_idの複合ユニークキーを設定`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  

<h3>テーブル：episodes</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| episode_number | INT | YES |  |  |  |
| title | VACHAR(100) |  |  |  |  |
| description | TEXT |  |  |  |  |
| duration | INT |  |  |  |  |
| release_date | DATE |  |  |  |  |
| views | INT |  |  | 0 |  |
| season_id | INT | YES | INDEX |  |  |
| program_id | BIGINT |  | INDEX |  |  |

`ユニークキー制約：season_numberとepisode_numberの複合ユニークキーを設定`  
`外部キー制約：season_idはseasonsテーブルのidカラムを参照`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  


<h3>テーブル：program_slots</h3>

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| start_time | DATETIME |  |  |  |  |
| end_time  | DATETIME |  |  |  |  |
| channel_id | INT |  |  |  |  |
| episode_id | INT |  | INDEX |  |  |
| views | INT |  |  | 0 |  |

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


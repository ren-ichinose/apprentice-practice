# ITV Documentation

## STEP01：テーブル設計

**テーブル：programs**

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | BIGINT(20) |  | PRIMARY |  | YES |
| title | VACHAR(100) |  |  |  |  |
| description | TEXT |  |  |  |  |

**テーブル：genres**

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| name | VACHAR(100) |  |  |  |  |

`ユニークキー制約：nameに対して設定`  

**テーブル：program_genres**

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| program_id | BIGINT(20) |  | INDEX |  |  |
| genre_id | INT |  | INDEX |  | YES |

`ユニークキー制約：program_idとgenre_idの複合ユニークキーを設定`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  
`外部キー制約：genre_idはgenresテーブルのidカラムを参照`  

**テーブル：channels**

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| name | VACHAR(100) |  |  |  |  |

`ユニークキー制約：nameに対して設定`  

**テーブル：seasons**

|カラム名|データ型|NULL|キー|初期値|AUTO INCREMENT|
| ---- | ---- | ---- | ---- | ---- | ---- |
| id | INT |  | PRIMARY |  | YES |
| season_number | INT |  |  |  |  |
| program_id | BIGINT(20) |  | INDEX |  |  |

`ユニークキー制約：season_numberとprogram_idの複合ユニークキーを設定`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  

**テーブル：episodes**

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
| program_id | BIGINT(20) |  | INDEX |  |  |

`ユニークキー制約：season_numberとepisode_numberの複合ユニークキーを設定`  
`外部キー制約：season_idはseasonsテーブルのidカラムを参照`  
`外部キー制約：program_idはprogramsテーブルのidカラムを参照`  


**テーブル：program_slots**

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




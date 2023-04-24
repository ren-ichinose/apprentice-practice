# Linux Practice  


## Linuxについての理解を深めよう  

### OSとは  
・Operating System（オペレーティングシステム）の略。  
・コンピューター全体を管理して、動かす役割を担っているソフトウェア。  
・アプリケーションとハードウェアの間に位置している。  

### Linux とは
・OSのひとつ。  
・ソースコードが公開されている。  
・ソフトウェアを自由に改良・配布ができる。  
・無料で使うことができる。  
・サーバー用として使われることが多い。  

### カーネルとディストリビューションとは  
- カーネル
  - OSの基本機能を実装したソフトウェア。  
  - コンピューターのハードウェアとソフトウェアの間のインタフェースを提供するソフトウェア。  
  - メモリ管理、プロセス管理、デバイスドライバなどの重要な機能を担っている。  
  - ユーザーの入力やアプリケーションの出力を管理する機能を担っている。  
  
- ディストリビューション  
  - ユーティリティやアプリケーションなど、カーネル以外の便利なソフトウェアを組み合わせたOSのパッケージ。  

### 有名なディストリビューション  
- Ubuntu（Debian系）  
- CentOS（RHEL系）  
- Debian  

### シェルとは  
- ユーザーとカーネルの間に位置しているソフトウェア。  
- OSと対話するためのインターフェース（窓口）を提供している。  
- ユーザーの入力とコンピューターの出力をそれぞれに伝える役割。  


## ディレクトリを操作しよう  

### 現在のディレクトリを表示
```bash
pwd
```

### ルートディレクトリへ移動
```bash
cd /
```

### ホームディレクトリへ移動
```bash
cd ~
```

### ひとつ上の親ディレクトリに移動
```bash
cd ..
```

### ディレクトリ内容の表示
```bash
ls
```

### 隠しファイルを含むすべてのファイルとディレクトリを表示
```bash
cd ls -aF
```

### `/etc`ディレクトリの内容を、詳細なリスト形式で表示
```bash
cd ls -l /etc
```

### ホームディレクトリで`projects`ディレクトリを作成
```bash
cd ~
mkdir projects
```

### `projects`ディレクトリの削除
```bash
rm -r projects
```


## マニュアルを確認できる  

### man コマンド
```bash
rm -r projects
```

bash: man: command not foundの場合
```bash
apt-get update
apt-get install -y man
```


## ファイルを操作できる  

### /etc/hosts ファイルの中身を出力
```bash
cat /etc/hosts
```

### /etc/hosts ファイルの中身をスクロール式で表示
```bash
less /etc/hosts
```

### README.md という名前の空ファイルを作成
```bash
touch README.md
```

### README.md ファイルの名前を TMP.md という名前に変更
```bash
mv README.md TMP.md
```

### TMP.md ファイルをコピーして COPY.md ファイルを作成
```bash
rm TMP.md
```

### TMP.md ファイルをコピーして COPY.md ファイルを作成
```bash
cp TMP.md COPY.md
```

###  シンボリックを使いこなす
```bash
ln -s README.md README_SYMBOLIC.md
echo "Hello world" >> README.md
cat README_SYMBOLIC.md
```

### ホームディレクトリ以下のファイルに対して、README という文字列が含まれるファイルを全て検索
```bash
find ~/ -type f -name 'README*'
```

### ~/sample.txtファイルを作成 → `apple　banana　grape　lemon`を追記 → `a`で始まる単語を検索
```bash
touch ~/sample.txt
echo "apple
banana
grape
lemon" > ~/sample.txt
grep '^a' sample.txt
```
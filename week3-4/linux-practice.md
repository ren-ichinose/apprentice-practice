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
ls -l /etc
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


## マニュアルを確認しよう  

### man コマンド
```bash
rm -r projects
```

bash: man: command not foundの場合
```bash
apt-get update
apt-get install -y man
```


## ファイルを操作しよう  

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

### TMP.md ファイルを削除
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


## 標準入出力を操作しよう  

### 標準入力、標準出力、標準エラー出力とは
- 標準入力：その環境における、標準の入力元からの入力（キーボードから入力）
- 標準出力：その環境における、標準の出力先への出力（画面への出力）
- 標準エラー：その環境における、標準の出力先へのエラー出力（画面へのエラー出力）

### `ls`コマンドで出力した結果を`~/root.txt`という新規ファイルに保存
```bash
ls / > ~/root.txt
```

### エラー結果を`~/error.txt`という新規ファイルに保存
```bash
ls /hoge 2> ~/error.txt
```

### ルートディレクトリと存在しないファイルを`ls`コマンドで一度で参照しようとして、その両方の結果を一度に`~/result.txt`という新規ファイルに保存
```bash
ls / /hoge > ~/result.txt 2>&1
```

### `/dev/null`とは
 ・ファイルのひとつ
 ・受け取った入力は何もせず破棄する
 ・読み取っても何も出力されない
 ・不要なメッセージの出力やファイルの中身を強制的に空にする場合に使用される

 ### ルートディレクトリを`ls`コマンドで参照した結果を`/dev/null`にリダイレクト
```bash
ls / > /dev/null
```

 ### ルートディレクトリを`ls`コマンドで参照した結果のうち`l`から始まるものだけを、パイプラインを使用して一回のコマンドで表示
```bash
ls / | grep '^l'
```


## パーミッションを操作しよう  

### `README.md`という名前の空ファイルを作成し、ファイルのオーナーとグループを確認
```bash
touch ~/README.md
ls -l ~/README.md
```

### README.md ファイルのオーナーに対して、読み取り、書き込み、実行の全ての権限を付与
```bash
chmod u+rwx ~/README.md
```

### permission という名前の空ディレクトリを作成 → permission ディレクトリのグループに対して、書き込み権限を付与
```bash
chmod g+w ~/permission/
```

### スーパーユーザーとして、ホームディレクトリの直下に superuser という名前の空ディレクトリを作成 → ディレクトリの権限を確認
```bash
sudo mkdir superuser
ls -ld superuser/
```

bash: sudo: command not foundの場合
```bash
apt-get update
apt-get install sudo
```

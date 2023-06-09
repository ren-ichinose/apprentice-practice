# Infrastructure Practice

## HTTPについて理解を深める

### HTTPとは
- HTTP（HyperText Transfer Protocol）は、ウェブ上で情報をやり取りするためのプロトコル（通信規約）のこと。
- クライアントとサーバーの間でデータを送受信する際に使用される。

### プロトコルとは
- プロトコルとは、通信を行う際のルールのこと。
- 異なる機器同士が通信を行う際には、お互いが同じルールを理解している必要がある。
- プロトコルは、通信の開始方法、データの形式、エラー処理などを定義している。

### HTTPリクエスト
- HTTPリクエストは、クライアントからサーバーに送信される要求のこと。
- HTTPリクエストは、以下の3つの要素で構成されている。
  - HTTPリクエストライン（リクエストライン）
    - リクエストの種類や対象のリソースを示している。      
  - HTTPリクエストヘッダ（ヘッダ）
    - クライアントやサーバーがHTTPリクエストやレスポンスで追加情報を渡すことができる。
    - キーと値のペアで構成されている。
    - 認証情報、Cookie、セッション情報などが含まれる。
  - HTTPリクエストメッセージボディ（メッセージボディ）
    - クライアントからサーバーに送信するデータが含まれる。
    - リクエストメソッドがGETの場合は、メッセージボディは空になる。
    - リクエストメソッドがPOSTの場合は、メッセージボディにデータが含まれる。

### HTTPレスポンス
- HTTPレスポンスは、サーバーからクライアントに送信される応答のこと。
- HTTPレスポンスは、以下の3つの要素で構成されている。
  - HTTPステータスライン（ステータスライン）
    - リクエストの結果を示している。
  - HTTPレスポンスヘッダ（ヘッダ）
    - クライアントやサーバーがHTTPリクエストやレスポンスで追加情報を渡すことができる。
    - キーと値のペアで構成されている。
    - Cookie、セッション情報などが含まれる。
  - HTTPレスポンスメッセージボディ（メッセージボディ）
    - サーバーからクライアントに送信するデータが含まれる。

## IPについて理解を深める

### IPアドレスとは
- IP（Internet Protocol）アドレスは、インターネット上で機器を識別するための番号のこと。
- 送信元と送信先を特定することができる。

### IPアドレスの種類
- IPアドレスには、以下の2種類がある。
  - グローバルIPアドレス
    - インターネット上で機器を識別するための番号。
    - インターネット上で一意に定まる。
  - プライベートIPアドレス
    - ローカルネットワーク内で機器を識別するための番号。
    - 同じローカルネットワーク内で一意に定まる。
    - インターネット上で一意に定まることはない。

### IPアドレスの割り当て
- IPアドレスはICANNをトップとして、複数の下部組織によって管理されている。
- IANA、RIR、NIR、LIR、ISPなど、いくつかの組織を通じてエンドユーザーにIPアドレスが割り当てられる。

- ICANN（Internet Corporation for Assigned Names and Numbers）
  - インターネットの資源をグローバルに調整する目的で建てられた非営利団体
  - IPアドレス・ドメイン・DNSルートネームサーバ等調整している。

- IANA（Internet Assigned Numbers Authority）
  - ICANNにおける資源管理の部門。
  - 過去にインターネット資源のIPアドレス・ドメイン名・プロトコル番号など管理を行なっていた。
  - 運営にアメリカの予算が使われており、IANAが行っていた役割を非営利団体のICANNに引き継ぎいだ。

- RIR（Regional Internet Registry）
  - 特定地域内のIPアドレスの割り当て業務を行うレジストリ。
  - APNIC(アジア太平洋地域)・ARIN(北米地域)・RIPE NCC(欧州地域)・LACNIC(中南米地域)・AFRINIC(アフリカ地域)の5つから構成されている。
      
- NIR（National Internet Registry）
  - RIPに代わって国・地域でIPアドレスの割当業務を行っているレジストリ。
  - APNICの管理下には、日本のJPNIC（Japan Network Information Center）をはじめ、CNNIC(中国)・KRNIC(韓国)・TWNIC(台湾)・VNNIC(ベトナム)・APJLL(インドネシア)の6つが存在する。

- LIR（Local Internet Registry）
  - NIR(ない場合はRIP)に代わってIPアドレスの割り当てや管理を行うレジストリ。
  - 日本の場合は、JPNIC（一般社団法人日本ネットワークインフォメーションセンター）がLIRとしての役割も担っている。

- ISP（Internet Service Provider）
  - インターネット接続サービスを提供する事業者。
  - インターネット接続サービスを提供するために、RIRやNIRからIPアドレスを割り当てられる。 
- end user

### IPアドレスのバージョン
- IPアドレスには、IPv4（Internet Protocol version 4）とIPv6（Internet Protocol version 6）がある。
  - IPv4（Internet Protocol version 4）
    - 32ビットのIPアドレス。
    - 現在も一般的に使用されているIPアドレス。
    - 「192.0.2.34」のように、8ビットごとに区切った数字により表記する。
    - 約43億個存在するが、2011年2月3日にIANA (ICANN)の持つ未使用在庫が無くなった。
    - APNIC/JPNICにおいては2011年4月15日に新規在庫が無くなっている。
  - IPv6（Internet Protocol version 6）
    - 128ビットのIPアドレス。
    - 「2001:0db8:85a3:0000:0000:8a2e:0370:7334」のように、16ビットごとに区切った16進数により表記する。
    - 約340,282,366,920,938,463,463,374,607,431,768,211,456個存在する。
    - Pv4アドレス枯渇に対する長期的な対応策として期待されています。

###　IPアドレスのCIDR表記
- CIDR（Classless Inter-Domain Routing）表記は、IPアドレスの範囲を簡潔かつ効率的に表現するための方法。
- IPアドレスのネットワーク部とホスト部の境界をスラッシュ（/）で区切り、サブネットマスクのビット数を示す。
  - 例：10.0.0.0/16
    - 10.0.0.0から10.0.255.255までの65,536個のIPアドレスの範囲を表す。

## DNSについて理解を深める

### ドメインとは
- IPアドレスを人が覚えやすいように表したもの。
- インターネット上でウェブサイトやネットワークリソースを識別するための名前。
- 階層構造になっており、右から順にトップレベルドメイン、第2レベルドメイン、第3レベルドメインと呼ばれる。

### DNSとは
- DNS（Domain Name System）は、ドメイン名とIPアドレスを紐づける仕組みのこと。
- ドメイン名とIPアドレスの対応関係管理し、情報をサーバーで保持している。
- 情報を管理するDNSサーバは階層構造になっており、クライアントは上位のDNSサーバから順に問い合わせをし、IPアドレスを取得する。


## ポート番号について理解を深める

## ポート番号とは
- コンピュータが通信に使用するプログラムを識別するための番号。
- 6ビットの整数であり、0番～65535番まで存在する。
- IPアドレスに該当するコンピュータの、どのプログラムに通信パケットを渡すのかを決定するために、ポート番号を使用する。
- セキュリティ上、不要なポート番号は閉じることを推奨する。

### 代表的なポート番号

- ウェルノウンポート番号
  - 0番～1023番までのポート番号。
  - 以下のようなポート番号がある。
    - 20：FTPデータ転送
      - FTPを利用しないときは閉じることを推奨
    - 21：FTPコントロール
      - FTPを利用しないときは閉じることを推奨
    - 22：SSH
      - セキュリティのためにサーバ側でポート番号の変更を推奨
    - 23：Telnet
      - セキュリティのためにサーバ側でポート番号の変更を推奨
    - 25：SMTP
      - SMTPs(port 465)の利用を推奨
    - 53：DNS
      - 名前解決用
    - 80：HTTP
      - HTTPS(port 443)の利用を推奨
    - 110：POP3
      - POP3s(port 995)の利用を推奨
    - 143：IMAP4
      - IMAP4s(port 993)の利用を推奨
    - 443：HTTPS
      - 通常のWeb閲覧やWebサービス用
    - 465：SMTP over SSL
      - メール送信用(SMTP over SSL)
    - 993：IMAP4 over SSL
      - IMAP形式のメール閲覧用(IMAP4 over SSL)
    - 995：POP3 over SSL
      - メール受信用(POP3 over SSL)

### HTTP/HTTPS通信
- HTTP通信は、80番ポートを使用する。
- HTTPS通信は、443番ポートを使用する。
- ブラウザは、ポートが指定されていない場合、URLのスキームがhttpの場合は80番ポート、httpsの場合は443番ポートを自動で選択する。


## Cookieについて理解を深める

### ステートレスとは
- ステートレスとは、状態を保持しないこと。
- サーバー側は以前のやり取りした情報を保持していない。

### Cookieとは
- Cookieは、クライアント側で情報を保持する仕組み。
- サーバーから情報がCookieとして送信される。
- クライアント側はCookieを保存しておき、次回以降のアクセス時にCookieを送信する。
- サーバー側はCookieを受け取り、クライアントの情報を取得することができる。

### セッションとは
- セッションとは、サーバー側で一時的にクライアントの状態を管理する仕組み
- セッションID（一意に識別できる値）をサーバーからクライアントに送信する。
- クライアント側は、次回以降のアクセス時にセッションIDを送信する。
- セッションIDをもとにサーバー側でクライアントの情報を管理する。

### Cookieとセッションの違い
- Cookieは、クライアント側に情報を保存する。
- セッションは、サーバー側に情報を保存する。
- Cookieは第三者に盗まれる可能性がある。
- セッションはサーバー側で情報を保持しているため、第三者に盗まれる可能性が低い。

### Cookieとセッションを組み合わせてログイン状態を管理する仕組み
- クライアントがサーバーにログイン情報を送信する。
- サーバーはログイン情報を認証し、認証に成功した場合はセッションIDを発行する。
- サーバーはセッションIDをCookieとしてクライアントに送信する。
- クライアントはCookieを保存しておき、次回以降のアクセス時にCookieを送信する。
- サーバーはCookieからセッションIDを取得し、セッションIDをもとに認証状態を確認する。

## AWSとは

### AWSとは
- AWS（Amazon Web Services）は、Amazonが提供するクラウドサービスのこと。
- 世界で最も包括的で、幅広く採用されている、クラウドコンピューティングプラットフォーム。
- サーバ環境の構築、データの保存、データベースの利用、セキュリティ対策など、様々なサービスを提供している。

### クラウドとは
- クラウドとは、インターネットを通じて、サーバー・ストレージ・データベース・ソフトウェアなどにアクセスできる技術のこと。
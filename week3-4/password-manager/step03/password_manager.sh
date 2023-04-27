#!/bin/bash

data_file_path="data.txt"

function error_handler() {
  if [ -f $data_file_path ]; then
    rm $data_file_path
  fi
  echo " Thank you!"
  exit 0
}
trap error_handler SIGINT

echo "パスワードマネージャーへようこそ！"
while true;
do
  read -p "次の選択肢から入力してください(Add Password/Get Password/Exit)：" mode
  if [ "$mode" = "Add Password" ]; then
    read -p "サービス名を入力してください：" service
    read -p "ユーザー名を入力してください：" name
    read -sp "パスワードを入力してください：" password

    gpg $data_file_path.gpg
    echo "${service}:${name}:${password}" >> $data_file_path
    rm $data_file_path.gpg
    
    gpg -c $data_file_path
    rm $data_file_path

    echo "パスワードの追加は成功しました"

  elif [ "$mode" = "Get Password" ]; then
    read -p "サービス名を入力してください：" service

    gpg $data_file_path.gpg
    result=$(grep "^$service:" $data_file_path)

    if [ -z "$result" ]; then
      echo "そのサービスは登録されていません"
    else
      name=$(grep "^$service:" $data_file_path | cut -f 2 -d ":")
      password=$(grep "^$service:" $data_file_path | cut -f 3 -d ":")
      echo "サービス名：$service"
      echo "ユーザー名：$name"
      echo "パスワード：$password"
    fi
    rm $data_file_path

  elif [ "$mode" = "Exit" ]; then
      echo "Thank you!"
      break

  else
      echo "入力が間違えています。Add Password/Get Password/Exit から入力してください"
  fi
done


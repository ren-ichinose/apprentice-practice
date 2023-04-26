#!/bin/bash

echo "パスワードマネージャーへようこそ！"
data_file_path="data.txt"

while true;
do
  echo "次の選択肢から入力してください(Add Password/Get Password/Exit)："
  read mode
  if [ "$mode" = "Add Password" ]; then
    echo "サービス名を入力してください："
    read service
    echo "ユーザー名を入力してください："
    read name
    echo "パスワードを入力してください："
    read password

    echo "${service}:${name}:${password}" >> $data_file_path
    echo "パスワードの追加は成功しました。"

  elif [ "$mode" = "Get Password" ]; then
    echo "サービス名を入力してください："
    read service
    result=$(grep "^$service:" $data_file_path)

    if [ -z "$result" ]; then
      echo "そのサービスは登録されていません。"
    else
      echo "サービス名：$service"
      name=$(grep "^$service:" $data_file_path | cut -f 2 -d ":")
      echo "ユーザー名：$name"
      password=$(grep "^$service:" $data_file_path | cut -f 3 -d ":")
      echo "パスワード：$password"
    fi

  elif [ "$mode" = "Exit" ]; then
      echo "Thank you!"
      break

  else
      echo "入力が間違えています。Add Password/Get Password/Exit から入力してください。"
  fi
done

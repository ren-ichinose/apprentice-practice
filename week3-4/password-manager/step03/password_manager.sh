#!/bin/bash

DATA_FILE_PATH="data.txt"

function error_handler() {
  if [ -f "$DATA_FILE_PATH" ]; then
    rm "$DATA_FILE_PATH"
  fi
  echo " Thank you!"
  exit 0
}
trap error_handler INT

echo "パスワードマネージャーへようこそ！"
while true;
do
  read -p "次の選択肢から入力してください(Add Password/Get Password/Exit)：" mode
  if [ "$mode" = "Add Password" ]; then
    read -p "サービス名を入力してください：" service
    read -p "ユーザー名を入力してください：" name
    read -sp "パスワードを入力してください：" password

    gpg "${DATA_FILE_PATH}.gpg"
    rm "${DATA_FILE_PATH}.gpg"
    echo "${service}:${name}:${password}" >> "$DATA_FILE_PATH"
    
    gpg -c "$DATA_FILE_PATH"
    rm "$DATA_FILE_PATH"

    echo "パスワードの追加は成功しました"

  elif [ "$mode" = "Get Password" ]; then
    read -p "サービス名を入力してください：" service

    gpg "${DATA_FILE_PATH}.gpg"
    result=$(grep "^$service:" "$DATA_FILE_PATH")
    rm "$DATA_FILE_PATH"
    
    if [ -z "$result" ]; then
      echo "そのサービスは登録されていません"
    else
      name=$(echo "$result" | cut -f 2 -d ":")
      password=$(echo "$result" | cut -f 3 -d ":")
      echo "サービス名：$service"
      echo "ユーザー名：$name"
      echo "パスワード：$password"
    fi

  elif [ "$mode" = "Exit" ]; then
      echo "Thank you!"
      break

  else
      echo "入力が間違えています。Add Password/Get Password/Exit から入力してください"
  fi
done


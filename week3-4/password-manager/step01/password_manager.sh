#!/bin/bash
data_file_path="data.txt"

echo "パスワードマネージャーへようこそ！"
echo "サービス名を入力してください："
read service_name
echo "ユーザー名を入力してください："
read user_name
echo "パスワードを入力してください："
read user_password
echo "${service_name}:${user_name}:${user_password}" >> $data_file_path
echo "Thank you!"

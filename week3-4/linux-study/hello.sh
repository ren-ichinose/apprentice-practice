!/bin/bash

# 「Hello!」と出力
echo "hello!"

# 入力された名前を出力
echo "What's your name?"
read name
echo "Welcome,$name"

# 入力された2つの数字と記号をもとに計算
echo "Enter two numbers:"
read first_number
read second_number

echo "Choose an arithmetic operation (+, -, *, /):"
read operation

if [ "$operation" = "+" ]; then
  echo $(($first_number+$second_number))
elif [ "$operation" = "-" ]; then
  echo $(($first_number-$second_number))
elif [ "$operation" = "*" ]; then
  echo $(($first_number*$second_number))
elif [ "$operation" = "/" ]; then
  echo $(($first_number/$second_number))
else
  echo "Invalid operator!"
fi

# 100までの数字のうち、偶数のみを表示する
for i in $(seq 1 100);
do
  if [ $(($i%2)) -eq 0 ]; then
    echo $i
  fi
done
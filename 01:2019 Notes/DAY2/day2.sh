#!/bin/sh

numberOne () {
  var1="kei.txt"
  dir=~/Desktop/MTECH
  echo "Please enter your username:"
  read username

  if [[ $username == "kei" ]]; then
    echo "hello ${username}"
    continue
  else
    echo "nope"
    exit 0
  fi
  # if statement to verify username
  if [[ -d ${dir} ]]; then
    echo "directory exists"
    continue
  else
    mkdir $dir
  fi


  mkdir DAY2
  cd DAY2
  echo "this is my 1st script" > var1
  pwd
  cat var1
  echo "that's all for now"
  exit 0
}

case $1 in
  one )
  numberOne ;;
esac

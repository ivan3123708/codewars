function removeChar() {
  str=$1
  echo "${str:1:${#str}-2}"
}
removeChar $1
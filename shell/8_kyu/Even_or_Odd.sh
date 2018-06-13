#!/bin/bash

n=$1
if [ $((n % 2)) = 0 ]
then
  echo Even
else 
  echo Odd
fi
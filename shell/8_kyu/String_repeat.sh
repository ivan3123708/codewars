#!/bin/bash
repeat=$1
string=$2
for ((i=0; i<$repeat; i++))
do
	echo -n $string
done
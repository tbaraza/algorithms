# xargs

echo a b c d | xargs

# find all files ending with .rb and delete them
find . -name "*.rb" | xargs rm -rf

# find all files that end with .js that contain 'import'
find . -name '*.js' | xargs grep 'import'

# expr
# perform operations and conditionals
expr 20 + 50
expr 3000 > 20

# partial match and returns the number of characters matched.
expr "tonida" : "ton"

# to print the matched characters instead of number of matching positions
expr "tonida" : '..\(...\)'

# increament variable :
y=10
y=`expr $y + 1`
echo $y

# expr length  "Andela"  "<"  5  "|"  15  -  4  ">"  8

#awk
# awk 'pattern {action}' input-file > output-file
touch table.txt
echo "1, Justin Timberlake, Title 545, Price $7.302
      2, Taylor Swift, Title 723 Price $7.903
      3, Mick Jagger, Title 610, Price $7.904,
      4, Lady Gaga, Title 118, Price $7.305,
      5, Johnny Cash, Title 482, Price $6.50" > table.txt

awk '{ print $2 }' table.txt > output1.txt

#sed
touch try.txt
echo "linux is great os. unix is opensource. unix is free os.learn operating system.linux linux which one you choose.linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful" > try.txt

# substitute first occurence of linux in each line with unix
sed 's/linux/unix/' try.txt

# to subsitute all occurences of linux run
sed 's/linux/unix/g' try.txt

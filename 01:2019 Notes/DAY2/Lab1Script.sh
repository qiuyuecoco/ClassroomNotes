function theFunction() {
# 1. Use 3 variables in script, 2 variables are set to text files.
#3rd variable is $1 (bash pre-defined variable where user sets value when calling script).
  apple="app.txt"
  banana="ban.txt"
  cutie=$1
  durian=$2
  directory=~/Desktop/MTECH/Lab1
  directory2=TXT

# 2. If statement to catch if $1 (variable passed as parameter when calling script) is null
#exit if it does not exist.
# 3. Message user before exiting if variable $1 is null.
  if [[ -z $cutie ]]; then
    echo "$0 has no arg."
    exit 0
  else
    echo $cutie
    continue
  fi
# 4. Message and prompt user for username.
# 5. Message and prompt user for password.
  echo "Please enter username: "
  read username
  echo "Please enter password: "
  read password
# 6. If statement to validate username and password with message if “username” or “password” is incorrect.
#Otherwise, continue with script.
  if [[ $username == "Kei" && $password == "admin1" ]]; then
# 7. Message user with “Authentication accepted, thanks username now lets get to that script.”
      echo "Authentication accepted, thanks ${username} now lets get to that script."
# 8. Message user that the “script is starting”.
      echo "script is starting"
      continue
  else
      echo "Username/Password is incorrect"
      exit 0
  fi
# 9. Create a new directing from current directory
#(If Desktop is the current directory then new directory would be in Desktop
#(e.g. ~/Desktop/newDir).
# 10. Change directory to newly created directory.
mkdir $directory
cd $directory
# 11. Write message directly to file.
echo "an apple a day keeps the doctor away" > $apple

# 12. Move file (variable1) to the directory you started your script (i.e. Desktop).
mv $apple ../
# 13. Print working directory to the terminal.
pwd
# 14. Change directory to the parent directory.
# 15. Create a new directory with the name TXT.
cd ../
pwd
mkdir $directory2
echo "new directory $directory2 created"
# 16. Write the value of $1 to second variable.
echo $cutie >> $banana
echo $durian >> $banana
# 17. Move variable 1 and variable 2 to the directory TXT inside of the current directory (i.e. Desktop).
mv $apple $directory2
mv $banana $directory2
# 18. Delete the new directory from Step 9. It is no longer needed.
rm -R $directory
# 19. Change directory to TXT.
cd $directory2
# 20. Print file names and contents of variables to the terminal.
ls
cat $apple
cat $banana
# 21. Print the working directory.
pwd $directory2
# 22. List the contents of the directory.
ls
# 23. Message user “Script finished. If variable 1 and variable 2 are in TXT folder you passed”.
echo "Script finished. If variable 1 and variable 2 are in TXT folder you passed."
}

# theFunction banana
case $1 in
  run )
  theFunction banana durian ;;
esac

#  theNameOfTheFunction firstArgument=$1 secondArgument=$2 Etc..
# Final Step: Test or Run script from terminal “sh script.sh $1" $1=value of variable.

# Cheat Sheet:
# * pwd (print working directory)
# * cd (cd .., cd -, etc)
# * mkdir (make directory)
# * mv (can also rename file)
# * cat (print file contents to console)
# * echo (print message to screen)
# * Variables ($variable and ${variable}, variable=variable spacing is important not variable = variable)
# * cp (copy)
# * touch (create empty file). Or app <filename>. i.e. atom newfile.txt
# * > (output command to file) usage : echo "message" > stuff.txt
# * read (read, prompt the user for input)
# * rm (rm <folder> or <file Name>)
# * Basic if statement. If [ condition ]; then something else something fi

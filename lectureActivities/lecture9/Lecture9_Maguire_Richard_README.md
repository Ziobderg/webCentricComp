<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->



# Lecture 8 Activity

* *Date Created*: 12 Feb 2024
* *Last Modification Date*: 12 Feb 2024
* *Activity URL*: <https://web.cs.dal.ca/~maguirer/csci3172/lecture9/>



## Author

* [Maguire Richard](maguire@dal.ca) - *Author*


## Sources Used

### script.js

*Lines 73*

```
let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

```

The code above was created by adapting the code in [StackOverflow - Srinivas](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a) as shown below: 

```
Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

```

- <!---How---> The code in [StackOverflow - Srinivas](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a was implemented by using the regex string in my passwordRegEx variable.
- <!---Why---> [StackOverflow - Srinivas](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a's Code was used since writing a regex string is very difficult and annoying, and this validation pattern has been done many times before so I knew it would be easy to access online.
- <!---How---> [StackOverflow - Srinivas](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a's regex string was modified to include _ and # since they were neglected.


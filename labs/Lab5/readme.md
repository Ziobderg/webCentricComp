<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 



# Lab 2

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 13 Feb 2024
* *Last Modification Date*: 13 Feb 2024
* *Lab URL*: <https://web.cs.dal.ca/~maguirer/csci3172/lab5/>
* *Git URL*: <https://git.cs.dal.ca/maguirer/csci3172-web-centric/-/tree/main/labs/Lab5?ref_type=heads>



## Authors

* [Maguire Richard](Maguire@dal.ca)


## Sources Used

### index.js

*Lines 51-63*

```
function isPrime(number){
    if (number < 2) {
        return "neither";
      }
    
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return "composite";
        }
      }
    
      return "prime";
}

```

The code above was created by adapting the code in [Medium](https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201) as shown below: 

```
function isPrime(number){
    if (number < 2) {
        return false;
      }
    
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
    
      return true;
}

```

- <!---How---> The code in [Medium](https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201) was implemented by adding the function into my script and using it to check the inputted number's prime status.
- <!---Why---> [Medium](https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201)'s Code was used since I needed a way to check the prime status of a number, and was unfamiliar with the math required to do so.
- <!---How---> [Medium](https://medium.com/@stheodorejohn/determining-prime-numbers-in-javascript-logic-and-code-optimization-14e02e1d9cad#:~:text=Simple%20Code%20Snippet%3A&text=console.,must%20be%20greater%20than%201)'s Function was modified to return a string so that prime, composite, and neither could all be returned.

## Built-in JS function

### index.js

*line 15*

```
let numbersArray = numbers.split(',');
```

- split() function was used to turn string input into an array, separated by commas.
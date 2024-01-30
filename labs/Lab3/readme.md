<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 



# Lab 2

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 30 Jan 2024
* *Last Modification Date*: 30 Jan 2024
* *Lab URL*: <https://web.cs.dal.ca/~maguirer/csci3172/lab3/>
* *Git URL*: <https://git.cs.dal.ca/maguirer/csci3172-web-centric/-/tree/main/labs/Lab2?ref_type=heads>



## Authors

* [Maguire Richard](Maguire@dal.ca)


## Sources Used


### index.html

*Lines 16-50*

```
<form id="form-elem">
    <label for="name-input">Name: </label>
    <div id="name-input" class="formDiv">
        <label for="firstName">First </label>
        <input type="text" id="firstName" name="firstName"/>
        <label for="lastName">Last </label>
        <input type="text" id="lastName" name="lastName"/>
    </div>

    <label for="gender-input">Gender: </label>
    <div id="gender-input" class="formDiv">
        <input type="radio" id="male" value="Male" name="gender"/>
        <label for="male">Male</label>
        <input type="radio" id="female" value="Female" name="gender"/>
        <label for="female">Female</label>
        <input type="radio" id="nonbin" value="Non-Binary" name="gender"/>
        <label for="nonbin">Non-Binary</label>
    </div>

    <label for="country-input">Country: </label>
    <div id="country-input" class="formDiv">
        
        <select name="country" id="country">
            <option value="canada">Canada</option>
            <option value="usa">United States</option>
            <option value="mexico">Mexico</option>
            <option value="ireland">Ireland</option>
            <option value="netherlands">Netherlands</option>
        </select>
    </div>

    <div id="submit-input" class="formDiv">
        <button type="button" id="submit-button">Submit</button>
    </div>
</form>

```

The code above was created by adapting the code in [W3Schools](https://www.w3schools.com/html/html_forms.asp) as shown below: 

```
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>

```

- <!---How---> The code in [W3Schools](https://www.w3schools.com/html/html_forms.asp) was implemented by referencing how a form is built in HTML and modifying it for my needs
- <!---Why---> [W3Schools](https://www.w3schools.com/html/html_forms.asp)'s Code was used because I needed to recall the proper parameters and element names used in forms
- <!---How---> [W3Schools](https://www.w3schools.com/html/html_forms.asp)'s Code was modified by changing parameter values to fit my needs, and using different elements where needed, such as with the country dropdown

### index.html

*Line 48*

```
<button type="button" id="submit-button">Submit</button>

```

The code above was created by adapting the code in [Metafaniel](https://stackoverflow.com/questions/932653/how-to-prevent-buttons-from-submitting-forms) as shown below: 

```
<button type="button">Button</button>

```

- <!---How---> The code in [Metafaniel](https://stackoverflow.com/questions/932653/how-to-prevent-buttons-from-submitting-forms) was implemented by adding the type="button" parameter to my button
- <!---Why---> [Metafaniel](https://stackoverflow.com/questions/932653/how-to-prevent-buttons-from-submitting-forms)'s Code was used because I needed the submit button to not refresh the page
- <!---How---> [Metafaniel](https://stackoverflow.com/questions/932653/how-to-prevent-buttons-from-submitting-forms)'s Code was modified by changing the button label and adding an id parameter

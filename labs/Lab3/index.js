var submit = document.getElementById("submit-button");
var displayArea = document.getElementById("display-area");
var form = document.getElementById("form-elem");

// a) preventDefault() is used to prevent the default behavior of an element from occurring
//      for example, a submit button by default will refresh the page, but since we are using js, this
//      may remove our changes added to the HTML, so we want to prevent that behavior.
submit.addEventListener("click", displayData, false);

function displayData(){
    var formData = new FormData(form);
    for(const pair of formData.entries()){
        displayArea.innerHTML += "<p>" + pair[0] + ": " + pair[1] + "</p>";
    }
}

// b) The changes I made to keep form data on the page was to change the submit button,
//      originally, it was an input with type="submit", but this was refreshing the page which revered changes.
//      Instead, I opted for a button with type="button", since this does not refresh the page.
//      <input type="submit">  ==>  <button type="button">
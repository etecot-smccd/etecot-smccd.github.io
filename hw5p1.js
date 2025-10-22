/* code a script that:
Will validate whether the user has entered data in the input text box, AND has checked one of the radio buttons, AND has checked at least one checkbox, AND has selected an option from the list of options in the select (or datalist) element.
If one of the data, from the user, is missing, you will show an error message in the output area
TIP: Make sure that if you display an error message because of a single field, you do not clear out the whole entire form unless all the fields would have error messages associated to them! It's horrible to have the user fill out all the form again when there was only one field with error, right? Remember about this type of detail that is related to user experience!
If ALL the requested data was input by the user, you will write a message in the output area such as "Thanks, your data was submitted!"
*/
const form = document.getElementById("surveyForm");
const output = document.getElementById("output");
output.innerHTML = "Hello! Please fill out the survey and click Submit.";
form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.innerHTML = ""; // Clear previous output
    const fullName = form.fullName.value.trim();
    const ageGroup = form.querySelector('input[name="ageGroup"]:checked');
    const browsers = form.querySelectorAll('input[name="browsers"]:checked');
    const moviePreference = form.moviePreference.selectedIndex;
    let errors = [];
    if (fullName === "") {
        errors.push("Please enter your full name.");
    }
    if (!ageGroup) {
        errors.push("Please select your age group.");
    }
    if (browsers.length === 0) {
        errors.push("Please select at least one browser.");
    }
    if (moviePreference === 0) {
        errors.push("Please select your movie preference.");
    }
    if (errors.length > 0) {
        output.innerHTML = errors.join("<br>");
    } else {
        output.innerHTML = "Thanks, your data was submitted!";
        form.reset(); // Clear the form
    }
});

/* You will write a script that will do the following:
As the user starts selecting the styles available (from the radio buttons, or from the checkboxes, or from the select (drop-down list)), you will apply the selected style to the area mentioned above (div or using the <main> tag)
IMPORTANT NOTES:
Remember that if the user checks a certain checkbox and later the user unchecks it, you will need to remove the style that was unchecked from the div (or main) area where the style(s) is(are) being applied.
The styles should be added as the user keeps selecting/checking the styles from the form you provided - this means that if the user checks the radio button with a color for the background and checks the bold of the checkbox group, both of these styles should be applied - it's not only applying the last style chosen!
You could never use a group of checkboxes to allow the user to choose different font-sizes because when a user sees a checkboxes, by default, you can check one or more boxes, right? This means that it would be impossible to apply two different font sizes at the same time. This type of selection would be more appropriate by using a group of radio buttons!
*/
const contentStyle = document.getElementById("mainContent").style;
const styleForm = document.getElementById("styleForm");
styleForm.addEventListener("change", function() {
    // Background color from radio buttons
    contentStyle.backgroundColor = styleForm.backgroundColor.value;
    // Font styles from checkboxes
    contentStyle.textDecoration = styleForm.textDecoration.checked ? styleForm.textDecoration.value : "";
    contentStyle.fontWeight = styleForm.fontWeight.checked ? styleForm.fontWeight.value : "";
    contentStyle.fontStyle = styleForm.fontStyle.checked ? styleForm.fontStyle.value : "";
    // Font size from select dropdown
    contentStyle.fontSize = styleForm.fontSize.value;
});

/* write a script that:
The user will type the FULL NAME or ABBREVIATION of the state he/she desires to get information not following any type of pre-determined capitalization. After the user clicks the button to get "State Info", you will verify if the state typed by the user exists in your database - only the states listed in the table above will exist in your database!
INFORMATION: It should not matter if the user typed the state or abbreviation using capital letters or lowercase or a mix of those.
TIP: Transform the input of the user and the data you are comparing either to uppercase or to lowercase so you can compare "banana with banana"! You can do that by using the toLowerCase() or toUpperCase() methods.
If the state does not exist, write a message in the output area saying something as "Sorry, we do not have information about this state! We only have information about....." - remember to be clear in your error message to guide the user!
If the state exists, you should present in the output/result area the information from the state required - think about presenting the information in a nice readable way!
*/
const censusData = [
    ["AL", "Alabama", "Montgomery", 5157699],
    ["AK", "Alaska", "Juneau", 740133],
    ["AZ", "Arizona", "Phoenix", 7582384],
    ["AR", "Arkansas", "Little Rock", 3088354],
    ["CA", "California", "Sacramento", 39431263],
    ["CO", "Colorado", "Denver", 5957493]
];
const form = document.getElementById("censusForm");
const output = document.getElementById("output");
output.innerHTML = "Hello! Please enter a state name or abbreviation and click Submit.";
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    output.innerHTML = ""; // Clear previous output
    const userInput = form.stateInput.value.trim().toLowerCase();
    const state = censusData.find(s => 
        s[0].toLowerCase() === userInput || s[1].toLowerCase() === userInput
    );
    if (!state) {
        output.innerHTML = "Sorry, we do not have information about this state! We only have information about: " +
            censusData.map(s => s[1] + "(" + s[0] + ")").join(", ") + ".";
    } else {
        output.innerHTML = `<strong>Thanks for your inquiry, here is the information you requested:<br>
            State abbr = ${state[0]}<br>
            State Name = ${state[1]}<br>
            Capital = ${state[2]}<br>
            Population = ${state[3].toLocaleString()}
            </strong>`;
    }
});

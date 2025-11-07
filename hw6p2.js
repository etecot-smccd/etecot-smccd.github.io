/* write a script using some Script methods you learned, to solve the following:
The user will type whatever content he/she wants in the textarea for the long content, and the user will also type a single character in the input box you provided. When the user clicks the submit button, you will:
Search for the character the user typed inside the content in the textarea and you will count how many times this character is shown in the big content
If the character is found, you will present a message in the output/result area that says how many times the character X shows up in the content where X is the single character typed by the user
If the character is not found, you will present a new window (using the window.open() method you learned), the message: "Search character X not found in the content you typed", where X is the single character typed by the user. You should also make sure that, in this case, you will clear the input box or textarea that would be presenting the result of a positive search
NOTE: The new window should be 300 pixels by 100 pixels (width by height) and should be presented on a place that do not obscure any of the main content on the page the user is working with - you will choose the best place depending on your layout
TIP: when presenting the new window, it will be GREAT, if you present a button that the user can click to CLOSE that new window
IMPORTANT NOTES:

Remember that it does not matter if the user types a lowercase letter to search - the match should be done and accepted if the text contains the same letter either in lowercase or uppercase. For example, letter "t" would be found twice in this text "This time"!
*/
const form = document.getElementById("contentForm");
const output = document.getElementById("output");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const content = form.contentInput.value;
    const charToSearch = form.letterInput.value;
    if (charToSearch.length !== 1) {
        output.value = "Please enter a singe letter to search.";
        return;
    }
    const count = search(charToSearch, content);
    if (count > 0) {
        output.value = `The character ${charToSearch} shows up ${count} time(s) in the content you typed.`;
    } else {
        const top = window.screenTop + 325;
        const left = window.screenLeft + 650;
        const windowFeatures = `top=${top},left=${left},width=300,height=100`;
        const newWindow = window.open("", "new_window", windowFeatures);
        newWindow.opener = null;   // this is for security!!!
        newWindow.focus();
        newWindow.document.title = "Character Not Found";
        newWindow.document.body.innerHTML = `
            <div style='margin:0 auto;'>
                <p>Search character ${charToSearch} not found in the content you typed.</p>
                <input type='button' value='Close Window' onclick='window.close()'>
            </div>
        `;
        newWindow.document.close();
        output.value = "";
    }
});

function search(charToSearch, content) {
    let count = 0;
    const lowerChar = charToSearch.toLowerCase();
    const lowerContent = content.toLowerCase();
    for (let i = 0; i < lowerContent.length; i++) {
        if (lowerContent.charAt(i) === lowerChar) {
            count++;
        }
    }
    return count;
}

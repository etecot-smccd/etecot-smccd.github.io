/* create a script to resolve the following:
After the user types the number in the input box and clicks on the button to submit, you need to make sure that the number has AT LEAST 4 decimal positions (no less than that)
If the user types an invalid number, you will display an error message in the output/result area
If the user types a valid number (with 4 decimals and it is a number), you will use Math.round, Math.sqrt, Math.floor, toFixed() etc. to obtain the following:
TIPS:
when reading the input, make sure you will be using parseFloat() to not lose the decimal numbers before doing the calculations requested
remember to use the toFixed() only at the time you will present the final result
round the floating-point number to the nearest integer
calculate the square root of the floating-point number and round it to an integer
round the floating-point number to the nearest tenths position
round the floating-point number to the nearest hundredths position
round the floating-point number to the nearest thousandths position
You will then present in the output/result area the original number typed by the user and the results you found for each calculation requested above
*/
const form = document.getElementById("mathForm");
const output = document.getElementById("output");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const userInput = form.numberInput.value.trim();
    const number = parseFloat(userInput);
    // Check if input is a valid number and has at least 4 decimal places
    if (isNaN(number) || !/^\d+\.\d{4,}$/.test(userInput)) {
        output.value = "You need to type a number with at least 4 decimals, please try again";
        return;
    }
    const roundedInteger = Math.round(number);
    const squareRoot = Math.round(Math.sqrt(number));
    const roundedTenth = number.toFixed(1);
    const roundedHundredth = number.toFixed(2);
    const roundedThousandth = number.toFixed(3);
    output.value = `You typed number ${number}
Rounded to the nearest integer = ${roundedInteger}
Square root rounded to integer = ${squareRoot}
Rounded to the nearest 10th position = ${roundedTenth}
Rounded to the nearest 100th position = ${roundedHundredth}
Rounded to the nearest 1000th position = ${roundedThousandth}`;
});

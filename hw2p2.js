/* You will write the JavaScript code that will:
receive the data from those three input boxes for the three integers after the user click on the button to process the data
you will calculate the sum, the average, and the product of the three integers
you will also calculate the smallest and the largest of the three integers typed
TIP: For finding the smallest and largest number, use the Math Object Methods of min and max
you will present the results of these calculations in the text area - DO NOT USE ALERT BOXES!!!
your script should not present any result if the user does not type NUMBERS in the input boxes and, instead, you should present an error message in the output (result) area.
*/
let btn = document.getElementById("btnProcess");
btn.onclick = function() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let output = document.getElementById("output");

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        output.value = "Error: Please enter valid numbers in all input boxes.";
        return;
    }

    let sum = num1 + num2 + num3;
    let average = sum / 3;
    let product = num1 * num2 * num3;
    let smallest = Math.min(num1, num2, num3);
    let largest = Math.max(num1, num2, num3);

    output.value = `Sum: ${sum}\nAverage: ${average}\nProduct: ${product}\nSmallest: ${smallest}\nLargest: ${largest}`;
}

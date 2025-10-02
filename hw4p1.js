/* Create a webpage for Part 1 and it will contain a script, using the for statement, that calculates the product and sum of every fourth integer from 5 to 25 inclusive and then displays the results, along with some accompanying text.

For example, when presenting the results, you could show two lines such as:
The result of 5 * 9 * 13 * 17 * 21 * 25 is ....
The result of 5 + 9 + 13 + 17 + 21 + 25 is .... 

On that same web page for Part 1, you will have another script, now using the while or do while statement, that calculates the product and sum of every third integer from 3 to 18 inclusive and then displays the results, along with some accompanying text.

For example, when presenting the results, you could show two lines such as:
The result of 3 * 6 * 9 * 12 * 15 * 18 is ....
The result of 3 + 6 + 9 + 12 + 15 + 18 is ....

You should use toLocaleString() to present the result with the correct punctuation - remember that it is really bad for users to read a big number such as 1342658 instead of reading as 1,342,658 that shows the separation of the thousands.
*/
let product1 = 1;
let sum1 = 0;
let productoutput1 = "";
let sumoutput1 = "";
for (let i = 5; i <= 25; i += 4) {
    product1 *= i;
    sum1 += i;
    if (productoutput1.length > 0) { productoutput1 += " * "; }
    if (sumoutput1.length > 0) { sumoutput1 += " + "; }
    productoutput1 += i;
    sumoutput1 += i;
}
productoutput1 = "The result of " + productoutput1 + " is " + product1.toLocaleString();
sumoutput1 = "The result of " + sumoutput1 + " is " + sum1.toLocaleString();
let product2 = 1;
let sum2 = 0;
let productoutput2 = "";
let sumoutput2 = "";
let i = 3;
while (i <= 18) {
    product2 *= i;
    sum2 += i;
    if (productoutput2.length > 0) { productoutput2 += " * "; }
    if (sumoutput2.length > 0) { sumoutput2 += " + "; }
    productoutput2 += i;
    sumoutput2 += i;
    i += 3;
}
productoutput2 = "The result of " + productoutput2 + " is " + product2.toLocaleString();
sumoutput2 = "The result of " + sumoutput2 + " is " + sum2.toLocaleString();
document.getElementById("output").innerText = productoutput1 + "\n" + sumoutput1 + "\n\n" + productoutput2 + "\n" + sumoutput2;

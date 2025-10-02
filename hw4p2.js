/* You will create a web page to teach kids about multiplication tables from 5 to 9. There will be 5 tables presented, one below the other, showing the multiplication of the numbers as shown below (showing below just the first table for you to see the pattern):

Number	Multiplier	Result
1	5	5
2	5	10
3	5	15
4	5	20
5	5	25
6	5	30
7	5	35
8	5	40
9	5	45
Notice that the first column of each table, will always shows numbers from 1 to 9.

The second column of each table (multiplier) will show the multiplier being used to build that specific table (in the example it is showing multiplier 5.

The third column is showing the result of the number column multiplied by the multiplier column.

There will be 5 tables in total, one below the other, to show the multipliers from 5 to 9.

The color of the first row of each table (the heading row) will be different from all the other rows of the table. Then, once you start coding the items of the table, every other row will get a light gray color and a white color (as shown in the example above).
*/
let output = document.getElementById("output");
let tables = "";
for (let multiplier = 5; multiplier <= 9; multiplier++) {
    tables += `<table>\n<thead>\n<tr class="header"><th>Number</th><th>Multiplier</th><th>Result</th></tr>\n</thead>\n<tbody>\n`;
    for (let number = 1; number <= 9; number++) {
        let result = number * multiplier;
        let rowClass = (number % 2 === 0) ? "even" : "odd";
        tables += `<tr class="${rowClass}"><td>${number}</td><td>${multiplier}</td><td>${result}</td></tr>\n`;
    }
    tables += `</tbody></table>\n<br>\n`;
}
output.innerHTML = tables;

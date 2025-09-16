/* There will be other input boxes so the user will input the quantity of items sold, for each item.

You will use that input to calculate how much the salesperson sold and how much he/she will earn, and then output the results.
TIP: Be sure to round the outputted results to 2 decimal places (money is not represented with more than 2 decimals, right?).

Use input boxes to input the number sold for each of the items 1-4.

You should also check for valid numeric input (make sure the number of items sold is never negative, < 0, as nobody sells negative quantity of items, right?)

All the boxes below Qty Sold and Total should be readonly as you will present the values from the calculations in your code - for example, the Qty Sold box beside the Item 1 should present the number typed by the user for the quantity the seller sold of Item 1, then, below the Total, the box that is related to Item 1 will show the gross amount of that sale which, of course will be the multiplication of the quantity sold of item 1 by the price of Item 1 (20.99), etc.
In the box beside Total Amount Sold, you will present the sum of all the values for each of the Total boxes (for item 1, item 2, item 3, item 4) and, again, remember to only present a number with 2 decimals.
Calculate the 9% of that Total Amount Sold value and add 250 to that result and this is the value you will present in the box beside Total Weekly Earnings, remember again to present a number with 2 decimals only.
For the input boxes besides Item 1, Item 2, Item 3, and Item 4, it will be better if you use input type="number" because if you use input type="text" you will need to test if the user typed a REAL number before doing ANY type of Math operation with that value!
If you need to issue an error message - for example, the user did not type a number for the Item 1, or Item 2, or Item 3, or Item 4 boxes, and/or the user typed a negative number in one of these boxes - you should not present any result value, only the error message. 
If the user fixes the error to a valid input, you should present the result values and, of course, clear the error message
*/
let btn = document.getElementById("btnSubmit");
btn.onclick = function() {
    function getQuantity(name) {
        const input = document.getElementById(name);
        let quantity = parseInt(input.value);
        return (isNaN(quantity) || quantity < 0) ? null : quantity;
    }
    function totalRow(row, qty, price, nameQty, nameTotal) {
        let rowElement = document.getElementById(row);
        let qtyElement = document.getElementById(nameQty);
        let totalElement = document.getElementById(nameTotal);
        if (qty === null) {
            rowElement.classList.add("error");
            qtyElement.value = "";
            totalElement.value = "";
            return null;
        }
        rowElement.classList.remove("error");
        qtyElement.value = qty;
        let total = qty * price;
        totalElement.value = total.toFixed(2);
        return total;
    }
    let totalItem1 = totalRow("item1Row", getQuantity("item1"), 20.99, "item1Qty", "item1Total");
    let totalItem2 = totalRow("item2Row", getQuantity("item2"), 12.75, "item2Qty", "item2Total");
    let totalItem3 = totalRow("item3Row", getQuantity("item3"), 9.95, "item3Qty", "item3Total");
    let totalItem4 = totalRow("item4Row", getQuantity("item4"), 35.89, "item4Qty", "item4Total");
    let totalAmountSoldElement = document.getElementById("totalAmountSold");
    let totalWeeklyEarningsElement = document.getElementById("totalWeeklyEarnings");
    if (totalItem1 === null || totalItem2 === null || totalItem3 === null || totalItem4 === null) {
        totalAmountSoldElement.value = "";
        totalWeeklyEarningsElement.value = "";
    }
    else {
        let totalAmountSold = totalItem1 + totalItem2 + totalItem3 + totalItem4;
        totalAmountSoldElement.value = totalAmountSold.toFixed(2);
        let totalWeeklyEarnings = Math.round(9 * totalAmountSold) / 100 + 250;
        totalWeeklyEarningsElement.value = totalWeeklyEarnings.toFixed(2);
    }
}

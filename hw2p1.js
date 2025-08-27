/* Create a webpage that contains a script (meaning it should be using JavaScript to present the result) tho display the following:
the letters xy in strong (bold) font, with font family Times New Roman, and the color red
the numbers 12 that should be written in blue color, and font family Arial
the numbers 89 that should be written in green color, emphasized (in italics), and font family Impact
Each of these pairs should be separated by one blank space.
Your output should look like this:       xy 12 89 */
document.getElementById("output").innerHTML = "<span style=\"font-family: 'times new roman'; color: red;\"><strong>xy</strong></span>&nbsp;<span style=\"font-family: arial; color: blue;\">12</span>&nbsp;<span style=\"font-family: impact; color: green\"><em>89</em></span>";

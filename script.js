var isDate = function (input) {
  //   write your code here
	 var testDate = new Date(input);

    // Check if the input is a valid date and the parsed date is not invalid
    return !isNaN(testDate.getTime());
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

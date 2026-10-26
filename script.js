function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var resultBox = document.getElementById("result");

    // Validation
    if (principal === "" || principal <= 0) {
        alert("Please enter a valid positive number for Principal amount.");
        document.getElementById("principal").focus();
        return;
    }
    if (rate === "" || rate < 0) {
        alert("Please enter a valid Interest rate.");
        document.getElementById("rate").focus();
        return;
    }
    if (years === "" || years <= 0) {
        alert("Please enter a valid number of years.");
        document.getElementById("years").focus();
        return;
    }

    // Calculation
    var interest = (principal * rate * years) / 100;
    var yearInFuture = new Date().getFullYear() + parseInt(years);

    // Display Result
    resultBox.style.display = "block";
    resultBox.innerHTML = `If you deposit <strong>$${principal}</strong>,<br>` +
                          `at an interest rate of <strong>${rate}%</strong>.<br>` +
                          `You will receive an amount of <strong>$${interest.toFixed(2)}</strong><br>` +
                          `in the year <strong>${yearInFuture}</strong>.`;
}
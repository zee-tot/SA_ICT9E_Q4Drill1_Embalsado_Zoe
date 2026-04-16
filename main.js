
function check_class() {

    var checker = parseFloat(document.getElementById("consumption").value);

    var A = "Lifeline Consumer";        // 0 – 100 kWh
    var B = "Low Consumption";          // 101 – 200 kWh
    var C = "Average Consumption";      // 201 – 300 kWh
    var D = "High Consumption";         // 301 – 500 kWh
    var E = "Very High Consumption";    // Above 500 kWh

    var descA = "Discounted electricity rates to help low-income households.";
    var descB = "Normal residential rate applies to your account.";
    var descC = "Typical electricity usage for an average Filipino household.";
    var descD = "Higher electricity usage — consider energy-saving measures.";
    var descE = "Heavy electricity usage. Review appliances and usage habits.";

    var colorA = "#00d4ff";  /* Cyan - Lifeline */
    var colorB = "#4ade80";  /* Green — Low */
    var colorC = "#facc15";  /* Yellow — Average */
    var colorD = "#fb923c";  /* Orange — High */
    var colorE = "#f87171";  /* Red — Very High */

    document.getElementById("message1").innerHTML = "";

    if (isNaN(checker) || checker === "" || checker < 0) {
        document.getElementById("message1").innerHTML = "⚠ Please enter a valid non-negative number.";
        document.getElementById("result-box").style.display = "none";
        return;
    }

    var classified = true;

    if (checker <= 100) {
        /* Tier A: Lifeline Consumer */
        showResult(A, descA, "0 – 100 kWh", colorA);
    }
    else if (checker <= 200) {
        /* Tier B: Low Consumption */
        showResult(B, descB, "101 – 200 kWh", colorB);
    }
    else if (checker <= 300) {
        /* Tier C: Average Consumption */
        showResult(C, descC, "201 – 300 kWh", colorC);
    }
    else if (checker <= 500) {
        /* Tier D: High Consumption */
        showResult(D, descD, "301 – 500 kWh", colorD);
    }
    else {
        /* Tier E: Very High Consumption */
        showResult(E, descE, "Above 500 kWh", colorE);
    }
}

function showResult(label, desc, range, color) {
    var labelEl = document.getElementById("result-label");
    labelEl.innerHTML = label;
    labelEl.style.color = color;
    labelEl.style.textShadow = "0 0 10px " + color + "88";

    document.getElementById("result-desc").innerHTML = desc;

    document.getElementById("result-range").innerHTML = "Range: " + range;

    document.getElementById("result-box").style.display = "block";
}

function resetForm() {
    document.getElementById("consumption").value = "";

    document.getElementById("message1").innerHTML = "";

    document.getElementById("result-box").style.display = "none";

    document.getElementById("consumption").focus();
}
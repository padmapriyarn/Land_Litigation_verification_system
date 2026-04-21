function searchLand() {
    const district = document.getElementById("district").value;
    const village = document.getElementById("village").value;
    const surveyNumber = document.getElementById("survey").value;

    fetch('/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ district, village, surveyNumber })
    })
    .then(res => res.json())
    .then(data => {
        let resultDiv = document.getElementById("result");

        if (data.length === 0) {
            resultDiv.innerHTML = "No records ❌ <br> பதிவுகள் இல்லை ❌";
        } else {
            let land = data[0];
            resultDiv.innerHTML = `
                Owner: ${land.owner} <br>
                உரிமையாளர்: ${land.owner} <br><br>

                Case Status: ${land.caseStatus} <br>
                வழக்கு நிலை: ${land.caseStatus}
            `;
        }
    });
}
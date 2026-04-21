function addData() {
    const district = document.getElementById("district").value;
    const village = document.getElementById("village").value;
    const surveyNumber = document.getElementById("survey").value;
    const owner = document.getElementById("owner").value;
    const caseStatus = document.getElementById("case").value;

    fetch('/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ district, village, surveyNumber, owner, caseStatus })
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("msg").innerText = data;
    });
}
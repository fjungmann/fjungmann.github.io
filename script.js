
function fetchAndUpdateRaceInfo() {
    var databaseRef = firebase.database().ref();

    // Fetch and update race date
    databaseRef.child("race_date").on('value', function(snapshot) {
        document.getElementById("raceDate").innerText = (snapshot.val() || "No data");
    });

    // Fetch and update race location
    databaseRef.child("race_location").on('value', function(snapshot) {
        document.getElementById("raceLocation").innerText = (snapshot.val() || "No data");
    });

    // Fetch and update race time
    databaseRef.child("race_time").on('value', function(snapshot) {
        document.getElementById("raceTime").innerText = (snapshot.val() || "No data");
    });

    // Fetch and update weather1
    databaseRef.child("weather1").on('value', function(snapshot) {
        document.getElementById("weather1").innerText = (snapshot.val() || "No data");
    });

    // Fetch and update weather2
    databaseRef.child("weather2").on('value', function(snapshot) {
        document.getElementById("weather2").innerText = (snapshot.val() || "No data");
    });
}
fetchAndUpdateRaceInfo();

function openLink(url) {
    window.open(url, '_blank');
}

function navigateToWeatherGenerator() {
    // Navigate to Weather Generator Page
    window.location.href = 'weather.html'; // Adjust as per your weather generator page
}

function showAlert() {
    alert('Coming Soon!');
}

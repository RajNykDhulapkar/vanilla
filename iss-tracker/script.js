const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

const lat = document.getElementById("lat");
const lon = document.getElementById("lon");

const map = L.map("map").setView([0, 0], 0);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
}).addTo(map);

var marker = L.marker([0, 0]).addTo(map);

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

let firstRun = true;

setInterval(async () => {
    const data = await getISS();
    if (firstRun) {
        map.setView([data.latitude, data.longitude], 10);
        firstRun = false;
    }
    marker.setLatLng([data.latitude, data.longitude]);
    lat.innerHTML = data.latitude;
    lon.innerHTML = data.longitude;
}, 1005);

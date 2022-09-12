const map = L.map('map').setView([56, 11.6], 6);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// get color depending on population density value
function getColor(labelEnglish) {
    if(labelEnglish === "Varde") {
        return '#800026'
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        click: function(feature, a, b) {
            console.log(feature.sourceTarget.feature.properties.label_dk)
        }
    });
}

/* global statesData */
L.geoJson(kommuneData, {
    style: function (feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.label_en)
        };
    },
    onEachFeature: onEachFeature
}).addTo(map);


export function tempTireFRI() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFRI',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireFRI',         
        coordinateProperties: ["TireTempFRIs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFRI ?? point.meta.tempTireFRI ?? point.prev('tempTireFRI')) || 0,
		stats: { max: _.iMax, min: _.iMin, avg: _.iAvg },
        scale: {
            axis       : "y",
            position   : "left",
            scale      : { min: -1, max: +1 },
            tickPadding: 25,
            labelX     : -30,
            labelY     : -8,
        },
        path: {
            label        : 'tempTireFRI',
            yAttr        : 'tempTireFRI',
            scaleX       : 'distance',
            scaleY       : 'tempTireFRI',
            color        : 'white',
            strokeColor  : 'brown',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFRI: ") + item.tempTireFRI + " " + '°C',
            marker: (item) => Math.round(item.tempTireFRI) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFRI": {
                label: "Min tempTireFRI: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFRI": {
                label: "Max tempTireFRI: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFRI": {
                label: "Avg tempTireFRI: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
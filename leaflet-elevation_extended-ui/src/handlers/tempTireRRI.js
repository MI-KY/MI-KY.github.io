export function TempTireRRI() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRRI',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRRI',         
        coordinateProperties: ["tireTempRRIs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRRI ?? point.meta.tempTireRRI ?? point.prev('tireTempRRI')) || 0,
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
            label        : 'tempTireRRI',
            yAttr        : 'tempTireRRI',
            scaleX       : 'distance',
            scaleY       : 'tempTireRRI',
            color        : 'white',
            strokeColor  : 'red',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRRI: ") + item.tempTireRRI + " " + '°C',
            marker: (item) => "RRI: " + Math.round(item.tempTireRRI) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRRI": {
                label: "Min tempTireRRI: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRRI": {
                label: "Max tempTireRRI: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRRI": {
                label: "Avg tempTireRRI: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
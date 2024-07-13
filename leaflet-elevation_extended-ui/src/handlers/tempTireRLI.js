export function TempTireRLI() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRLI',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRLI',         
        coordinateProperties: ["TireTempRLIs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRLI ?? point.meta.tempTireRLI ?? point.prev('tempTireRLI')) || 0,
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
            label        : 'tempTireRLI',
            yAttr        : 'tempTireRLI',
            scaleX       : 'distance',
            scaleY       : 'tempTireRLI',
            color        : 'white',
            strokeColor  : 'black',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRLI: ") + item.tempTireRLI + " " + '°C',
            marker: (item) => Math.round(item.tempTireRLI) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRLI": {
                label: "Min tempTireRLI: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRLI": {
                label: "Max tempTireRLI: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRLI": {
                label: "Avg tempTireRLI: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
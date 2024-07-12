export function TempTireFLI() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFLI',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireFLI',         
        coordinateProperties: ["tireTempFLIs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFLI ?? point.meta.tempTireFLI ?? point.prev('tireTempFLI')) || 0,
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
            label        : 'tempTireFLI',
            yAttr        : 'tempTireFLI',
            scaleX       : 'distance',
            scaleY       : 'tempTireFLI',
            color        : 'white',
            strokeColor  : 'blue',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFLI: ") + item.tempTireFLI + " " + '°C',
            marker: (item) => Math.round(item.tempTireFLI) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFLI": {
                label: "Min tempTireFLI: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFLI": {
                label: "Max tempTireFLI: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFLI": {
                label: "Avg tempTireFLI: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
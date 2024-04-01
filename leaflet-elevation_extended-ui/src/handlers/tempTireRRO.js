export function TempTireRRO() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRRO',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRRO',         
        coordinateProperties: ["tireTempRROs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRRO ?? point.meta.tempTireRRO ?? point.prev('tireTempRRO')) || 0,
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
            label        : 'tempTireRRO',
            yAttr        : 'tempTireRRO',
            scaleX       : 'distance',
            scaleY       : 'tempTireRRO',
            color        : 'white',
            strokeColor  : 'blue',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRRO: ") + item.tempTireRRO + " " + '°C',
            marker: (item) => Math.round(item.tempTireRRO) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRRO": {
                label: "Min tempTireRRO: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRRO": {
                label: "Max tempTireRRO: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRRO": {
                label: "Avg tempTireRRO: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
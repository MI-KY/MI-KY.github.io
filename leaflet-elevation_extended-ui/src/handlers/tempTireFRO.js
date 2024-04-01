export function TempTireFRO() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFRO',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireFRO',         
        coordinateProperties: ["TireTempFROs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFRO ?? point.meta.tempTireFRO ?? point.prev('tempTireFRO')) || 0,
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
            label        : 'tempTireFRO',
            yAttr        : 'tempTireFRO',
            scaleX       : 'distance',
            scaleY       : 'tempTireFRO',
            color        : 'white',
            strokeColor  : 'red',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFRO: ") + item.tempTireFRO + " " + '°C',
            marker: (item) => Math.round(item.tempTireFRO) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFRO": {
                label: "Min tempTireFRO: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFRO": {
                label: "Max tempTireFRO: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFRO": {
                label: "Avg tempTireFRO: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
export function TempTireFLO() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFLO',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireFLO',     
        coordinateProperties: ["TireTempFLOs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFLO ?? point.meta.tempTireFLO ?? point.prev('tempTireFLO')) || 0,
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
            label        : 'tempTireFLO',
            yAttr        : 'tempTireFLO',
            scaleX       : 'distance',
            scaleY       : 'tempTireFLO',
            color        : 'white',
            strokeColor  : 'red',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFLO: ") + item.tempTireFLO + " " + '°C',
            marker: (item) => Math.round(item.tempTireFLO) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFLO": {
                label: "Min tempTireFLO: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFLO": {
                label: "Max tempTireFLO: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFLO": {
                label: "Avg tempTireFLO: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
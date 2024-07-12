export function TempTireRLO() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRLO',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRLO',         
        coordinateProperties: ["TireTempRLOs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRLO ?? point.meta.tempTireRLO ?? point.prev('tempTireRLO')) || 0,
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
            label        : 'tempTireRLO',
            yAttr        : 'tempTireRLO',
            scaleX       : 'distance',
            scaleY       : 'tempTireRLO',
            color        : 'white',
            strokeColor  : 'cyan',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRLO: ") + item.tempTireRLO + " " + '°C',
            marker: (item) => Math.round(item.tempTireRLO) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRLO": {
                label: "Min tempTireRLO: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRLO": {
                label: "Max tempTireRLO: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRLO": {
                label: "Avg tempTireRLO: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
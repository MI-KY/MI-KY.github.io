export function tempTireFLM() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireFLM',      // <-- Your custom option name (eg. "heart: true")
        unit: '°C',
        meta: 'tempTireFLM',         
        coordinateProperties: ["tireTempFLMs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireFLM ?? point.meta.tempTireFLM ?? point.prev('tireTempFLM')) || 0,
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
            label        : 'tempTireFLM',
            yAttr        : 'tempTireFLM',
            scaleX       : 'distance',
            scaleY       : 'tempTireFLO',
            color        : 'white',
            strokeColor  : 'green',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireFLM: ") + item.tempTireFLM + " " + '°C',
            marker: (item) => Math.round(item.tempTireFLM) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireFLM": {
                label: "Min tempTireFLM: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireFLM": {
                label: "Max tempTireFLM: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireFLM": {
                label: "Avg tempTireFLM: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};
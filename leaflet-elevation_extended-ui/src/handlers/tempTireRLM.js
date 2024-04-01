export function TempTireRLM() {

    const _ = L.Control.Elevation.Utils;
    return {
        name: 'tempTireRLM',      // <-- Your custom option name (eg. "heart: true")
        unit: 'C',
        meta: 'tempTireRLM',         
        coordinateProperties: ["TireTempRLMs"], // List of GPX Extensions ("coordinateProperties") to be handled by "@tmcw/toGeoJSON"
        pointToAttr: (point, i) => (point.tempTireRLM ?? point.meta.tempTireRLM ?? point.prev('tempTireRLM')) || 0,
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
            label        : 'tempTireRLM',
            yAttr        : 'tempTireRLM',
            scaleX       : 'distance',
            scaleY       : 'tempTireRLM',
            color        : 'white',
            strokeColor  : 'magenta',
            strokeOpacity: "0.85",
            fillOpacity  : "0.1",
        },
        tooltip: {
            chart: (item) => L._("tempTireRLM: ") + item.tempTireRLM + " " + '°C',
            marker: (item) => Math.round(item.tempTireRLM) + " " + '°C',
            order: 1
        },
        summary: {
            "mintempTireRLM": {
                label: "Min tempTireRLM: ",
                value: (track, unit) => Math.round(track.temp_min || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "maxtempTireRLM": {
                label: "Max tempTireRLM: ",
                value: (track, unit) => Math.round(track.temp_max || 0) + '&nbsp;' + unit,
                // order: 30
            },
            "avgtempTireRLM": {
                label: "Avg tempTireRLM: ",
                value: (track, unit) => Math.round(track.temp_avg || 0) + '&nbsp;' + unit,
                // order: 20
            },
        }
    }
};